import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react"; 


export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(window.innerWidth < 550);
  console.log("soy visible menu",visibleMenu)

  useEffect(() => {
    const handleResize = () => {
      setVisibleMenu(window.innerWidth < 550);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className="flex fixed flex-row bg-black text-white items-center justify-between h-auto w-screen mx-auto z-10 opacity-80">
  
        <div className=" flex items-center justify-center flex-1 gap-x-3">

          <button href=""className ="px-3 py-3 mt-3 transition duration-500 ease-in-out hover:text-gray-600 md:px-10 ">Home</button>
          <button href="" className="px-3 py-3 mt-3 transition duration-500 ease-in-out hover:text-gray-600 md:px-10 ">About</button>
          <button href="" className="px-3 py-3 mt-3 transition duration-500 ease-in-out hover:text-gray-600 md:px-10 ">Skills</button>
          <button href="" className="px-3 py-3 mt-3 transition duration-500 ease-in-out hover:text-gray-600 md:px-10 ">Contact</button>

        </div>


        <div className="flex items-center mr-20">

         {/* ///////////////////////MENU/////////////////////////// */}
          {visibleMenu && (
            <div className=" flex flex-1 flex-nowrap ml-5 mt-3"> 
            <FontAwesomeIcon className="hover:text-gray-600 cursor-pointer" icon={faBars} onClick={handleMenu} size="xl"/>
            </div>
          )}
          {openMenu && (
          <div className=" flex flex-col bg-black justify-center items-center w-screen h-screen fixed top-0 right-0 z-10">
            <button className="absolute top-0 right-0 p-4 mr-11 text-xl" onClick={handleMenu}>X</button>
         <a
            href="https://github.com/Regameroh87"
            target="_blank"
            rel="noopener noreferrer"
            className=" my-8 mx-auto pl-4 transition duration-500 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon className=" pr-3 transition duration-500 ease-in-out hover:text-gray-600" icon={faGithub} size="lg"/>
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-gamero-16b943268/"
            target="_blank"
            rel="noopener noreferrer"
            className=" my-8 mx-auto pl-4 transition duration-500 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon className=" pr-3" icon={faLinkedin} size="lg"/>
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/gamero_rodrigo/"
            target="_blank"
            rel="noopener noreferrer"
            className=" my-8 mx-auto pl-4 transition duration-500 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon className=" pr-3" icon={faInstagram} size="lg"/>
            Instagram
          </a>
          <a
            href="https://wa.me/542262573568?text=Hola%20desde%20mi%20sitio%20web"
            target="_blank"
            rel="noopener noreferrer"
            className=" my-8 mx-auto pl-4 transition duration-500 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon className=" pr-3" icon={faWhatsapp} size="lg"/>
            Whatsapp
          </a>
          </div>
          )}

          {/* ////////////////////ICONOS BARRA NAV ///////////////////////////// */}
          { !visibleMenu && (
          <div className=" flex flex-1 flex-nowrap mt-3">
          <a
            href="https://github.com/Regameroh87"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-4 transition duration-500 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-gamero-16b943268/"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-4 transition duration-500 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a
            href="https://www.instagram.com/gamero_rodrigo/"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-4 transition duration-500 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a
            href="https://wa.me/542262573568?text=Hola%20desde%20mi%20sitio%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-4 transition duration-500 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
          </a>
          </div>
          )}
        </div>

    </div>
  );
}
