import { CardsRaffle } from "../components/CardsRaffle";
import { Header } from "../components/Header";
import styles from './home.module.scss';


export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <div className={styles.containerCards}>
          <CardsRaffle />
          <CardsRaffle />
          <CardsRaffle />
          <CardsRaffle />
          <CardsRaffle />
          <CardsRaffle />
        </div>
      </main>
    </>
  )
}
