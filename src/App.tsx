import { ThemeProvider } from "@/components/theme-provider"

import viteLogo from "/vite.svg";

import { Link, Outlet } from "react-router-dom";

// import { ModeToggle } from "./components/mode-toggle";
// import Reveal from "./components/animation/reveal";
import { MenuIcon, SearchIcon } from "lucide-react";
import NavLink from "./components/link/link";

function App() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
     <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
      
      <nav className=" animate__animated animate__slideInDown  z-20 bg-background fixed flex justify-between items-center w-full max-w-[1468px] py-0 border-b-[0px] border-accent \ ">
        <Link className=" ml-5" to="/balaod" >
          <img src={viteLogo} className="logo " alt="Vite logo" />
        </Link>
        <nav className=" h-[60px] text-accent-foreground flex  uppercase items-center justify-center">
        <div className=" flex h-full items-center justify-center w-full md:hidden">
        <NavLink
        to="/balaod/page1"
        text="HOME"
        />

        <NavLink
        to="/balaod/page2"
        text="ABOUT US"
        />

        <NavLink
        to="/balaod/page4"
        text="Codlit"
        />

        <NavLink
        to="/balaod/contact"
        text="Contact Us"
        />

        <span className="  px-10">
          <div className=" bg-primary p-3 rounded-full hover:cursor-pointer px-5 ">
          <SearchIcon className=" text-accent w-5 h-5 "/>
          </div>
        </span>
        </div>
        <div className=" hidden md:flex p-3">
          <MenuIcon className="  h-7 w-7"/>
        </div>
         
        
        </nav>
       
      </nav>
 

      

      <Outlet />
     
    </div>
    </ThemeProvider>
  )
}



export default App
