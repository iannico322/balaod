import { Button } from "../ui/button"


function CudlitCard ({className}:any) {
  return (
    <div className={"  border rounded-lg justify-center  border-card flex flex-col items-center relative  bg-primary h-[400px] overflow-hidden "+ className}>

      <div className="  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900185] from-[5%] via-[#5d193ede] via-[75%] to-[#5d193ede] to-[10%] ">

      </div>
        
        <img className="   w-full h-full bg-white object-cover rounded-md  "  src="./assets/images/Images-1984662529-1468x710.jpg"/>
        <div className=" w-full z-20 absolute bottom-0 px-5 mb-5  mt-2 flex flex-col gap-2">
            <h1 className=" text-accent text-4xl font-semibold ">News</h1>
            <h1 className="  text-lg font-bold text-primary leading-10 shadow-black w-full">
              <span className=" bg-background py-2 ">
                Authorities must protect and assist civilians as fighting intensifies
              </span>
              </h1>
            
        </div>

    </div>
  )
}

export default CudlitCard