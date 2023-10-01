import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import FeaturedProjects from '@/app/components/FeaturedProjects';

export const metadata = {
  title: 'Home | Rafael Caldeira',
  description:
    'Desenvolvedor web há 8 anos, compartilho coisas legais sobre tecnologia.',
};

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  );
}
