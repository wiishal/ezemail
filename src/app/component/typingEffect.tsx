import { useState, useEffect } from "react";

type TypingEffectProps = {
  text: string;
  speed?: number;
};

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <div className="text-sm font-mono border-r-2 border-black pr-1 animate-blink">
      {displayedText}
    </div>
  );
};

export default TypingEffect;
