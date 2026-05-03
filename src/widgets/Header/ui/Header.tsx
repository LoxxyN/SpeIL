import { DropdownButton } from './DropdownButton'
import './header.css'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src="/logotype.svg" alt="SpeiL logo" />

        <Navbar />

        <DropdownButton />
      </div>
    </header>
  )
}
