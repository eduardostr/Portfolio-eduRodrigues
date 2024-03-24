/* eslint-disable react/jsx-no-target-blank */
import { Fragment } from 'react'
import Title from '../../components/Title'
import style from './QAXCertificates.module.scss'

const qaxCertificates = [
    {
        nome: 'AutomatizAi - Robot Framework e ChatGPT',
        instituicao: 'QAx',
        horas: '8',
        ano: '2024',
        linkPdf: 'assets/pdf/Eduardo Rodrigues - AutomatizAi_Robot_Framework_e_ChatGPT - QAx.pdf',
        link: 'assets/img/qaxImages/AutomatizAi - Robot Framework e ChatGPT.jpg',
    },
]

export default function QAXCertificates() {
    return (
        <section className={style.QAXCertificatesContainer}>
            <Title titleName='Certificados do QAx' />
            <section className={style.certificate}>
                {qaxCertificates.map(({ nome, instituicao, horas, ano, linkPdf, link }) => (
                    <a href={linkPdf} key={nome} target='_blank'>
                        <img src={link} alt={nome} />
                    </a>
                ))}
            </section>
        </section>
    )
}