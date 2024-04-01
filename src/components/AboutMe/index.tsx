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
          Me chamo Eduardo Rodrigues, nascido e criado em <span>L</span>
          auro de Freitas-BA.
          <br />
          Sou um profissional da área de QA, <span>com</span> formação em
          andamento em Análise e desenvolvimento de sistemas <span>pela </span>
          UNINASSAU. Me considero um entusiasta da tecnologia e amo o desafio de
          encontrar soluções inovadoras e criativas para problemas complexos.
          <br />
          As minhas <span>com</span>petências <span>té</span>cnicas e
          experiência estão centradas na área de testes de software, com
          conhecimentos em diversas abordagens, incluindo testes manuais e
          automatizados, testes exploratórios e de regressão, escrita de
          cenários de testes com BDD, testes de API e de integração.
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
