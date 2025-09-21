import { Top } from './Top/Top'
import { Navigation } from './Navogation/Navigation'

export const Header = () => {
  return (
    <header className="header">
      <Top/>
      <Navigation/>
    </header>
  )
}