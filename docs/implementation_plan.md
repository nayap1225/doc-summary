# 프로젝트 초기 설정 계획 (Project Setup Plan)

## 목표
사용자 요청에 따라 Vue 3, TypeScript, Vite, Tailwind CSS 기술 스택을 기반으로 `doc-summary` 프로젝트 환경을 구성합니다.

## 제안 변경 사항

### 1. 프로젝트 스캐폴딩 (Project Scaffolding)
- `npm create vite@latest . -- --template vue-ts` 명령어를 사용하여 현재 디렉토리에 Vue + TypeScript 템플릿 프로젝트를 생성합니다.

### 2. Tailwind CSS 설치 및 설정
- **설치**: `npm install -D tailwindcss postcss autoprefixer`
- **초기화**: `npx tailwindcss init -p` (설정 파일 생성)
- **설정 파일 수정**:
    - `tailwind.config.js`: `content` 배열에 소스 파일 경로(`./index.html`, `./src/**/*.{vue,js,ts,jsx,tsx}`)를 추가하여 사용되지 않는 스타일을 제거(Pre-flight)할 수 있게 합니다.

### 3. 스타일 적용
- `src/style.css` (또는 `src/main.css`) 파일을 생성/수정하여 Tailwind의 기본 지시어를 추가합니다:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## 검증 계획 (Verification Plan)
### 자동화 테스트
- `npm run build`를 실행하여 빌드 오류가 없는지 확인합니다.

### 수동 검증
- `npm run dev`로 개발 서버를 실행하고, `App.vue`에 Tailwind 유틸리티 클래스(예: `bg-blue-500`)를 적용하여 스타일이 올바르게 반영되는지 확인합니다.


---
# 📅 Archive Updated: 2026. 02. 02. 12:41:40
# 📄 File: implementation_plan.md
---

# 문서 아카이빙 스크립트 구현 계획

## 목표
`task.md`, `implementation_plan.md`, `walkthrough.md` 파일이 갱신될 때마다 `docs/` 폴더 내의 해당 파일에 내용을 덮어쓰지 않고 **추가(Append)** 하여 히스토리를 관리할 수 있는 도구를 제공합니다.

## 구현 상세
### 1. 스크립트 생성 (`scripts/archive_docs.js`)
- **기능**:
    - Brain 아티팩트 디렉토리에서 대상 파일들을 읽습니다.
    - `docs/` 폴더가 없으면 생성합니다.
    - 대상 파일이 `docs/`에 이미 존재하면, 현재 날짜/시간 헤더와 함께 내용을 **뒤에 추가(Append)** 합니다.
    - 대상 파일이 없으면 새로 생성합니다.
- **대상 파일**: `task.md`, `implementation_plan.md`, `walkthrough.md`
- **경로 설정**: 아티팩트 경로는 현재 세션의 절대 경로를 사용합니다.

### 2. package.json 스크립트 추가
- `npm run archive` 명령어로 쉽게 실행할 수 있도록 `package.json`의 `scripts` 섹션에 추가합니다.

## 검증 계획
- 스크립트 실행 후 `docs/` 폴더의 파일들이 기존 내용을 유지하면서 새로운 내용이 추가되는지 확인합니다.


---
# 📅 Archive Updated: 2026. 02. 02. 13:29:05
# 📄 File: implementation_plan.md
---

# Pinia 설치 및 초기 설정 계획

## 목표
Vue 3 프로젝트에 상태 관리 라이브러리인 Pinia를 설치하고, 기본적인 사용 환경을 구성합니다.

## 제안 변경 사항

### 1. 패키지 설치
- `npm install pinia` 명령어로 라이브러리를 설치합니다.

### 2. 진입점 수정 (`src/main.ts`)
- `createPinia`를 import하고 Vue 앱 인스턴스에 등록(`use`)합니다.

### 3. 스토어 생성 (`src/stores/counter.ts`)
- `src/stores` 디렉토리를 생성합니다.
- Composition API 스타일(`defineStore`, `ref`, `computed`)을 사용하여 간단한 `counter` 스토어를 생성합니다. 이는 Pinia가 정상 동작하는지 확인하는 용도입니다.

### 4. 컴포넌트 연결 (`src/components/HelloWorld.vue`)
- 기존 `HelloWorld.vue`의 로컬 상태(`ref`) 대신 Pinia 스토어의 상태와 액션을 사용하도록 수정하여 연동을 테스트합니다.

## 검증 계획
- `npm run build`로 타입 에러 없이 빌드되는지 확인합니다.
- `npm run dev` 실행 중인 서버에서 버튼 클릭 시 카운트가 정상적으로 증가하는지 확인합니다.


---
# 📅 Archive Updated: 2026. 02. 02. 13:47:46
# 📄 File: implementation_plan.md
---

# 문서 요약 스튜디오 UI 구현 계획

## 목표
"문서요약 프로젝트"의 초기 제작 화면인 Studio UI를 구현합니다. "작업실" 느낌의 UX를 제공하며, 백엔드 연동을 고려한 서비스 구조를 설계합니다.

