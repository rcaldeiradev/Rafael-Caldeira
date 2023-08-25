import SectionTitle from "@/components/layout/SectionTitle";

export const metadata = {
  title: 'Blog | Rafael Caldeira',
  description: 'Aqui compartilho coisas legais do mundo da tecnologia. :)',
}

export default async function BlogPage() {
  return (
    <div className={'text-center'}>
      <SectionTitle titleText="Blog" />

      <div>
        Em brevis.
      </div>
    </div>
  );
}
