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
          Olá, meu nome é <span>Eduardo Rodrigues</span> e nasci em <span>Lauro de Freitas.</span> 
          Atualmente, sou estudante de <span>Análise e desenvolvimento de sistemas</span> na UniNassau. 
          Me considero um entusiasta da <span>tecnologia</span> e amo o desafio de 
          encontrar soluções <span>inovadoras</span> e <span>criativas</span> para problemas complexos.
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
