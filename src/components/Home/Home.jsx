import style from "../Home/Home.module.css";
import Projects from "../Projects/Projects";
import About from "../About/About";

export default function Home() {
  const code = "/>";
  const keys = "<";

  return (
    <main className={style.container}>
      <section id="home" className={style.title}>
        <img src="smoke.gif" alt="smoke" />
        <div></div>
        <h1>{keys}Hola!</h1>
        <h2>Soy Rodrigo Gamero</h2>
        <h6>
            Desarrollador Fullstack <strong>{code}</strong>
        </h6>
      </section>
      <Projects />
      <About />
    </main>
  );
}
