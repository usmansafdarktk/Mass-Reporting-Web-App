import { useState, useEffect, FC } from "react";

interface FlipWordsProps {
  words: string[];
  interval?: number;
}

export const FlipWords: FC<FlipWordsProps> = ({ words, interval = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const wordSwitch = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(wordSwitch);
  }, [words, interval]);

  return (
    <span className="font-bold mx-2 bg-white text-[#0056D2] dark:text-[#e7c94d]">
      {words[currentWordIndex]}
    </span>
  );
};
