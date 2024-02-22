
import { Link } from 'react-router-dom'

function NavLink({to,text}:any) {
  return (
    <Link className=" h-full px-10 flex items-center justify-center hover:bg-accent-foreground/20 font-semibold text-sm transition-all duration-75" to={to} >{text}</Link>
  )
}

export default NavLink