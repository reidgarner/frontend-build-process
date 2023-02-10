export default function Step() {
  return (
    <div className="border border-black">
      <div className="border border-black p-4 flex">
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
        <div className="border border-red-500 flex items-center gap-8">
          <ul className=" flex items-center gap-8">
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
