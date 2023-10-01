import PageTitle from '@/components/layout/PageTitle';
import ArrowLink from '@/components/ArrowLink';

export default function NotFound() {
  return (
    <div className="container mx-auto">
      <PageTitle titleText="Page not found" />
      <ArrowLink path="/" text="Return home" />
    </div>
  );
}
