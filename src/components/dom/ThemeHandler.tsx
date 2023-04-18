import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';

export default function ThemeHandler() {
  useEffect(() => {
    const root = document.querySelector(':root');
    if (!root) return;
    console.log(root);
    const observer = new MutationObserver((event) => handleThemeChange(event));

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
      subtree: true,
      childList: false,
      characterData: true,
    });
  }, []);
  const { isDarkMode, enable, disable } = useDarkMode();

  // const tw = resolveConfig(tailwindConfig);
  function handleThemeChange(e: MutationRecord[]) {
    const isDark = (e[0].target as HTMLInputElement).checked;
    if (isDark) {
      console.log('dark mode');
      enable();
    } else {
      console.log('light mode');
      disable();
    }
  }

  return <></>;
}
