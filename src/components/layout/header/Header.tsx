import Brand from "@/components/layout/header/Brand";
import Navigation from "@/components/layout/header/Navigation";

export default function Header() {
  return (
    <header className="flex justify-center py-7 px-4 box-border bg-gray-100">
      <div className="container flex flex-row justify-between ">
        <Brand />
        <Navigation />
      </div>
    </header>
  )
}