## 기술 스택 및 설정
- **Core**: Vue 3, Vite, TypeScript, TailwindCSS
- **Routing**: `vue-router` (신규 설치)
- **Responsive**: Breakpoints `tb: 767px`, `dt: 1240px`

## 제안 변경 사항

### 1. 라우팅 및 환경 설정
- **패키지**: `npm install vue-router@4`
- **Tailwind Config**: `tailwind.config.js`에 사용자 정의 breakpoint 추가.
- **Router 설정**:
    - `/parser-setup`: Parser Setup 화면 (초기 진입점)
    - `/prompt-studio`: Prompt Studio 화면

### 2. 레이아웃 구조 (`src/layouts/StudioLayout.vue`)
- **Header**: 프로젝트명, 단계별 Stepper (현재 위치 표시).
- **Sidebar**: 네비게이션 링크 (모바일에서는 햄버거 메뉴 또는 하단 탭 고려).
- **Content**: `RouterView`가 렌더링되는 메인 작업 영역. 가이드 문구를 우측이나 상단에 배치.

### 3. 기능: Step 1 Parser Setup (`src/views/ParserSetup.vue`)
- **File Upload**: Drag & Drop 영역, 파일 선택 버튼. (TXT, DOCX, PDF, HWP 지원 표시)
- **Parser Settings**: 파싱 옵션 폼 (Chunk Size, Overlap 등 - UI만 구현).
- **Preview**: 업로드된 파일의 파싱 결과를 보여주는 Mock UI (좌측: 원본 리스트, 우측: 텍스트 미리보기).

### 4. 서비스 레이어 (`src/services/mockParserService.ts`)
- 백엔드 연동 전이므로, 파일 업로드 시 가짜(Mock) 데이터를 반환하는 비동기 함수 구조를 미리 잡아둡니다. `useParserStore` (Pinia)와 연동하여 상태를 관리합니다.

## 검증 계획
- **반응형 테스트**: 767px, 1240px 기준으로 레이아웃이 깨지지 않고 적절히 변하는지 확인.
- **기능 테스트**: 라우팅 이동, 파일 선택 시 UI 변경 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 14:03:19
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 14:14:46
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 14:32:35
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 14:39:32
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 14:44:07
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 14:45:18
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 14:58:05
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 15:13:16
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 15:22:46
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 15:27:53
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 15:29:49
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 15:35:15
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 15:59:45
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 16:05:51
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 16:13:54
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 16:18:09
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 16:56:29
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 17:02:07
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 17:09:20
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 17:21:09
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.


---
# 📅 Archive Updated: 2026. 02. 02. 17:56:33
# 📄 File: implementation_plan.md
---

# Parser Setup 기능 확장 및 UI 개편 (청크리스트 제거)

## 목표
사용자 피드백을 반영하여 **청크 리스트 뷰를 제거**하고, 파일 업로드 및 요약 결과 확인에 집중된 직관적인 UI를 구현합니다.

## 제안 변경 사항

### 1. UI 구조 개편: Parser Setup (`src/views/ParserSetup.vue`)
- **레이아웃**: 좌/우 분할(청크/프리뷰)을 제거하고, **단일 메인 뷰**로 변경합니다.
- **상단 컨트롤**:
    - [전체 요약 시작] 버튼 (모든 대기 파일 순차 처리)
    - [System Prompt] 버튼 (설정 모달 오픈)
- **파일 영역**:
    - 상단: Drag & Drop 업로드 박스 (작게 배치).
    - 하단: 업로드된 파일 리스트 (Grid 또는 List 형태).
- **파일 카드 아이템**:
    - **정보**: 파일명, 상태 뱃지 (대기중 / 처리중 / 완료).
    - **액션**: [요약하기] 버튼 (개별 실행).
    - **결과**: 요약 완료 시 카드 내에 '요약 결과' 텍스트 표시 (더보기/접기 가능).

### 2. Mock Service 수정 (`src/services/mockParserService.ts`)
- `uploadAndParse`가 단순히 청크를 나누는 것이 아니라, **"가짜 요약문"**을 반환하도록 로직을 변경합니다.
- 다중 파일 처리를 위해 각 파일마다 고유 ID를 부여하여 반환합니다.

### 3. Store 구조 변경 (`src/stores/parser.ts`)
- `currentDoc` (단일) → `files` (배열) 구조로 변경.
- 각 파일 객체 구조:
    ```typescript
    interface FileItem {
      id: string
      file: File
      status: 'idle' | 'parsing' | 'done' | 'error'
      summary?: string
    }
    ```
- 정교한 개별/전체 요약 액션 구현.

### 4. 신규 컴포넌트: System Prompt Modal (`src/components/SystemPromptModal.vue`)
- 헤더의 [System Prompt] 버튼 클릭 시 나타나는 모달.
- 시스템 프롬프트를 수정하고 저장할 수 있는 `textarea` 제공.

## 검증 계획
- 파일을 여러 개 추가했을 때 리스트에 정상적으로 쌓이는지 확인.
- 청크 리스트 없이 파일 카드가 깔끔하게 표시되는지 확인.
- [요약하기] 버튼 클릭 시 로딩 후 결과 텍스트가 카드에 표시되는지 확인.
