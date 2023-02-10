export default function Step() {
  return (
    <div className="border border-black">
      <div className="border border-black p-4 flex justify-between">
        <ul className="border border-black flex items-center gap-8">
          <li className="flex items-center gap-4">
            <div className="border border-black w-14 h-16" />
            hello
          </li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
        <div className="border border-black flex items-center gap-8">
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
      <div className="border border-black flex justify-center items-center py-28">
        <div className="border border-black w-1/3 h-96">
          <div className="border border-black w-full h-2/3 flex">
            <div className="border border-black w-1/4 h-full" />
            <div className="w-3/4">
              <div className="border border-black w-full h-1/2" />
              <div className="border border-black w-full h-1/2" />
            </div>
          </div>
          <div className="border border-black w-full h-1/3">
            <div className="border border-black w-1/4 h-1/3" />
            <div className="border border-red-500 w-1/4 h-1/3" />
          </div>
        </div>
      </div>
    </div>
  )
}
