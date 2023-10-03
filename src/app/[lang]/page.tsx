import Hero from '@/app/[lang]/_components/Hero';
import About from '@/app/[lang]/_components/About';
import FeaturedProjects from '@/app/[lang]/_components/FeaturedProjects';
import { getDictionary } from '@/lib/dictionaries';

export const metadata = {
  title: 'Home | Rafael Caldeira',
  description: '',
};

interface HomeParams {
  params: { lang: string };
}

export default async function Home({ params: { lang } }: HomeParams) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="container mx-auto">
      <Hero dictionary={dictionary} />
      <About dictionary={dictionary} />
      <FeaturedProjects dictionary={dictionary} />
    </div>
  );
}
