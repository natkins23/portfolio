import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center pb-5 lg:pt-10 w-full">
      <div className="w-[90%] md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[50%] ">
        <h2 className="sectionHeader pb-10">My Start</h2>
        <div className="flex flex-col md:flex-row gap-5 md:gap-16 w-full  ">
          <div className="relative m-auto md:m-0  w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src={'/Sisyphus_as_Coder.png'}
              alt="sysiphus as a coder"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="w-full md:w-[60%] ">
            <p className="text-xl md:text-2xl leading-loose ">
              After graduating from UCSB and exploring various roles, I rediscovered my passion for
              technology and design. During COVID, I pursued an AA in Computer Science but found the
              college&apos;s online transition abysmal. To avoid mandatory attendance, I developed a{' '}
              <Link
                href="https://github.com/natkins23/Ez-Meet-"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline">
                Chrome extension
              </Link>{' '}
              to attend classes for me. This served as my first real challenge, and motivated me to
              pursue technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
