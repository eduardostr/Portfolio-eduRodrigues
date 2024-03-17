/* eslint-disable react/jsx-no-target-blank */
import { Fragment } from 'react'
import Title from '../../components/Title'
import style from './AICSCertificates.module.scss'

const aicsCertificates = [
    {
        nome: 'Accredited Software Testing Fundamentals Certification (ASTFC)',
        instituicao: 'AICS',
        horas: '1',
        ano: '2024',
        linkPdf: 'assets/pdf/Eduardo Rodrigues - Accredited_Software_Testing_Fundamentals_Certification - AICS.pdf',
        link: 'assets/img/aicsImages/Accredited Software Testing Fundamentals Certification.jpg',
    },
    {
        nome: 'Accredited Scrum Fundamentals Certification (ASFC)',
        instituicao: 'AICS',
        horas: '1',
        ano: '2024',
        linkPdf: 'assets/pdf/Eduardo Rodrigues - Accredited_Scrum_Fundamentals_Certification - AICS.pdf',
        link: 'assets/img/aicsImages/Accredited Scrum Fundamentals Certification.jpg',
    },
]

export default function AICSCertificates() {
    return (
        <section className={style.AICSCertificatesContainer}>
            <Title titleName='Certificados da AICS' />
            <section className={style.certificate}>
                {aicsCertificates.map(({ nome, instituicao, horas, ano, linkPdf, link }) => (
                    <a href={linkPdf} key={nome} target='_blank'>
                        <img src={link} alt={nome} />
                    </a>
                ))}
            </section>
        </section>
    )
}