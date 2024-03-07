import style from "./About.module.css";

export default function About() {
  return (
    <section id="aboutme" className={style.containerAboutMe}>
      <article>
        <span className={style.spanAboutMe}>Quien soy?</span>
        <div className={style.descriptionAboutMe}>
          <div className=" text-white">
          <p>
            "Soy nuevo en el mundo del desarrollo web, pero estoy entusiasmado
            por aprender y mejorar constantemente mis habilidades. Aunque recién
            estoy comenzando, tengo una sólida base y estoy seguro de que puedo
            adaptarme rápidamente y enfrentar cualquier desafío que se presente.
            Estoy comprometido a crecer y desarrollarme en este campo, y estoy
            emocionado por las oportunidades que me esperan para aprender y
            mejorar."
          </p >
          </div>
          <div>
            <img src="Rodrigo.jpg" alt="Rodrigo" />
          </div>
        </div>
      </article>
    </section>
  );
}
