import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <div className="flex flex-row bg-black text-white h-1/5 w-screen">
      <nav className="flex flex-row items-center justify-between h-full w-full mx-auto">
        <div className="flex items-center justify-center flex-1 gap-x-3">
          <a href=""className="p-4 mt-3 transition duration-500 ease-in-out hover:text-gray-600">Home</a>
          <a href="" className="p-4 mt-3 transition duration-500 ease-in-out hover:text-gray-600">About</a>
          <a href="" className="p-4 mt-3 transition duration-500 ease-in-out hover:text-gray-600">Skills</a>
          <a href="" className="p-4 mt-3 transition duration-500 ease-in-out hover:text-gray-600">Contact</a>
        </div>
        <div className="flex items-center mr-20">
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
      </nav>
    </div>
  );
}
