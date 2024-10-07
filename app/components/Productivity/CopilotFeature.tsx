"use client";
import React, { useState } from "react";
import HoverCard from "./HoverCard";
import { motion } from "framer-motion";

type Props = {};

const CopilotFeature = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [showPy, setShowPy] = useState<boolean>(true);
  const [showJs, setShowJs] = useState<boolean>(false);
  const [showGo, setShowGo] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "tween" } },
  };

  return (
    <HoverCard backgroundColor='#7ee787' direction='' left='0'>
      <div className='md:flex flex-col md:space-y-20 flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 justify-between '>
        <p className=' text-xl md:text-2xl mb-6 font-medium text-[#7d8590]'>
          <span className='text-white font-medium'>I am</span> your developer
          that empowers you to complete tasks faster by turning natural language
          prompts into coding the site.
        </p>
        <div>
          <a
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            href='https://github.com/vibhav13122003'
            className=' md:text-xl text-white font-semibold inline-block'
          >
            Meet me
            <div
              className={` ${
                hovered ? "w-11/12 scale-100" : "w-0 scale-0"
              } origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
            ></div>
          </a>
        </div>
      </div>
      <div className='overflow-hidden rounded-s-lg z-[1] flex-1 shadow-3xl'>
        <div className='text-left border-[0.5px] bg-[#161b22] border-[#30363d] rounded-lg text-[#161b22] box-shadow-card-mktg md:mt-10 md:ml-0 sm:ml-10 sm:mr-10 mb-16 ml-3 mr-3 '>
          <div className=''>
            <div className='overflow-x-auto pt-2 px-2 mb-0 border-b-[0.5px] border-[#30363d] '>
              <div className='flex items-center bg-[#161b22] text-[#7d8590] tab-nav'>
                <button
                  onClick={() => {
                    setShowPy(true);
                    setShowGo(false);
                    setShowJs(false);
                  }}
                  type='button'
                  className={`flex items-center  py-2 px-4 ${
                    showPy
                      ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]"
                      : ""
                  }  `}
                >
                  <span>Code.c</span>
                </button>
                <button
                  onClick={() => {
                    setShowPy(false);
                    setShowGo(false);
                    setShowJs(true);
                  }}
                  type='button'
                  className={`flex items-center py-2 px-4 ${
                    showJs
                      ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]"
                      : ""
                  }`}
                >
                  <span>Code.java</span>
                </button>
                <button
                  onClick={() => {
                    setShowPy(false);
                    setShowGo(true);
                    setShowJs(false);
                  }}
                  type='button'
                  className={`flex items-center py-2 px-4 ${
                    showGo
                      ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]"
                      : ""
                  } `}
                >
                  <span>Code.python</span>
                </button>
                <button></button>
              </div>
            </div>
            <div
              className={`p-4 relative bg-[#0d1117] ${showPy ? "" : "hidden"}`}
            >
              <div className='flex'>
                <div className='text-[#6e7681] text-right'>
                  {Array.from({ length: 8 }, (_, index) => (
                    <div className='pr-2' key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div
                  key={count}
                  className='flex-1 overflow-x-auto text-white rounded-b-md '
                >
                  <pre className=''>
                    <span className='code-editor-line-mktg'>
                      <span className='pl-k'>#include </span>{" "}
                      <span className='pl-s1'>&lt;stdio.h&gt;</span>
                    </span>
                  </pre>
                  <pre className=''>
                    <span className='code-editor-line-mktg'></span>
                  </pre>
                  <pre className=''>
                    <motion.span
                      variants={container}
                      initial='hidden'
                      whileInView='show'
                      className='code-editor-line-mktg'
                    >
                      <motion.span
                        variants={item}
                        className='pl-k js-type-letters'
                      >
                        char
                      </motion.span>
                      <motion.span variants={item} className='js-type-letters'>
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='pl-en js-type-letters'
                      >
                        name[]
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='pl-en js-type-letters'
                      >
                        =
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='pl-en js-type-letters'
                      >
                        &ldquo;react&rdquo;;
                      </motion.span>
                    </motion.span>
                  </pre>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, type: "just" }}
                  >
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        {" "}
                        <span className='pl-s1'>printf</span>
                        <span className='pl-en'></span>(
                        <span className='pl-s1'>&#34;I know:</span>{" "}
                        <span className='pl-s1'>%s&#34;</span>,{" "}
                        <span className='pl-c1'>name</span>);
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        {" "}
                        <span className='pl-s1'>printf</span>
                        <span className='pl-en'></span>(
                        <span className='pl-s1'>&#34;I know:</span>{" "}
                        <span className='pl-c1'>Bootstrap</span>);
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        {" "}
                        <span className='pl-s1'>printf</span>
                        <span className='pl-en'></span>(
                        <span className='pl-s1'>&#34;I know</span>{" "}
                        <span className='pl-c1'>Three.js</span>);
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        {" "}
                        <span className='pl-s1'>printf</span>
                        <span className='pl-en'></span>(
                        <span className='pl-s1'>&#34;I know</span>{" "}
                        <span className='pl-c1'>next.js</span>);
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        {" "}
                        <span className='pl-s1'>printf</span>
                        <span className='pl-en'></span>(
                        <span className='pl-s1'>&#34;I also know</span>{" "}
                        <span className='pl-c1'>HTML😜&#34;</span>);
                      </span>
                    </pre>
                    <div className='rounded-tl-none  bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible'>
                      Copilot
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className='absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5'>
                <button
                  onClick={() => setCount(count + 1)}
                  type='button'
                  className='flex items-center text-white justify-between'
                >
                  <svg
                    aria-hidden='true'
                    height='16'
                    viewBox='0 0 16 16'
                    version='1.1'
                    fill='currentColor'
                    width='16'
                    data-view-component='true'
                    className='octicon octicon-sync mr-2'
                  >
                    <path d='M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z'></path>
                  </svg>
                  Replay
                </button>
              </div>
            </div>
            <div
              className={`p-4 relative bg-[#0d1117] ${showJs ? "" : "hidden"}`}
            >
              <div className='flex'>
                <div className='text-[#6e7681] text-right'>
                  {Array.from({ length: 7 }, (_, index) => (
                    <div className='pr-2' key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div
                  key={count}
                  className='flex-1 overflow-x-auto text-white rounded-b-md'
                >
                  <pre className=''>
                    <span className='code-editor-line-mktg d-inline-block'>
                      <span className='pl-k'>class</span>{" "}
                      <span className='pl-s1'>Skills</span>{" "}
                      <span className='pl-c1'>{`{`}</span>{" "}
                    </span>
                  </pre>
                  <pre className=''>
                    <motion.span
                      variants={container}
                      initial='hidden'
                      whileInView='show'
                      className='code-editor-line-mktg d-inline-block'
                    >
                      <motion.span
                        variants={item}
                        className='pl-k js-type-letters'
                      >
                        public
                      </motion.span>
                      <motion.span variants={item} className='js-type-letters'>
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='pl-s1 js-type-letters'
                      >
                        static
                      </motion.span>
                      <motion.span variants={item} className='js-type-letters'>
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='pl-c1 js-type-letters'
                      >
                        void
                      </motion.span>
                      <motion.span variants={item} className='js-type-letters'>
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='pl-s1 js-type-letters'
                      >
                        main
                      </motion.span>
                      <motion.span variants={item} className='js-type-letters'>
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='pl-c1 js-type-letters'
                      >
                        (String args []) {`{`}
                      </motion.span>
                      <motion.span variants={item} className='js-type-letters'>
                        {" "}
                      </motion.span>
                    </motion.span>
                  </pre>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, type: "just" }}
                  >
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        <span className='pl-k'>System.out.println</span>{" "}
                        <span className='pl-s1'>(</span>{" "}
                        <span className='pl-s1'>&#34; I</span>{" "}
                        <span className='pl-s1'>Know</span>{" "}
                        <span className='pl-c1'>Node.js)</span>{" "}
                        <span className='pl-c1'>;</span>
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        <span className='pl-k'>System.out.println</span>{" "}
                        <span className='pl-s1'>(</span>{" "}
                        <span className='pl-s1'>&#34; I</span>{" "}
                        <span className='pl-s1'>Know</span>{" "}
                        <span className='pl-c1'>Express)</span>{" "}
                        <span className='pl-c1'>;</span>
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        <span className='pl-k'>System.out.println</span>{" "}
                        <span className='pl-s1'>(</span>{" "}
                        <span className='pl-s1'>&#34; I</span>{" "}
                        <span className='pl-s1'>Know</span>{" "}
                        <span className='pl-c1'>MongoDb database)</span>{" "}
                        <span className='pl-c1'>;</span>
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        <span className='pl-k'>System.out.println</span>{" "}
                        <span className='pl-s1'>(</span>{" "}
                        <span className='pl-s1'>&#34; I</span>{" "}
                        <span className='pl-s1'>Know</span>{" "}
                        <span className='pl-c1'>socket.io)</span>{" "}
                        <span className='pl-c1'>;</span>
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        <span className='pl-c1'>{`}`}</span>{" "}
                        <span className='pl-c1'>{`}`}</span>
                      </span>
                    </pre>
                    <div className='rounded-tl-none shadow-xl bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible'>
                      Copilot
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className='absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5'>
                <button
                  onClick={() => setCount(count + 1)}
                  type='button'
                  className='flex items-center text-white justify-between'
                >
                  <svg
                    aria-hidden='true'
                    height='16'
                    viewBox='0 0 16 16'
                    version='1.1'
                    fill='currentColor'
                    width='16'
                    data-view-component='true'
                    className='octicon octicon-sync mr-2'
                  ></svg>
                  Replay
                </button>
              </div>
            </div>
            <div
              className={`p-4 relative bg-[#0d1117] ${showGo ? "" : "hidden"}`}
            >
              <div className='flex'>
                <div className='text-[#6e7681] text-right'>
                  {Array.from({ length: 7 }, (_, index) => (
                    <div className='pr-2' key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div
                  key={count}
                  className='flex-1 overflow-x-auto text-white rounded-b-md'
                >
                  <pre className=''>
                    <motion.span
                      variants={container}
                      initial='hidden'
                      whileInView='show'
                      className='code-editor-line-mktg d-inline-block'
                    >
                      <motion.span variants={item} className='js-type-letters'>
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='pl-k js-type-letters'
                      >
                        def
                      </motion.span>
                      <motion.span variants={item} className='js-type-letters'>
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='pl-en js-type-letters'
                      >
                        print_skills
                      </motion.span>
                      <motion.span
                        variants={item}
                        className='js-type-letters'
                      ></motion.span>
                      <motion.span
                        variants={item}
                        className='pl-s1 js-type-letters'
                      >
                        (skills):
                      </motion.span>
                    </motion.span>
                  </pre>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, type: "just" }}
                  >
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        {"     "}
                        <span className='pl-s1'>print</span>{" "}
                        <span className='pl-c1'>(&#34;My skills&#34;)</span>{" "}
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        {"     "}
                        <span className='pl-k'>for</span>{" "}
                        <span className='pl-s1'>skill</span>{" "}
                        <span className='pl-s1'>in</span>{" "}
                        <span className='pl-smi'>skills:</span>{" "}
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        {"         "}
                        <span className='pl-k'>print</span>{" "}
                        <span className='pl-s1'>(skill)</span>{" "}
                      </span>
                    </pre>

                    <pre className=' bg-[#388bfd1a]'>
                      <span>
                        {" "}
                        <span className='pl-k'>skills</span>{" "}
                        <span className='pl-s1'>=</span> [
                        <span className='pl-s1'>&#34;docker,Tailwind&#34;</span>
                        ]
                      </span>
                    </pre>
                    <pre className=' bg-[#388bfd1a]'>
                      <span>print_skills(skills)</span>
                    </pre>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='rounded-tl-none shadow-xl bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible'>
                      Copilot
                    </div>
                  </motion.div>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className='absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5'
                >
                  <button
                    type='button'
                    className='flex items-center text-white justify-between'
                  >
                    <svg
                      aria-hidden='true'
                      height='16'
                      viewBox='0 0 16 16'
                      version='1.1'
                      fill='currentColor'
                      width='16'
                      data-view-component='true'
                      className='octicon octicon-sync mr-2'
                    ></svg>
                    Replay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HoverCard>
  );
};

export default CopilotFeature;
