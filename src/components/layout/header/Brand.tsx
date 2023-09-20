import Link from "next/link";
import Image from "next/image";
import mePic from '../../../../public/me.jpg';

export default function Brand() {
  return (
    <Link href="/" className='block self-center font-bold text-xl'>
      Rafael Caldeira
    </Link>
  )
}
