import SocialLinks from '@/components/layout/footer/SocialLinks';
import Navigation from '@/components/layout/footer/Navigation';

export default function Footer() {
  return (
    <div className="footer flex flex-col justify-center pt-8 pb-24 px-4 box-border mt-auto bg-gray-900">
      <SocialLinks />
      <Navigation />
    </div>
  );
}
