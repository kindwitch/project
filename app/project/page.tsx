import React from 'react'

export default function Project() {
  return (
    <div>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#84e591] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://github.com/kindwitch/introduce.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          지난 중간고사때 작업한 내용입니다.
        </a>
        <img src="/mid.jpg" className="m-img " width={500} height={500} />
      </div>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#0a5788] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://github.com/kindwitch/meet-me.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          제가 혼자 작업한 내용입니다.
        </a>
        <img src="/a.jpg" className="m-img " width={500} height={500} />
      </div>
      <div>
        <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#e986eb] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://github.com/kindwitch/mongoo-crud.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          지난 수업시간 작업한 내용입니다.
        </a>
        <img src="/class.jpg" className="m-img " width={500} height={500} />
      </div>
      <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#dfeb83] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://github.com/kindwitch/hcjdemo.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        수업 시간에 한 hcjdemo입니다.
      </a>
      <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#82d2e8] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://github.com/kindwitch/test1.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        수업 시간에 한 next.js입니다.
      </a>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f0d3eb] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://github.com/kindwitch/clerk-api.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        수업 시간에 한 clerk-api입니다.
      </a>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#2f923c] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://github.com/kindwitch/daiso-shopping.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        수업 시간에 한 daiso-shopping입니다.
      </a>
    </div>
  )
}
