import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import FeaturedProjects from '@/app/components/FeaturedProjects';

export const metadata = {
  title: 'Home | Rafael Caldeira',
  description: '',
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
