import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import style from "./Projects.module.css";

export default function Projects() {
 const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("inmuebles360");

      if (element) {
        const rect = element.getBoundingClientRect();

        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight; // obtengo la altura del viewport
        const porcentajeVisible = Math.round(((viewportHeight - rect.top) / viewportHeight) * 100);
        console.log("soy el porcentaje", porcentajeVisible);
        if (porcentajeVisible > 30) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
        
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className={style.containerProjects}>
        <div>
          <h1>SOME OF MY LATEST WORK</h1>
        </div>

        <article
          id="inmuebles360"
          className={style.inmuebles360}
            >
            {/* className={`${style.inmuebles360} ${isVisible ? style.inmuebles360Final : style.inmuebles360 }`} */}
          <div className={style.inmuebles360Description}>
            <h3>Inmuebles 360</h3>
            <p>
              The project involves the development of a web platform that
              streamlines the property rental process, enabling users to both
              rent properties and list their own for rent. The platform
              incorporates various features to enhance the user experience.
            </p>
            <p>
              Some technologies: React, JavaScript, HTML, Redux, Tailwind,
              Bootstrap, AntDesign, Node, Cloudinary, Express, Mongodb,
              Nodemailer, Passport, Stripe, Formik...
            </p>
            <div>
              <a
                href="https://inmuebles-360.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className={style.icons} />
              </a>
              <a
                href="https://github.com/Regameroh87/Inmuebles360"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className={style.icons} />
              </a>
              <a
                href="https://vimeo.com/881328120?share=copy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faVideo} className={style.icons} />
              </a>
            </div>
          </div>

          <div className={style.inmuebles360Images}>
            <div>
              <img
                style={{
                  height: "50%",
                  objectFit: "fill",
                  borderRadius: "20px 20px 0 0",
                }}
                src="./inmuebles360/home.png"
                alt="Home"
              />
              <img
                style={{
                  height: "50%",
                  objectFit: "fill",
                  borderRadius: "0 0 20px 20px",
                }}
                src="./inmuebles360/properties.png"
                alt="Home"
              />
            </div>
            <img src="./inmuebles360/detail.png" alt="Detail" />
            <img src="./inmuebles360/login.png" alt="Login" />
            <img
              src="./inmuebles360/admin.png"
              alt="Dashboard"
              style={{ objectFit: "fill" }}
            />
          </div>
        </article>

        <article className={style.pokemonPi}>
          <div className={style.pokemonPiDescription}>
            <h3>Project Pokemon</h3>
            <p>
              The project aims to deliver a complete exploration and interaction
              experience within the Pokémon universe for users. By offering a
              platform for users to create their personalized Pokémon, the
              project seeks to foster creativity and individual expression.
              Additionally, the integration and utilization of data from the
              PokeAPI are crucial aspects of the project, ensuring the accuracy
              and reliability of information pertaining to existing Pokémon.
            </p>
            <p>
              Some technologies: React, JavaScript, HTML, CSS, Redux, Node,
              Express, Sequelize, Postgress
            </p>
            <div>
              <a
                href="https://github.com/Regameroh87/Pokemon-PI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className={style.icons} />
              </a>
              <a
                href="https://vimeo.com/897329226?share=copy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faVideo} className={style.icons} />
              </a>
            </div>
          </div>

          <div className={style.pokemonPiImages}>
            <img src="./pokemon-images/home.png" alt="home" />
            <img src="./pokemon-images/form.png" alt="form"/>
            <img src="./pokemon-images/detail.png" alt="detail"/>
            <img src="./pokemon-images/modal.png" alt="modal"/>
          </div>
        </article>
      </section>
    </div>
  );
}
