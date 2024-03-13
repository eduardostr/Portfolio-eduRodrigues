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
          Me chamo Eduardo Santos Rodrigues, nascido e criado em <span>L</span>
          auro de Freitas-BA.
          <br />
          Sou um entusiasta da tecnologia <span>e</span> amo o desafio de
          encontrar soluções inovadoras e criativas para problemas complexos.{" "}
          <span>H</span>oje sou estudante de Análise e Desenvol<span>vi</span>
          mento de Sistemas na UNINASSAU.
          <br />
          Minhas habilidades <span>t</span>écnicas <span>e</span> experiência
          estão centradas na área de testes de software. Com conhecimento em
          diversas abordagens, incluindo Testes Funcionais, Testes
          Exploratórios, Testes de Integração, Testes de API, Escrita e Analise
          de Testes.
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
