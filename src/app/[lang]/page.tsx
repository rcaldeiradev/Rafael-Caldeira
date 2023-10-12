import Hero from '@/app/[lang]/components/Hero';
import About from '@/app/[lang]/components/About';
import FeaturedProjects from '@/app/[lang]/components/FeaturedProjects';

export const metadata = {
  title: 'Home | Rafael Caldeira',
  description: '',
};

interface HomeParams {
  params: { lang: string };
}

export default async function Home({ params: { lang } }: HomeParams) {
  return (
    <div className="container mx-auto">
      <Hero lang={lang} />
      <About lang={lang} />
      <FeaturedProjects lang={lang} />
    </div>
  );
}
