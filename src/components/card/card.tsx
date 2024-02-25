import { Button } from "../ui/button"


function ActivitiesCard({className}:any) {
  return (
    <div className={" rounded-sm  border  justify-center  border-card flex flex-col items-center relative  bg-primary h-[400px] overflow-hidden "+ className}>

      <div className="  z-10 absolute h-full w-full bg-gradient-to-t from-[#fd9001e3] from-[5%] via-[#5d193e82] via-[75%] to-[#5d193e82] to-[10%] ">

      </div>
        
        <img className="  w-full h-full bg-white object-cover rounded-md  "  src="./assets/images/294021-640x400.jpg"/>
        
        <div className=" z-20 absolute bottom-0 px-5 mb-5  mt-2 flex flex-col gap-4">
            <h1 className=" text-lg font-semibold  text-accent">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h1>
            <Button size="sm" variant="outline" className=" bg-none">See More</Button>
        </div>

    </div>
  )
}

export default ActivitiesCard