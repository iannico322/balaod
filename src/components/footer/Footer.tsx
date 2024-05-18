import { FacebookIcon, Mail, Twitter } from 'lucide-react'
import Logo from './../../assets/images/logo/BalaodWhiteOutFull@3x.png'

const Footer = () => {
  return (
    <footer className=" min-h-0 py-10 pb-5 items-start flex sm:flex-col w-full justify-center bg-primary  border border-none border-t-2 border-primary-foreground text-accent">
    <div className=" px-20 sm:px-4 w-[80%] sm:w-full sm:gap-10 flex sm:flex-col items-start justify-between">
      <div className=" flex items-start sm:self-center gap-10 sm:gap-2 font-flight">
        <div className=" flex flex-col sm:items-center items-start gap-2">
        <img src={Logo} className="  h-24 sm:h-16  object-contain" alt="" />
        <p className=" text-base text-accent sm:text-xs">Copyright © 2024 Balaod Mindanaw.</p>
      </div>

      <div className=" flex flex-col sm:hidden gap-2 sm:gap-1 text-sm sm:text-xs">
        <p className=" cursor-pointer">Home</p>
        <p className=" cursor-pointer">About Us</p>
        <p className=" cursor-pointer">Our Programs</p>
        <p className=" cursor-pointer">Work With Us</p>

      </div>

     
      </div>
      

      <div className=' sm:text-sm sm:w-full '>
        <h1 className=" font-fbold">CONTACT US</h1>
        <p className=" font-fregular">(+63) 923-1271-122 <br />
        info@balaod.org <br />
balaodmindaw@bakaod.org  <br />
Cagayan de Oro City, PH, 9000</p>
<div className=" flex gap-5 py-5 cursor-pointer sm:w-full ">

<FacebookIcon/> <Twitter/> <Mail/>
</div>
      </div>
      

    </div>

  </footer>
  )
}

export default Footer