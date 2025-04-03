import { useEffect } from 'react';


export default (keymap?: Record<string, () => void>) => {
  useEffect(() => {
    if (!keymap) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (event.key in keymap) {
        event.preventDefault();
        
        keymap[event.key]();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [keymap]);
}; 