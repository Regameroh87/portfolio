import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import UseVisibility from "../Hooks/useVisibility";
import style from "./Projects.module.css";

export default function Projects() {
  const isInmueble360Visible = UseVisibility("inmuebles360");
  const isPokemonVisible = UseVisibility("pokemon");
  const isCarouselCssVisible = UseVisibility("carouselCss");

  return (
    <section className={style.containerProjects}>
      <div>
        <h1>ALGUNOS DE MIS PROYECTOS</h1>
      </div>

      <article
        id="inmuebles360"
        className={`${style.inmuebles360} ${
          isInmueble360Visible ? style.showFinal : style.inmuebles360
        }`}
      >
        <div className={style.inmuebles360Description}>
          <h3>Inmuebles 360</h3>
          <p>
            El proyecto implica el desarrollo de una plataforma web que
            simplifica el proceso de alquiler de propiedades, permitiendo a los
            usuarios tanto alquilar propiedades como listar las suyas para
            alquilar. La plataforma incorpora varias características para
            mejorar la experiencia del usuario.
          </p>
          <p>
            Tecnologias: React, JavaScript, HTML, Redux, Tailwind, Bootstrap,
            AntDesign, Node, Cloudinary, Express, Mongodb, Nodemailer, Passport,
            Stripe, Formik...
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
          <img
            style={{ objectFit: "fill" }}
            src="./inmuebles360/detail.png"
            alt="Detail"
          />
          <img src="./inmuebles360/login.png" alt="Login" />
          <img
            src="./inmuebles360/admin.png"
            alt="Dashboard"
            style={{ objectFit: "fill" }}
          />
        </div>
      </article>

      <article
        id="pokemon"
        className={`${style.pokemonPi} ${
          isPokemonVisible ? style.showFinal : style.pokemonPi
        }`}
      >
        <div className={style.pokemonPiDescription}>
          <h3>Project Pokemon</h3>
          <p>
            El proyecto tiene como objetivo ofrecer una experiencia completa de
            exploración e interacción dentro del universo Pokémon para los
            usuarios. Al ofrecer una plataforma para que los usuarios creen sus
            Pokémon personalizados, la aplicación busca fomentar la creatividad
            y la expresión individual. Además, la integración y utilización de
            datos de la PokeAPI son aspectos cruciales del proyecto,
            garantizando la precisión y confiabilidad de la información
            relacionada con los Pokémon existentes.
          </p>
          <p>
            Tecnologias: React, JavaScript, HTML, CSS, Redux, Node, Express,
            Sequelize, Postgress
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
          <img src="./pokemon-images/loading.png" alt="loading" />
          <img src="./pokemon-images/detail.png" alt="detail" />
          <img src="./pokemon-images/modal.png" alt="modal" />
        </div>
      </article>

      <article
        id="carouselCss"
        className={`${style.carouselCss} ${
          isCarouselCssVisible ? style.showFinal : style.carouselCss
        }`}
      >
        <div className={style.carouselCssDescription}>
          <h3>Carousel CSS</h3>
          <p>
            "Explorando la Creatividad con Simplicidad: Un Carrusel Sencillo,
            Elaborado con Amor en CSS" <br></br> En mi camino para fortalecer
            mis habilidades y fomentar la imaginación, me embarqué en el diseño
            de un modesto carrusel de imágenes utilizando solo CSS. Aunque se
            presenta como un esfuerzo sencillo, este proyecto encapsula mi
            dedicación para perfeccionar mis habilidades técnicas en el vasto
            mundo de las tecnologías web.
          </p>
          <p>Tecnologias: HTML and CSS</p>
          <div>
            <a
              href="https://github.com/Regameroh87/Inmuebles360"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={style.icons} />
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="./carruselCSS.gif" alt="carousel CSS" />
        </div>
      </article>
    </section>
  );
}
