import React from 'react'
import style from './Banner.module.scss'
import banner from './banner.png'

export default function Banner() {
    return (
        <div className={style.banner}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt='Imagem da terra vista do espaço' />
        </div>
    )
}