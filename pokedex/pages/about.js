import Image from 'next/image'
import styles from '../styles/About.module.css'

import Link from 'next/link'

export default function About() {
    return [
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>PokeNext é um App construído em Next.js para consultar Pokémons.</p>
            <Image 
                src="/images/charizard.png" 
                width="300" 
                height="300" 
                alt="Charizard"
                /> 
            <li className={styles.li}>
                <Link href="/">
                    <a>Voltar</a>
                </Link>
            </li>            
        </div>
    ]
}