/**
 * 파일 용량(bytes)을 사람이 읽기 편한 단위(KB, MB, GB 등)로 변환합니다.
 * @param bytes 파일 용량 (bytes)
 * @param decimals 소수점 자리수 (기본값: 1)
 * @returns 변환된 용량 문자열 (예: "1.2 MB")
 */
export function formatFileSize(bytes: number, decimals: number = 1): string {
  if (bytes === 0) return '0 B';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
