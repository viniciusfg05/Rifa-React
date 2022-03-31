import { CardsRaffle } from "../components/CardsRaffle";
import { Header } from "../components/Header";
import styles from './home.module.scss';


export default function Home() {
  return (
    <>
      <Header />,

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
