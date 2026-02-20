import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'light' | 'dark'>('light');

  const initTheme = () => {
    const cachedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // 1. 시스템 설정 변경 감지 리스너 (User preference가 없을 때만 작동)
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        theme.value = e.matches ? 'dark' : 'light';
        applyTheme();
      }
    });

    // 2. 초기 테마 설정: 저장된 값이 있으면 사용, 없으면 시스템 설정 사용
    if (cachedTheme) {
      theme.value = cachedTheme;
    } else {
      theme.value = mediaQuery.matches ? 'dark' : 'light';
    }
    applyTheme();
  };

  const toggleTheme = () => {
    // 버튼 클릭 시: 현재 상태 반전 및 로컬 스토리지 저장 (이제부터 시스템 설정 무시)
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    applyTheme();
    localStorage.setItem('theme', theme.value);
  };

  const applyTheme = () => {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    theme,
    initTheme,
    toggleTheme,
  };
});
