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
          Me chamo <span>Edu</span>ardo <span>Rodri</span>gues, nascido e criado em <span>Lau</span>
          ro de <span>Frei</span>tas-BA.
          <br />
          Sou um <span>pro</span>fissional da área de QA, <span>com</span> formação em
          andamento em Análise e desenvolvimento de sistemas <span>pela </span>
          UNINASSAU. Me considero um entusiasta da <span>tec</span>nologia e amo o desafio de
          encontrar soluções <span>ino</span>vadoras e <span>cri</span>ativas para problemas <span>com</span>plexos.
          <br />
          As minhas <span>com</span>petências <span>té</span>cnicas e
          <span> exp</span>eriência estão centradas na <span>á</span>rea de testes de <span>sof</span>tware, com
          conhecimentos em diversas abordagens, incluindo testes <span>ma</span>nuais e
          <span> aut</span>omatizados, testes <span>exp</span>loratórios e de <span>reg</span>ressão, escrita de
          <span> cená</span>rios de <span>tes</span>tes com BDD, <span>tes</span>tes de API e de <span>int</span>egração.
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
