import { Logo } from '@shared/ui'
import { DropdownButton } from '../Dropdown'
import { Navbar } from '../Navbar'
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Navbar />
        <DropdownButton />
      </div>
    </header>
  )
}
