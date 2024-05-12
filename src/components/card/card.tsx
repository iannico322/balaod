// import { Button } from "../ui/button"

import Reveal from '../animation/reveal'
import Logo from './../../assets/images/logo/BalaodWhiteOutFull@3x.png'

function ActivitiesCard({className}:any) {
  return (
    <Reveal>
    <div className={"  cursor-pointer rounded-sm  border  justify-center  border-card flex flex-col items-center relative  bg-primary h-[450px] overflow-hidden "+ className}>

      <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd90019d] from-5% via-[#5d193e00] via-92% to-[#5d193ee5] to-2% ">
      <img
              src={Logo}
              className=" m-5  logo h-7 right-0 absolute object-contain "
              alt="Vite logo"
            />
      </div>
        
        <img className="  w-full h-full bg-white object-cover rounded-md  "  src="./assets/images/294021-640x400.jpg"/>
        
        <div className=" z-20 absolute bottom-0    mt-2 flex flex-col gap-4">
            <h1 className=" text-lg px-5  text-accent font-fsemi-bold">Lorem ipsum dolor, sit amet sectetur adipisicing Lorem ipsum  </h1> 
            <div className=" z-40 flex bottom-0 w-full h-10 items-center justify-end text-accent bg-[#531837ca] text-xs ">

              <h1 className=" px-5 font-fregular">by: Aurora Parong</h1>

            </div>
        </div>

    </div>
    </Reveal>
  )
}

export default ActivitiesCard