import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className='inline-block self-center font-bold text-3xl'>
      <div className="flex flex-col">
        <span className="font-extrabold text-6xl mb-3">Rafael Caldeira</span>
        <span className="font-semibold text-3xl text-gray-500">Software Engineer</span>
      </div>
    </Link>
  )
}
