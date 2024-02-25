
import { Link } from 'react-router-dom'

function NavLink({to,text}:any) {
  return (
    <Link className="  h-full px-8 flex items-center justify-center hover:bg-foreground text-xs transition-all font-bold duration-75" to={to} >{text}</Link>
  )
}

export default NavLink