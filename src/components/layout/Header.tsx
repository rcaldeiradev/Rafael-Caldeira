import Brand from "@/components/layout/Brand";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
  return (
    <header className='flex flex-col mb-8 px-4 box-border'>
      <Brand />
      <Navigation />
    </header>
  )
}
