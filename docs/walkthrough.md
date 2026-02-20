# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.


## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 12:41:40
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.


## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 13:29:05
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.



## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 13:47:46
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).




## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 14:03:19
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리.
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.





## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 14:14:46
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 가로 배치하고, System Prompt 버튼을 화면 하단으로 이동.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`index.html` CDN 추가, Tailwind 기본 폰트 설정).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 14:32:35
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`, `button` 등 폼 요소 포함 명시적 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 14:39:32
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가 및 드롭존 안내 문구 표시.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`, `button` 등 폼 요소 포함 명시적 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 14:44:07
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가 및 드롭존 안내 문구 표시.
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 14:45:18
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가 및 드롭존 안내 문구 표시.
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 14:58:05
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 설치 및 환경 설정(`.env`). Mock Service를 실제 API Service(`apiParserService.ts`)로 교체하여 `/summarize` 엔드포인트 호출 구현.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 15:13:16
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 설치 및 환경 설정(`.env`). Mock Service를 실제 API Service(`apiParserService.ts`)로 교체하여 `/summarize` 및 `/system-prompt` 엔드포인트 호출 구현.
- **초기화 로직**: `ParserSetup` 진입 시 시스템 프롬프트를 자동으로 가져와 모달 기본값으로 설정.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 15:22:47
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 설치 및 환경 설정(`.env`). `vite.config.ts` Proxy 설정으로 CORS 이슈 해결. Mock Service를 실제 API Service(`apiParserService.ts`)로 교체.
- **초기화 로직**: `ParserSetup` 진입 시 시스템 프롬프트를 자동으로 가져와 설정 (`watch` 반응성 적용). **LocalStorage 연동**으로 값 유지 및 API 실패 시 기존 값 사용.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 15:27:53
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 설치 및 Proxy 설정. `apiParserService.ts`에서 `/summarize`, `/system-prompt` (GET/POST) 엔드포인트 구현.
- **초기화 로직**: `ParserSetup` 진입 시 시스템 프롬프트를 자동으로 가져와 설정. 수정 시 **LocalStorage**와 **서버**에 동시 저장(낙관적 업데이트).
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 15:29:49
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 설치 및 Proxy 설정. `apiParserService.ts`에서 `/summarize`, `/system-prompt` (GET/POST) 엔드포인트 구현.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 15:35:15
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 설치 및 Proxy 설정. `apiParserService.ts`에서 `/summarize`, `/system-prompt` (GET/POST) 엔드포인트 구현. `POST` 요청 필드명 `system_prompt`로 통일하여 422 에러 해결.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 15:59:45
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 및 Proxy 설정. `POST` 요청 시 `/analyze-file` (프롬프트 O), `/parse-file` (프롬프트 X) 사용.
- **UI/UX 개선**: 개별 파일 카드에 **Extract Text** (단순 파싱)와 **Summarize** (분석 요약) 버튼을 분리하여 제공. 'Summarize All' 클릭 시 순차적으로 분석 수행.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 16:05:51
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 및 Proxy 설정. `POST` 요청 시 `/analyze-file` (프롬프트 O), `/parse-file` (프롬프트 X) 사용.
- **UI/UX 개선**: 개별 파일 카드에 **Extract Text** 와 **Summarize** 버튼 제공. 상단에 **Extract All** 과 **Summarize All** 버튼을 배치하여 일괄 작업 지원.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 16:13:54
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 및 Proxy 설정. `POST` 요청 시 `/analyze-file`, `/parse-file` 사용.
- **UI/UX 개선**: 개별/전체 작업 버튼 분리 및 `FileUpload`, `DocumentList` 컴포넌트화를 통한 유지보수성 향상.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 16:18:09
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 및 Proxy 설정. `POST` 요청 시 `/analyze-file`, `/parse-file` 사용.
- **UI/UX 개선**: 개별/전체 작업 버튼 분리 및 `FileUpload`, `DocumentList` 컴포넌트화를 통한 유지보수성 향상. `BaseButton` 컴포넌트와 `lucide-vue-next` 아이콘 패키지를 도입하여 UI 일관성 강화.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 16:56:29
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 및 Proxy 설정. `POST` 요청 시 `/analyze-file`, `/parse-file` 사용. 시스템 프롬프트 평가(`/judge-system-prompt`) 및 예시(`/example-system-prompt`) 테스트를 위한 실험실 UI 추가.
- **UI/UX 개선**: `BaseButton` 적용, 배지 색상 구분, 중복 상태 표시 제거. 'Completed' 체크 아이콘 및 텍스트 제거, **결과 배지와 삭제 버튼만 유지**하여 심플한 UI 구현. 리스트 헤더에 **Collapse All** 버튼 추가 및 요약 결과 영역 스크롤(`max-height: 450px`) 적용.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 17:02:07
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 및 Proxy 설정. `POST` 요청 시 `/analyze-file`, `/parse-file` 사용. 시스템 프롬프트 평가(`/judge-system-prompt` + `prompt` param) 및 예시(`/example-system-prompt` + `integer` param) 테스트를 위한 실험실 UI 추가.
- **UI/UX 개선**: `BaseButton` 적용, 배지 색상 구분, 중복 상태 표시 제거. 'Completed' 체크 아이콘 및 텍스트 제거, **결과 배지와 삭제 버튼만 유지**하여 심플한 UI 구현. 리스트 헤더에 **Collapse All** 버튼 추가 및 요약 결과 영역 스크롤(`max-height: 450px`) 적용.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 17:09:20
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 및 Proxy 설정. `POST` 요청 시 `/analyze-file`, `/parse-file` 사용. 시스템 프롬프트 평가(`/judge-system-prompt` + `prompt` param) 및 예시(`/example-system-prompt` + `integer` param) 테스트를 위한 실험실 UI 추가.
- **UI/UX 개선**: `BaseButton` 적용, 배지 색상 구분, 중복 상태 표시 제거. 'Completed' 체크 아이콘 및 텍스트 제거, **결과 배지와 삭제 버튼만 유지**하여 심플한 UI 구현. 리스트 헤더에 **Collapse All** 버튼 추가 및 요약 결과 영역 스크롤(`max-height: 450px`) 적용. 실험실 영역에 초기화 버튼과 높이 조절 적용.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트 **SUIT** 적용을 위해 불필요한 `font-sans`, `font-mono`, `font-bold` 등 Tailwind 기본 폰트 클래스를 전역적으로 제거 및 정리.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 17:21:09
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 및 Proxy 설정. `POST` 요청 시 `/analyze-file`, `/parse-file` 사용. 시스템 프롬프트 평가(`/judge-system-prompt` + `prompt` param) 및 예시(`/example-system-prompt` + `integer` param) 테스트를 위한 실험실 UI 추가.
- **UI/UX 개선**: `BaseButton` 적용, 배지 색상 구분, 중복 상태 표시 제거. 'Completed' 체크 아이콘 및 텍스트 제거, **결과 배지와 삭제 버튼만 유지**하여 심플한 UI 구현. 리스트 헤더에 **Collapse All** 버튼 추가 및 요약 결과 영역 스크롤(`max-height: 450px`) 적용. 실험실 영역에 초기화 버튼과 높이 조절 적용.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트 **SUIT** 적용을 위해 불필요한 `font-sans`, `font-mono`, `font-bold` 등 Tailwind 기본 폰트 클래스를 전역적으로 제거 및 정리.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.


