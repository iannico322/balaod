import { FacebookIcon, LocateFixedIcon, Mail, PhoneCallIcon, Twitter } from 'lucide-react'
import Logo from './../../assets/images/logo/BalaodWhiteOutFull@3x.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" min-h-0 py-10 pb-5 items-start flex sm:flex-col w-full justify-center bg-primary  border border-none border-t-2 border-primary-foreground text-accent">
    <div className=" px-20 sm:px-4 w-[80%] sm:w-full sm:gap-10 flex sm:flex-col items-center justify-between">
      <div className=" flex items-start sm:self-center gap-10 sm:gap-2 font-flight">
        <div className=" flex flex-col sm:items-center items-start gap-2">
        <img src={Logo} className="  h-24 sm:h-16  object-contain" alt="" />
        <p className=" text-sm text-accent sm:text-xs tracking-[.5px]">Copyright © 2024 Balaod Mindanaw.</p>
      </div>

      <div className=" flex flex-col sm:hidden gap-2 sm:gap-1 text-sm sm:text-xs">

        <Link to='/balaod/' className=" cursor-pointer">Home</Link>
        <Link to='/balaod/about'  className=" cursor-pointer">About Us</Link>
        <Link to='/balaod/programs'  className=" cursor-pointer">Our Programs</Link>
        <p className=" cursor-pointer">Kudlit</p>
        <Link to='/balaod/work-with-us'  className=" cursor-pointer">Work With Us</Link>

      </div>

     
      </div>
      

      <div className=' flex flex-col sm:flex-row sm:justify-between sm:text-sm sm:w-full '>
        <div >
          <h1 className=" font-fbold mb-3">CONTACT US</h1>
        <p className=" font-fregular flex items-center gap-2"> <PhoneCallIcon className=' h-4 w-4'/> (082) 880 3216 </p>
        <p className=" font-fregular flex items-center gap-2"> <Mail className=' h-4 w-4'/> info@balaod.org <br /> </p>
        <p className=" font-fregular flex items-start pl-6">balaodmindaw@bakaod.org</p> 
        <p className=" font-fregular flex items-center gap-2"> <LocateFixedIcon className=' h-4 w-4'/> Cagayan de Oro City, PH, 9000</p>

        </div>
        

<div className=" flex sm:flex-col gap-5 py-5 sm:py-0 cursor-pointer  ">

<FacebookIcon className=' sm:h-5 sm:w-5'/> <Twitter className=' sm:h-5 sm:w-5'/> <Mail className=' sm:h-5 sm:w-5'/>
</div>
      </div>
      

    </div>

  </footer>
  )
}

export default Footer