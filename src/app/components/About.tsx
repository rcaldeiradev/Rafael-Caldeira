import Image from "next/image";
import SectionTitle from "@/components/layout/SectionTitle";
import mePic from "../../../public/me.jpg";
import ArrowLink from "@/components/ArrowLink";

export default function About() {
  return (
    <div className="about flex flex-col md:flex-row mb-24">
      <div
        className="image-wrapper relative rounded-full overflow-hidden shrink-0"
        style={{
          height: '330px',
          width: '330px',
        }}>
        <Image
          src={mePic}
          alt="Me"
          fill={true}
          className="-z-10"
          priority={true}
          unoptimized={true}
          placeholder="blur"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div className="texts-wrapper ml-12">
        <SectionTitle titleText="About Me" className="mt-12 -ml-28" />

        <div className="paragraphs text-xl font-light">
          <p>
            Hi there! I'm a Software Engineer with 7+ years experience, crafting top-notch web solutions for notable organizations
            like MIT and Doctors Without Borders. I excel in PHP, JavaScript, TypeScript, API integration, containers,
            automated tests, databases, server admin, SEO, CI...
          </p>
        </div>

        <ArrowLink path={'/about'} text={'Read more'} className="mt-6" />
      </div>
    </div>
  )
}