---
# 📅 Archive Updated: 2026. 02. 02. 17:56:33
# 📄 File: walkthrough.md
---

# 프로젝트 초기 설정 완료 (Project Setup Complete)

## 요약
사용자 요청에 따라 `doc-summary` 폴더에 Vue 3 + TypeScript + Vite 기반 프로젝트를 생성하고, Tailwind CSS v3를 설정했습니다.

## 변경 내역 (Changes)
### 1. 프로젝트 생성
- `npm create vite@latest . -- --template vue-ts` 명령어로 기본 스캐폴딩 생성.
- `package.json` 등 기본 설정 파일 생성됨.

### 2. 패키지 설치
- `npm install`: 기본 의존성 설치
- `npm install -D tailwindcss@3 postcss autoprefixer`: Tailwind CSS v3 및 관련 도구 설치 (v4 초기화 이슈로 v3 사용)

### 3. Tailwind CSS 설정
- `tailwind.config.js`: Vue, TS 파일을 감지하도록 `content` 경로 설정 완료.
- `postcss.config.js`: 기본 생성.
- `src/style.css`: Tailwind 기본 지시어(`@tailwind base; ...`) 추가.

### 4. 검증 결과
- `npm run build`: **성공**. TypeScript 컴파일 및 Vite 빌드가 정상적으로 완료되었습니다.

