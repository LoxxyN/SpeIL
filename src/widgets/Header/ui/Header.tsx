import { Logo } from '@shared/ui'
import { DropdownButton } from './DropdownButton'
import './header.css'
import { Navbar } from './Navbar'

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
