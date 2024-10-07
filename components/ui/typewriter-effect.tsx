import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const renderWords = () => {
    return (
      <div>
        {wordsArray.slice(0, currentWordIndex + 1).map((word, idx) => (
          <div key={`word-${idx}`} className='inline-block'>
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(`dark:text-white text-black`, word.className)}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (isTyping && currentWordIndex < wordsArray.length - 1) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 1000); 
      return () => clearTimeout(timer);
    } else if (currentWordIndex === wordsArray.length - 1) {
      
      const resetTimer = setTimeout(() => {
        setCurrentWordIndex(-1);
      }, 2000); 
      return () => clearTimeout(resetTimer);
    }
  }, [currentWordIndex, isTyping, wordsArray.length]);

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className='overflow-hidden pb-2'
        initial={{ width: "0%" }}
        animate={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear" }}
      >
        <div
          className='text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold'
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
