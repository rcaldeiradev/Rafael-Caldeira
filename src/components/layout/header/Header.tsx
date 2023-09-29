import Navigation from "@/components/layout/header/Navigation";
import Brand from "@/components/layout/header/Brand";

export default function Header() {
  return (
    <header className="px-4 2xl:px-0 py-6 bg-gray-900">
      <div className="container mx-auto flex justify-between relative">
        <Navigation />
        <Brand />
      </div>
    </header>
  )
}
