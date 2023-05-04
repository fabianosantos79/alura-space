import styles from './PaginaInicial.module.scss'
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import Banner from '../../components/Banner';

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>

        </>
    )
}
