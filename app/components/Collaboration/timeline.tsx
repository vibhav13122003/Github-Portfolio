import React, { useEffect, useState } from "react";
import "./timeline.css"; // Custom styling

const Timeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const revealTimelineItems = () => {
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item, index) => {
      const position = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight - 100) {
        setVisibleItems((prev) =>
          prev.includes(index) ? prev : [...prev, index]
        );
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", revealTimelineItems);
    revealTimelineItems();
    return () => {
      window.removeEventListener("scroll", revealTimelineItems);
    };
  }, []);

  const timelineItems = [
    {
      date: "April 2023 - September 2023",
      title: "Web Developer",
      description:
        "Developed Ambuvians 1.0 website from concept to launch  Optimized the website for performance and responsiveness across devices, achieving a responsive website ",
    },
    {
      date: "July 2024 - August 2024",
      title: "Project Lead",
      description:
        " Spearheaded a team of 3 developers to design and build an innovative platform enabling users to convert  handwritten text into digital fonts, improving document digitization efficiency.",
    },
  ];

  return (
    <div className='timeline-container'>
      {timelineItems.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
            visibleItems.includes(index) ? "visible" : ""
          }`}
        >
          <div className='timeline-date'>{item.date}</div>
          <div className='timeline-content'>
         
            <div>
              <h2 className='timeline-title'>{item.title}</h2>
              <p className='timeline-description'>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
