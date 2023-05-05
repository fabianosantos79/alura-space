import React from 'react'
import styles from './Rodape.module.scss'
import ImgFacebook from './facebook.svg';
import ImgTwitter from './twitter.svg';
import ImgInstagram from './instagram.svg';

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <div className='redes-sociais'>
                <img src={ImgFacebook} alt='Icone do Facebook' />
                <img src={ImgInstagram} alt='Icone do Instagram' />
                <img src={ImgTwitter} alt='Icone do Twitter' />
            </div>
            <div>
                <h3>Desenvolvido por Fabiano SSantos</h3>
            </div>
        </footer>
    )
}