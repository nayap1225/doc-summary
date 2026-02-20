import { openDB, type DBSchema, type IDBPDatabase } from 'idb';

interface SavedDocument {
  id: string;
  fileName: string;
  fileType: 'audio' | 'document';
  fileSize: number;
  content?: string;
  summary?: string | any[];
  resultType?: 'extraction' | 'summary';
  isStarred?: boolean;
  createdAt: number;
  updatedAt: number;
}

interface SavedSession {
  id: string;
  title?: string;
  files: SavedDocument[];
  isStarred?: boolean;
  createdAt: number;
  updatedAt: number;
}

interface DocSummaryDB extends DBSchema {
  sessions: {
    key: string;
    value: SavedSession;
    indexes: { 'by-date': number };
  };
}

const DB_NAME = 'doc-summary-db';
const DB_VERSION = 2; // Version Bump
const STORE_NAME = 'sessions';

class IndexedDBService {
  private dbPromise: Promise<IDBPDatabase<DocSummaryDB>>;

  constructor() {
    this.dbPromise = openDB<DocSummaryDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('by-date', 'updatedAt');
        }
      },
    });
  }

  async getAllSessions(): Promise<SavedSession[]> {
    const db = await this.dbPromise;
    return db.getAllFromIndex(STORE_NAME, 'by-date');
  }

  async getSession(id: string): Promise<SavedSession | undefined> {
    const db = await this.dbPromise;
    return db.get(STORE_NAME, id);
  }

  async saveSession(session: SavedSession): Promise<string> {
    const db = await this.dbPromise;
    return db.put(STORE_NAME, session);
  }

  async deleteSession(id: string): Promise<void> {
    const db = await this.dbPromise;
    await db.delete(STORE_NAME, id);
  }

  async clearAll(): Promise<void> {
    const db = await this.dbPromise;
    await db.clear(STORE_NAME);
  }
}

export const dbService = new IndexedDBService();
export type { SavedDocument, SavedSession };
