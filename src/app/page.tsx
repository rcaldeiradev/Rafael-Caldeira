import SectionTitle from "@/components/layout/SectionTitle";

export const metadata = {
  title: 'Home | Rafael Caldeira',
  description: 'Desenvolvedor web há 8 anos, compartilho coisas legais sobre tecnologia.',
}

export default function Home() {
  return (
    <div className={'text-center'}>
      <SectionTitle titleText="Home" />

      <div>
        Como diria Mussum: <span className={'bg-amber-200 p-1'}>Voltis em brevis.</span>
      </div>
    </div>
  );
};