### 5. 트러블슈팅 (CSS 미적용 문제)
- **증상**: 초기 설정 후 Tailwind CSS가 적용되지 않은 것처럼 보임.
- **원인**: `App.vue`가 기본 CSS 스타일만 사용하고 있었고, Tailwind 유틸리티 클래스가 없어서 시각적인 변화가 없었음.
- **조치**: `App.vue`의 내용을 수정하여 `bg-gray-100`, `text-blue-600` 등 명확한 Tailwind 클래스를 적용함.

### 6. Pinia 상태 관리 추가
- **설치**: `npm install pinia` 및 `main.ts` 등록.
- **구현**: `src/stores/counter.ts` 생성(기본 카운터 예제).
- **테스트**: `HelloWorld.vue`에서 로컬 `ref` 대신 Pinia 스토어를 사용하도록 수정. `npm run build` 검증 완료.

### 7. Studio UI 구현 (문서요약 프로젝트)
- **설정**: `vue-router` 설치, Tailwind 767px(tb)/1240px(dt) 브레이크포인트 추가.
- **레이아웃**: `StudioLayout` (좌측 사이드바, 헤더, 반응형).
- **기능**: Step 1 Parser Setup 화면 구현.
    - 파일 업로드 UI (Drag & Drop).
    - Mock Parser Service 및 Pinia Store 연동.
    - 파싱 결과 미리보기 (Mobile: 스택, Desktop: 2단 분할).

### 8. 기능 확장 및 UI 개편 (Parser Setup)
- **UI 변경**: 복잡한 청크 리스트 뷰를 제거하고, **파일 카드 리스트** 형태로 변경.
- **다중 파일**: 여러 파일을 업로드하고 관리할 수 있도록 `parser` Store 구조 변경.
- **요약 실행**:
    - **개별 실행**: 각 파일 카드의 [Summarize] 버튼으로 수행.
    - **전체 실행**: 상단의 [Summarize All] 버튼으로 대기 중인 파일 일괄 처리 (System Prompt 버튼과 분리됨).
- **System Prompt**: 상단 [System Prompt] 버튼 클릭 시 모달(`SystemPromptModal.vue`)이 뜨고 내용을 수정/저장 가능.
- **모바일 개선**: 헤더에서 타이틀과 설명을 수직 배치하고, System Prompt 버튼을 **Title 바로 아래 우측**에 배치 (CSS 반응형 클래스 활용, 단일 버튼 사용).
- **레이아웃**: `StudioLayout`에서 **사이드바를 제거**하고 전체 너비 레이아웃으로 변경 (네비게이션 간소화).
- **파일 검증**: 업로드 시 확장자(TXT, DOCX, PDF, HWP) 검사 로직 추가. 드롭존 안내 문구 **가시성 강화** (폰트 확대 및 색상 강조).
- **알림 시스템**: 커스텀 `CommonAlert` 컴포넌트와 Pinia Store(`alert`)를 구현하여 기본 `alert` 차단 및 스타일링된 모달 제공.
- **API 연동**: `Axios` 및 Proxy 설정. `POST` 요청 시 `/analyze-file`, `/parse-file` 사용. 시스템 프롬프트 평가(`/judge-system-prompt` + `prompt` param) 및 예시(`/example-system-prompt` + `integer` param) 테스트를 위한 실험실 UI 추가.
- **UI/UX 개선**: `BaseButton` 적용, 배지 색상 구분, 중복 상태 표시 제거. 'Completed' 체크 아이콘 및 텍스트 제거, **결과 배지와 삭제 버튼만 유지**하여 심플한 UI 구현. 리스트 헤더에 **Collapse All** 버튼 추가 및 요약 결과 영역 스크롤(`max-height: 450px`) 적용. 실험실 영역에 초기화 버튼과 높이 조절 적용.
- **초기화 및 동기화**: 앱 시작 및 저장 완료 시 최신 시스템 프롬프트 조회. **LocalStorage**와 **백엔드** 동시 반영으로 데이터 정합성 유지.
- **스타일링**: 기본 폰트 **SUIT** 적용을 위해 불필요한 `font-sans`, `font-mono`, `font-bold` 등 Tailwind 기본 폰트 클래스를 전역적으로 제거 및 정리.
- **스타일링**: 기본 폰트를 **SUIT**로 변경 (`input`, `textarea`의 `font-mono` 제거 포함, 전역 스타일 적용).








## 다음 단계 (Next Steps)
- `npm run dev`를 실행하여 로컬 개발 서버를 띄우고 코딩을 시작할 수 있습니다.
- `src/App.vue` 등에서 Tailwind 클래스(`bg-red-500` 등)를 사용하여 스타일링을 바로 적용해볼 수 있습니다.
