import Image from 'next/image'
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            박이슬 Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              정보보호학과입니다!
            </code>
            .
          </li>
          <li>Hello, my name is Yiseul Park!</li>
          <li>2024년에 3학년을 마치게되어 기쁩니다!</li>
          <li>앞으로도 발전될 모습을 지켜봐주십시오!</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#db956a] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.youtube.com/watch?v=PBWuX-b38XU"
            target="_blank"
            rel="noopener noreferrer"
          >
            새로운 출발!!을 위한 노래
          </a>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#8382a7] dark:hover:bg-[#191818] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.youtube.com/shorts/IniEdOHryYc"
            target="_blank"
            rel="noopener noreferrer"
          >
            청개구리 유투브
          </a>
        </div>
        <Image src="/con1.jpg" width={300} height={300} alt="test" />
      </main>
    </div>
  )
}
