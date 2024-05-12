
import { Link } from 'react-router-dom'

function NavLink({to,text}:any) {
  return (
    <Link className="  font-fbold h-full px-8 flex items-center justify-center hover:bg-foreground text-xs transition-all  duration-75" to={to} >{text}</Link>
  )
}

export default NavLink