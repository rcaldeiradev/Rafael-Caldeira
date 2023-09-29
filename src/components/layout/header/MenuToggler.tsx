interface MenuTogglerProps {
  toggleMenu: () => void,
  isMenuOpen: boolean,
}

export default function MenuToggler(
  { toggleMenu, isMenuOpen }: MenuTogglerProps
) {
  return (
    <button
      className="mobile-navigation text-white text-4xl lg:hidden"
      onClick={toggleMenu}
    >
      {isMenuOpen ? <span className="ml-1">×</span> : <span className="-mt-1 block">☰</span>}
    </button>
  )
}
