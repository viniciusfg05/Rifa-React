export default function Room() {
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