import  style  from "./About.module.css"

export default function About() {
  return (
    <section className={style.containerAboutMe}>
      <article>
        <span className={style.spanAboutMe} >About me!</span>
        <div className={style.descriptionAboutMe}>
          <div>
            TEXTO HABLO SOBRE
          </div>
          <div>
            <img src="Rodrigo.png" alt="" />
          </div>
        </div>
      </article>
    </section>
  );
}
