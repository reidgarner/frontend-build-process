import Image from "next/image";
import smallShield from 'assets/logo-sm.png';
import extraSmallShield from 'assets/logo-xs.png';

export default function Step() {
  return (
    <div className="border border-white bg-[#0B0B0B] text-white">
      <div className="border border-white p-4 flex justify-between ">
        <ul className="border border-white flex items-center gap-8">
          <li className="flex items-center gap-4">
            <div className="border border-white w-14 h-16" />
            hello
          </li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
        <div className="border border-white flex items-center gap-8">
          <ul className="border border-white flex items-center gap-8">
            <li className="border border-white w-10 h-10">
              icon
            </li>
            <li className="border border-white w-10 h-10">
              icon
            </li>
            <li className="border border-white w-10 h-10">
              icon
            </li>
            <li className="border border-white w-10 h-10">
              icon
            </li>
          </ul>
          <div className="border border-white w-32 h-10">
            search
          </div>
        </div>
      </div>
      <div className="border border-white flex justify-center items-center py-28">
        <div className="border border-white w-1/3 h-96">
          <div className="border border-white w-full h-2/3 flex">
            <div className="border border-white w-1/4 h-full flex items-center">
              <Image
                src={smallShield}
                alt="NextAuth.js Logo"
                className="w-full"
              />
            </div>
            <div className="w-3/4">
              <div className="border border-white w-full h-1/2 flex justify-center items-center text-8xl font-bold">
                NextAuth.js
              </div>
              <div className="border border-white w-full h-1/2 flex justify-center items-center text-4xl font-light">
                Authentication for Next.js
              </div>
            </div>
          </div>
          <div className="border border-white w-full h-1/3 flex justify-center items-center gap-4">
            <div className="border border-white w-1/4 h-1/3 rounded-full bg-[#111111] shadow" />
            <div className="border border-white w-1/4 h-1/3 rounded-full bg-[#21BEFD] shadow" />
          </div>
        </div>
      </div>
      <div className="border border-white flex justify-center items-center py-28 bg-black">
        <div className="border border-white w-7/12 flex flex-col">
          <div className="border border-white w-full h-24 mb-36 flex justify-center items-center text-5xl font-bold">
            Wordy words.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wordy words.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wordy words.
          </div>
          <div className="border border-white flex justify-between text-center">
            <div className="border border-white flex flex-col gap-12">
              <div className="border border-white w-72 h-72 rounded-full bg-[#7B54C1]" />
              <span className="text-4xl font-bold">Word</span>
              <div>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
              </div>
            </div>
            <div className="border border-white flex flex-col gap-12">
              <div className="border border-white w-72 h-72 rounded-full bg-[#D48385]" />
              <span className="text-4xl font-bold">Word</span>
              <div>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
              </div>
            </div>
            <div className="border border-white flex flex-col gap-12">
              <div className="border border-white w-72 h-72 rounded-full bg-[#70B3C4]" />
              <span className="text-4xl font-bold">Word</span>
              <div>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
                <p className="text-lg">Words, Words, Words, Words</p>
              </div>
            </div>
          </div>
          <div className="border border-white w-full h-24 mt-16 flex items-center justify-center">
            <div className="border border-white w-1/4 h-3/4 rounded-full bg-[#21BEFD]" />
          </div>
        </div>
      </div>
    </div>
  )
}
