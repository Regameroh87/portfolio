import style from "../Home/Home.module.css";
import Projects from "../Projects/Projects";

export default function Home() {
  const code = "/>";
  const keys = "<";
  return (
    <main className={style.container}>
      <section className={style.title}>
        <video autoPlay muted preload="auto" playsInline>
        <source src="smoke.mp4" type="video/mp4" />
        </video>
        <div></div>
        <h1>{keys}Hello!</h1>
        <h2>I'm Rodrigo Gamero</h2>
        <h6>
          I'am Fullstack Developer <strong>{code}</strong>
        </h6>
      </section>
      <Projects/>

    </main>
  );
}
