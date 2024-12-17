import React from 'react'

export default function contact() {
  return (
    <>
      <p>팀원:김영욱/박이슬/김용섭</p>
      <p>팀이름:끝내주조</p>
      <p>-끝판왕 사전-</p>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#84e591] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://github.com/younguk03/my-dictionary-site.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          지식보물창고가 나타났습니다. 단순한 백과사전이 아닌 '끝판왕사전'
        </a>
        <img src="/dic.jpg" className="m-img " width={500} height={500} />
      </div>
    </>
  )
}
