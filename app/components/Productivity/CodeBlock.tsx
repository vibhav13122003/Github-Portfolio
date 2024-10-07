import React from "react";

type Props = {};

const CodeBlock = (props: Props) => {
  return (
    <div className='flex-1 overflow-x-auto text-[16px]'>
      <pre className='text-white whitespace-pre'>
        <span>
          &lt;<span className='pl-ent'>div</span>{" "}
          <span className='pl-e'>className</span>=
          <span className='pl-s'>
            <span className='pl-pds'>&quot;</span>position-absolute width-full
            color-bg-default<span className='pl-pds'>&quot;</span>
          </span>{" "}
          <span className='pl-e'>style</span>=
          <span className='pl-s'>
            <span className='pl-pds'>&quot;</span>
            <span className='pl-s1'>
              <span className='pl-c1'>
                <span className='pl-c1'>top</span>
              </span>
              :{" "}
              <span className='pl-c1'>
                2<span className='pl-k'>rem</span>
              </span>
              ;
            </span>
            <span className='pl-pds'>&quot;</span>
          </span>
          &gt;
        </span>
      </pre>
      <pre className='text-white whitespace-pre ml-4'>
        <span>
          {" "}
          &lt;<span className='pl-ent'>div</span>{" "}
          <span className='pl-e'>className</span>=
          <span className='pl-s'>
            <span className='pl-pds'>&quot;</span>container hero
            <span className='pl-pds'>&quot;</span>
          </span>
          &gt;
        </span>
      </pre>
      <pre className='text-white whitespace-pre ml-8'>
        <span>
          {" "}
          &lt;<span className='pl-ent'>div</span>{" "}
          <span className='pl-e'>className</span>=
          <span className='pl-s'>
            <span className='pl-pds'>&quot;</span>flex flex-justify-center
            flex-lg-justify-end color-bg-default
            <span className='pl-pds'>&quot;</span>
          </span>
          &gt;
        </span>
      </pre>
      <pre className='text-white whitespace-pre ml-12'>
        <span>
          {" "}
          &lt;<span className='pl-ent'>div</span>{" "}
          <span className='pl-e'>className</span>=
          <span className='pl-s'>
            <span className='pl-pds'>&quot;</span>col-6 col-sm-6 col-md-5
            col-lg-4 position-relative z-2 right-lg-n12 events-none
            <span className='pl-pds'>&quot;</span>
          </span>
          &gt;
        </span>
      </pre>
      <pre className='text-white whitespace-pre ml-16'>
        <span>
          {" "}
          &lt;<span className='pl-ent'>picture</span>&gt;
        </span>
      </pre>
      <pre className='text-white whitespace-pre ml-20'>
        <span>
          {" "}
          &lt;<span className='pl-ent'>source</span>{" "}
          <span className='pl-e'>srcset</span>=
          <span className='pl-s'>
            <span className='pl-pds'>&quot;</span>vibhav.webp
            <span className='pl-pds'>&quot;</span>
          </span>{" "}
          <span className='pl-e'>type</span>=
          <span className='pl-s'>
            <span className='pl-pds'>&quot;</span>image/webp
            <span className='pl-pds'>&quot;</span>
          </span>
          &gt;
        </span>
      </pre>
      <pre className='text-white whitespace-pre ml-24'>
        <span>
          {" "}
          &lt;/<span className='pl-ent'>picture</span>&gt;
        </span>
      </pre>
      <pre className='text-white whitespace-pre ml-12'>
        <span>
          {" "}
          &lt;/<span className='pl-ent'>div</span>&gt;
        </span>
      </pre>
      <pre className='text-white whitespace-pre ml-8'>
        <span>
          {" "}
          &lt;/<span className='pl-ent'>div</span>&gt;
        </span>
      </pre>
      <pre className='text-white whitespace-pre ml-4'>
        <span>
          {" "}
          &lt;/<span className='pl-ent'>div</span>&gt;
        </span>
      </pre>
    </div>
  );
};

export default CodeBlock;
