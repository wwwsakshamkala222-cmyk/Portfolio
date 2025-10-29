import { useState, useEffect } from 'react';

const useTypingEffect = (words = [], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Safety check
  if (!words || words.length === 0) {
    return '';
  }

  useEffect(() => {
    if (!words || words.length === 0) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pauseTime);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  return words[index]?.substring(0, subIndex) || '';
};

export default useTypingEffect;