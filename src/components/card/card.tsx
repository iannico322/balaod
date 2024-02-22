import { Button } from "../ui/button"


function ActivitiesCard() {
  return (
    <div className=" border  border-card flex flex-col relative w-[400px] bg-primary h-[400px] p-5">
        
        <div className="  w-full h-full bg-white">

        </div>
        <div className=" mt-2 flex flex-col gap-4">
            <h1 className=" text-lg font-semibold  text-accent">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h1>
            <Button size="sm" variant="outline">See More</Button>
        </div>

    </div>
  )
}

export default ActivitiesCard