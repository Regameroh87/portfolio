import style from "../Home/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const code = "/>";
  const keys = "<";
  return (
    <main className={style.container}>
      <section className={style.title}>
        <video autoPlay muted preload="auto" src="smoke.mp4"></video>
        <div></div>
        <h1>{keys}Hello!</h1>
        <h2>I'm Rodrigo Gamero</h2>
        <h6>
          I'am Fullstack Developer <strong>{code}</strong>
        </h6>
      </section>

      {/* //////////////////////////// MIS PROJECTOS //////////////////////////////////////////////// */}
      <section className={style.containerProjects}>
        <div>
          <h1>SOME OF MY LATEST WORK</h1>
        </div>

        <div className={style.inmuebles360}>

          <div className={style.inmuebles360Description}>
            <h3>Inmuebles 360</h3>
            <p style={{ color: "#fff" }}>
              The project involves the development of a web platform that
              streamlines the property rental process, enabling users to both
              rent properties and list their own for rent. The platform
              incorporates various features to enhance the user experience.
            </p>
            <p style={{ color: "#fff" }}>
              Some technologies: React, JavaScript, HTML, Redux, Tailwind, Bootstrap,
              AntDesign, Node, Cloudinary, Express, Mongodb, Nodemailer,
              Passport, Stripe, Formik...
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
                style={{ height: "50%", objectFit:"fill"  }}
                src="./inmuebles360/home.png"
                alt="Home"
              />
              <img
                style={{ height: "50%", objectFit:"fill" }}
                src="./inmuebles360/properties.png"
                alt="Home"
              />
            </div>
            <img src="./inmuebles360/detail.png" alt="Detail" />
            <img src="./inmuebles360/login.png" alt="Login"  />
            <img src="./inmuebles360/admin.png" alt="Dashboard" style={{objectFit:"fill" }} />
          </div>
        </div>

        {/* <div style={{ background: "lightgreen" }}>POKEMON</div>
          <div style={{ background: "lightblue" }}>CARROUSEL IMAGENES</div> */}
      </section>
    </main>
  );
}
