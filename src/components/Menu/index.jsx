import styles from './Menu.module.scss'
import React from 'react'
import homeIcon from 'assets/icones/home-ativo.png'
import curtidasIcon from 'assets/icones/mais-curtidas-inativo.png'
import vistasIcon from 'assets/icones/mais-vistas-inativo.png'
import novasIcon from 'assets/icones/novas-inativo.png'
import supreendaIcon from 'assets/icones/surpreenda-me-inativo.png'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={homeIcon} alt='Icone Home' />
                    <a href='/'>Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={curtidasIcon} alt='Icone Mais Curtidas' />
                    <a href='/'>Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={vistasIcon} alt='Icone Mais Vistas' />
                    <a href='/'>Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novasIcon} alt='Icone Novas' />
                    <a href='/'>Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={supreendaIcon} alt='Icone Supreenda-me' />
                    <a href='/'>Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}