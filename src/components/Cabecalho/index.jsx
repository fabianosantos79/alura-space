import styles from './Cabecalho.module.scss'
import Logo from './logo.png'
import SearchImage from './search.png'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={Logo} alt='Logo do Alura Space' />
            <div className={styles.cabecalho__container}>
                <input
                    className={styles.cabecalho__input}
                    type="text"
                    placeholder="O que você procura?"
                />
                <img src={SearchImage} alt='Logo de lupa' />
            </div>
        </header>
    )
}