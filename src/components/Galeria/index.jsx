import React, { useState } from 'react'
import style from './Galeria.module.scss'
import Tags from '../Tags'
import fotos from './fotos.json'
import likeIcon from './favorito.png'
import openIcon from './open.png'

export default function Galeria() {
    const [itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map((valor) => valor.tag))]

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag
        })
        setItens(novasFotos)
    }

    return (
        <div className={style.galeria}>
            <h2>Navegue pela Galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
            <ul className={style.galeria__cards}>
                {itens.map(item => (
                    <li key={item.id} className={style.galeria__card}>
                        <img
                            className={style.galeria__imagem}
                            src={item.imagem}
                            alt={item.titulo}
                        />
                        <p className={style.galeria__descricao}>{item.titulo}</p>
                        <div>
                            <p>{item.creditos}</p>
                            <span>
                                <img src={likeIcon} alt='Icone de curtida' />
                                <img src={openIcon} alt='Icone de abrir modal' />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
} 