import { ThemeProvider } from "@/components/theme-provider";

import { Link, Outlet, useNavigate } from "react-router-dom";

// import { ModeToggle } from "./components/mode-toggle";
// import Reveal from "./components/animation/reveal";
import { ChevronDown, MenuIcon} from "lucide-react";
import NavLink from "../../components/link/link";
import { useEffect, useState } from "react";
import HeadLogo from "./../../assets/images/logo/BalaodWhite.png";
import { Cookies } from "./Cookies";
import axios from "../../plugin/axios";

function Private() {
  const navigate = useNavigate()
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [navbarTop, setNavbarTop] = useState<string>("0");


  const handleClick = (event:any, targetId:any) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  function GetKudlit() {
  
    axios.get('posting/kudlit').then((e:any)=>{
      console.log(e.data.activities)
      localStorage.setItem('kudlit',JSON.stringify(e.data.activities))
      
      
    })
   
  }
 


  function GetData(){
    try {
      axios.get('posting/').then((e:any)=>{
      console.log(e.data)
      localStorage.setItem('activities',JSON.stringify(e.data.activities))
      localStorage.setItem('partners',JSON.stringify(e.data.partners))
      localStorage.setItem('whatWeDo',JSON.stringify(e.data.whatWeDo))
    })
    } catch (error) {
      console.log("server Down hehe")
    }
    
  }
  useEffect(()=>{
    localStorage.getItem('accessToken')==null?navigate('/balaod/admin/'):""
    
    GetData()
    GetKudlit()
  },[])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setNavbarTop("0");
      } else {
        setNavbarTop("-80px");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
        <nav
          style={{ top: navbarTop }}
          className=" transition-all duration-500 z-50 animate__animated animate__slideInDown   bg-[#4d172e] from-[#4d172e] from-5% via-background  via-40% to-background to-50% b backdrop-blur-md    fixed flex justify-between items-center w-full max-w-full py-0   "
        >
          <Link className=" ml-5 flex items-center" to="/balaod/editable">
            <img
              src={HeadLogo}
              className="  logo h-10 object-contain "
              alt="Vite logo"
            />
          </Link>
          <nav className=" bg-accent h-[60px] text-accent-foreground flex  uppercase items-center justify-center">
            <div className=" flex h-full items-center font-regular justify-center w-full md:hidden">
              <NavLink onClick={() => {
                window.scrollTo(0, 0);
                navigate("/balaod/editable/home")
              
                
              }} text="HOME" />

              <div className="hover:cursor-pointer relative group  font-fbold h-full px-8 flex items-center justify-center hover:bg-foreground text-xs transition-all  duration-75">
                {" "}
                {/* Dropdown Container */}
                <Link to="/balaod/editable/about"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/balaod/editable/about")
                
                  
                }}
                
                className=" flex items-center gap-2  ">
                  ABOUT US{" "}
                  <ChevronDown className=" group-hover:rotate-180 transition-all duration-75 w-4 h-4" />{" "}
                </Link>
                <div className="hidden w-[200px] group-hover:flex flex-col absolute top-full left-0 bg-accent text-accent-foreground">
                  <Link
                    to="/balaod/editable/about"
                    onClick={(e) => {
                      navigate("/balaod/editable/about#who-we-are")
                      window.scrollTo(0, 0);
                      handleClick(e, 'who-we-are')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm border-b-[1px] tracking-wider bg-gray-200 hover:bg-background"
                  >
                    Who We Are
                  </Link>
                  <Link
                    to="/balaod/editable/about"
                    onClick={(e) => {
                    navigate("/balaod/editable/about#what-we-do")
                    handleClick(e, 'what-we-do')
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm bg-gray-200 hover:bg-background"
                  >
                    What We Do
                  </Link>
                </div>
              </div>

              <div className="hover:cursor-pointer relative group  font-fbold h-full px-8 flex items-center justify-center hover:bg-foreground text-xs transition-all  duration-75">
                {" "}
                {/* Dropdown Container */}
                <Link to="/balaod/editable/programs"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/balaod/editable/programs")
                
                  
                }}
                
                className=" flex items-center gap-2 uppercase  ">
                  Our programs{" "}
                  <ChevronDown className=" group-hover:rotate-180 transition-all duration-75 w-4 h-4" />{" "}
                </Link>
                <div className="hidden w-[300px] group-hover:flex flex-col absolute top-full left-0 bg-accent text-accent-foreground">
                  <Link
                     to="/balaod/editable/programs"
                     onClick={(e) => {
                      navigate("/balaod/editable/programs#Human Rights Promotion")
                      handleClick(e, 'Human Rights Promotion')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm border-b-[1px] tracking-wider bg-gray-200 hover:bg-background"
                  >
                    Human Rights Promotion
                  </Link>
                  <Link
                    to="/balaod/editable/programs"
                    onClick={(e) => {
                      navigate("/balaod/editable/programs#Environmental Justice")
                      handleClick(e, 'Environmental Justice')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm bg-gray-200 hover:bg-background"
                  >
                    Environmental Justice

                  </Link>
                  <Link
                     to="/balaod/editable/programs"
                     onClick={(e) => {
                      navigate("/balaod/editable/programs#Women and Children Protection")
                      handleClick(e, 'Women and Children Protection')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm bg-gray-200 hover:bg-background"
                  >
                    Women and Children Protection
                  </Link>
                  <Link
                    to="/balaod/editable/programs"
                    onClick={(e) => {
                      navigate("/balaod/editable/programs#Institutional Development")
                      handleClick(e, 'Institutional Development')
                    
                      
                    }}
                    className=" font-fmedium capitalize px-3 py-4 text-sm bg-gray-200 hover:bg-background"
                  >
                   Institutional Development
                  </Link>
                </div>
              </div>

              <NavLink
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/balaod/editable/kudlit")
                
              }}
              text="Kudlit" />     
              <NavLink 
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/balaod/editable/work-with-us")
              
                
              }}
              text="Work With Us" />

              <span className="  px-10">
                <div
                  className={
                    " search transition-all duration-150 bg-red-600   rounded-md px-3 py-2 hover:cursor-pointer  "
                  }
                  onClick={() => {
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('kudlit')
                    localStorage.removeItem('user')

                    window.scrollTo(0, 0);
                    navigate("/balaod/admin")
                    
                  }}
                >
                  <p className=" text-accent  text-sm ">Log out</p>
                </div>
              </span>
            </div>
            <div className=" hidden md:flex p-3">
              <MenuIcon className="  h-7 w-7" />
            </div>
          </nav>
        </nav>
                  
        <Cookies/>

        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default Private;
