import { ThemeProvider } from "@/components/theme-provider";



import { Link, Outlet } from "react-router-dom";

// import { ModeToggle } from "./components/mode-toggle";
// import Reveal from "./components/animation/reveal";
import { MenuIcon, SearchIcon } from "lucide-react";
import NavLink from "./components/link/link";
import { useEffect, useState } from "react";





function App() {

  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [navbarTop, setNavbarTop] = useState<string>('0');

  const [searchBar, setsearchBar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setNavbarTop('0');
      } else {
        setNavbarTop('-80px');
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  


 
  
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
        <nav style={{ top: navbarTop }} className=" transition-all duration-500 z-50 animate__animated animate__slideInDown   bg-[#4d172e] from-[#4d172e] from-5% via-background  via-40% to-background to-50% b backdrop-blur-md    fixed flex justify-between items-center w-full max-w-[1468px] py-0   ">
          <Link className=" ml-5 flex items-center" to="/balaod">
            <img
              src="./logo-text.png"
              className="  logo h-9 object-contain "
              alt="Vite logo"
            />
          </Link>
          <nav className=" bg-accent h-[60px] text-accent-foreground flex  uppercase items-center justify-center">
      
            <div className=" flex h-full items-center justify-center w-full md:hidden">
              <NavLink to="/balaod/page1" text="HOME" />

              <NavLink to="/balaod/page2" text="ABOUT US" />

              <NavLink to="/balaod/page4" text="Codlit" />

              <NavLink to="/balaod/contact" text="Contact Us" />

              <span className="  px-10">
                <div  className={ " search transition-all duration-150 bg-primary-foreground p-3 rounded-full hover:cursor-pointer px-5 " }>
                  <SearchIcon className=" text-accent w-5 h-5 " />
                </div>
              </span>
            </div>
            <div className=" hidden md:flex p-3">
              <MenuIcon className="  h-7 w-7" />
            </div>
          </nav>
        </nav>

        

        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
