import React from 'react'
import style from './Populares.module.scss'
import fotosPopulares from './fotos-populares.json'

export default function Populares() {
    return (
        <aside className={style.populares}>
            <h2>Populares</h2>
            <ul className={style.populares__imagens}>
                {fotosPopulares.map((item) => (
                    <li key={item.id}>
                        <img src={item.path}
                            alt={item.alt} />
                    </li>
                ))}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}