import Image from "next/image";
import SectionTitle from "@/components/layout/SectionTitle";
import mePic from "../../../public/me-full.jpg";

export default function About() {
  return <div className="about flex">
    <div className="image-wrapper relative rounded-3xl overflow-hidden shrink-0" style={{
      height: '430px',
      width: '480px',
    }}>
      <Image
        src={mePic}
        alt="Me"
        fill={true}
        className="-z-10"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>

    <div className="texts">
      <SectionTitle titleText="About Me" className="mt-12 -ml-16" />

      <p className="ml-12 max-w-2xl text-xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a vestibulum tellus. Nam pharetra nisi at
        sollicitudin auctor. Nunc auctor vel diam vitae dapibus. Nulla facilisi. Donec purus lectus, vulputate a nisi
        non. Nam pharetra nisi at sollicitudin auctor. Nunc auctor vel diam vitae dapibus. Nulla facilisi.
      </p>
    </div>
  </div>
}
