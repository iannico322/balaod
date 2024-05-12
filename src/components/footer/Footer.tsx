import { FacebookIcon, Mail, Twitter } from 'lucide-react'
import Logo from './../../assets/images/logo/BalaodWhiteOutFull@3x.png'

const Footer = () => {
  return (
    <footer className=" min-h-0 py-10 pb-5 items-start flex w-full justify-center bg-primary  border border-none border-t-2 border-primary-foreground text-accent">
    <div className=" px-20 w-[80%] flex items-start justify-between">
      <div className=" flex items-start gap-10 font-flight">
        <div className=" flex flex-col items-start gap-2">
        <img src={Logo} className="  h-24 object-contain" alt="" />
        <p className=" text-base text-accent">Copyright © 2024 Balaod Mindanaw.</p>
      </div>

      <div className=" flex flex-col gap-2 text-sm">
        <p className=" cursor-pointer">Home</p>
        <p className=" cursor-pointer">About Us</p>
        <p className=" cursor-pointer">Our Programs</p>
        <p className=" cursor-pointer">Work With Us</p>

      </div>

      <div className=" flex flex-col gap-2 text-sm">
        <a href="#Partners-and-Networks" className=" cursor-pointer">Partners and Networks</a>
        <a href="#Accreditations" className=" cursor-pointer">Accreditations</a>

      </div>
      </div>
      

      <div>
        <h1 className=" font-fbold">CONTACT US</h1>
        <p className=" font-fregular">(+63) 923-1271-122 <br />
balaodmindaw@bakaod.org <br />
Cagayan de Oro City, PH, 9000</p>
<div className=" flex gap-5 py-5 cursor-pointer ">

<FacebookIcon/> <Twitter/> <Mail/>
</div>
      </div>
      

    </div>

  </footer>
  )
}

export default Footer