import Image from 'next/image';
import SectionTitle from '@/components/layout/SectionTitle';
import mePic from '../../../../public/me.jpg';
import ArrowLink from '@/components/ArrowLink';
import { getDictionary } from '@/lib/dictionaries';

interface AboutProps {
  lang: string;
}

export default async function About({ lang }: AboutProps) {
  const dictionary = await getDictionary(lang);

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
            sizes="330px"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      <div className="texts-wrapper sm:ml-12">
        <SectionTitle
          titleText={dictionary.aboutTeaserTitle}
          className="mb-8 sm:mt-12 sm:-ml-28"
        />

        <div className="paragraphs lg:text-xl font-light">
          <p>{dictionary.aboutTeaser}</p>
        </div>

        <ArrowLink
          path={`/${lang}/about`}
          text={dictionary.moreAboutMe}
          className="mt-6"
        />
      </div>
    </div>
  );
}
