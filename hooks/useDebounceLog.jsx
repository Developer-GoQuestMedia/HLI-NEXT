import { useRef, useCallback } from 'react';

export function useDebounceLog(delay = 100) {
  const lastLogTime = useRef({});

  const log = useCallback((message) => {
    const now = Date.now();
    if (!lastLogTime.current[message] || now - lastLogTime.current[message] > delay) {
      console.log(message);
      lastLogTime.current[message] = now;
    }
  }, [delay]);

  return log;
}
