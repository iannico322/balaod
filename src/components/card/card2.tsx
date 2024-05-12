

function CudlitCard ({className}:any) {
  return (
    <div className={"  border rounded-sm justify-center  border-card flex flex-col items-center relative  bg-primary h-[400px] overflow-hidden "+ className}>

      <div className="  z-10 absolute h-full w-full  bg-gradient-to-b from-[#fd900155] from-5% via-[#5d193e00] via-92% to-[#5d193ef4] to-2% ">
      <img
              src="./logo-text.png"
              className="  logo h-9 m-5 absolute right-0 object-contain "
              alt="Vite logo"
            />
      </div>
        
        <img className="   w-full h-full bg-white object-cover rounded-md  "  src="./assets/images/437948649_790904033236884_3244484806366821827_n.jpg"/>
        <div className=" w-full z-20 absolute bottom-0 px-5 mb-5  mt-2 flex flex-col gap-2">
            <h1 className=" text-accent text-4xl font-semibold ">News</h1>
            <h1 className="  text-lg font-bold text-primary leading-10 shadow-black w-full">
              <span className=" bg-background px-2 py-2  ">
              Paglalakad ng mga kinatawan at opisyal ng Legal Rights and Natural Resources Center (LRC)
              </span>
              </h1>
            
        </div>

    </div>
  )
}

export default CudlitCard