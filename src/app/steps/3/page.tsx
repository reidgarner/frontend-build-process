import { ArrowRightIcon, FireIcon } from '@heroicons/react/24/outline';

export default function Step() {
  return (
    <div className="border border-black relative">
      <div className="absolute top-48 left-1/2 -translate-x-1/2 flex justify-between items-center gap-4">
        <span className="text-5xl">Left</span>
        <ArrowRightIcon className="w-48" />
        <span className="text-5xl">Right</span>
      </div>
      <div className="border border-black p-4 flex justify-between">
        <ul className="border border-black flex items-center gap-8 relative">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">1</span>
          <li className="flex items-center gap-4">
            <div className="border border-black w-14 h-16" />
            hello
          </li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
        <div className="border border-black flex items-center gap-8 relative">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">2</span>
          <ul className="border border-black flex items-center gap-8">
            <li className="border border-black w-10 h-10">
              icon
            </li>
            <li className="border border-black w-10 h-10">
              icon
            </li>
            <li className="border border-black w-10 h-10">
              icon
            </li>
            <li className="border border-black w-10 h-10">
              icon
            </li>
          </ul>
          <div className="border border-black w-32 h-10">
            search
          </div>
        </div>
      </div>
    </div>
  )
}
