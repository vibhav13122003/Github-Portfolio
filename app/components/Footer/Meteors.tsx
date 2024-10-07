import React from "react";
import "./styles.css"; // Import the CSS file

interface MeteorsProps {
  number?: number;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 20 }) => {
  const meteors = new Array(number).fill(true);

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className='meteor'
          style={{
            left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
          }}
        ></span>
      ))}
    </>
  );
};
