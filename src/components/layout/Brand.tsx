

import Link from "next/link";
import Image from "next/image";
import mePic from '../../../public/me.jpg';

export default function Brand() {
  return (
    <Link href="/" className='mb-4 block text-center font-bold text-2xl'>
      <div className="image-wrapper rounded-full overflow-hidden w-20 h-20 relative mb-4 mx-auto">
        <Image
          src={mePic}
          alt="Rafael smiling at the camera, wearing a blue t-shirt and round glasses. Vivid green tree in the background."
          className="h-full max-w-none"
          sizes="160px"
          fill={true}
          placeholder={"blur"}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      Rafael Caldeira
    </Link>
  )
}
