/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react"
import Title from "../Title"
import style from "./AboutMe.module.scss"
import { motion } from "framer-motion"

export default function AboutMe() {
  const [isAnimating, setIsAnimating] = useState(false)

  function startAnimation() {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  return (
    <section id="AboutMe" className={style.AboutMe}>
      <Title titleName="Sobre Mim" />
      <div className={style.conteudoSobreMim}>
        <p className={`${isAnimating ? style.secretMessage : ""}`}>
          <br />
          <span>Olá,</span> Meu nome é <span>Edua</span>rdo Santos Rodri
          <span>gues</span> e nasci em <span>Lau</span>ro de Frei
          <span>tas</span> no ano de 1999.
          <br />
          <br />
          Sempre fui apaixonado por <span>tecno</span>logia desde criança, o que
          me levou a seguir uma carreira na área. Atualmente, sou estudante de{" "}
          <span>Anál</span>ise e <span>Desen</span>volvimento de{" "}
          <span>Sist</span>emas na UniNassau, focado na área de análise de
          dados.
          <br />
          <br />
          Meu objetivo é me tornar um <span>engen</span>heiro de dados e criar
          experiências incríveis. Como um trabalhador determinado. Estou{" "}
          <span>compro</span>metido em cumprir prazos e compartilhar meu{" "}
          <span>conhe</span>cimento com minha equipe.
          <br />
          <br />
          <a
            href="https://curriculo-html-edu.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Veja meu currículo aqui!
          </a>
        </p>
        <div
          className={`${style.animation} ${
            isAnimating ? style.rapidRotate : ""
          }`}
          onClick={startAnimation}
        >
          <img
            className={`${style.rotateRight} ${style.image}`}
            src="assets/img/1.png"
            alt="animation-image"
          />
          <img
            className={`${style.rotateLeft} ${style.blurImage}`}
            src="assets/img/1.png"
            alt="animation-image"
          />

          <img
            className={`${style.rotateLeft} ${style.image}`}
            src="assets/img/2.png"
            alt="animation-image"
          />
          <img
            className={`${style.rotateRight} ${style.blurImage}`}
            src="assets/img/2.png"
            alt="animation-image"
          />
          <motion.div
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            className={`${style.focus}`}
          ></motion.div>
        </div>
      </div>
    </section>
  )
}
