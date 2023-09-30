import Image from "next/image";
import SectionTitle from "@/components/layout/SectionTitle";
import mePic from "../../../public/me.jpg";
import ArrowLink from "@/components/ArrowLink";

export default function About() {
  return (
    <div className="about flex flex-col sm:flex-row mb-10 lg:mb-20">
      <div className="max-w-[330px] max-h-[330px] w-full mb-8 shrink-0">
        <div
          className={`relative rounded-full overflow-hidden w-full pt-[100%]`}
        >
          <Image
            src={mePic}
            alt="Me"
            fill={true}
            className="sm:-z-10"
            priority={true}
            placeholder="blur"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>


      <div className="texts-wrapper sm:ml-12">
        <SectionTitle titleText="About Me" className="mb-8 sm:mt-12 sm:-ml-28" />

        <div className="paragraphs lg:text-xl font-light">
          <p>
            Hi there! I am a Software Engineer with 7+ years experience, crafting top-notch web solutions for notable organizations
            like MIT and Doctors Without Borders. I excel in PHP, JavaScript, TypeScript, API integration, containers,
            automated tests, databases, server admin, SEO, CI...
          </p>
        </div>

        <ArrowLink path={'/about'} text={'More about me'} className="mt-6" />
      </div>
    </div>
  )
}
