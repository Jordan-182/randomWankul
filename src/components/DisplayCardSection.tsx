import styles from "./DisplayCardSection.module.css";

interface CardImageProps {
  cardImageUrl: string;
}

export const DisplayCardSection = ({ cardImageUrl }: CardImageProps) => {
  return (
    <>
      <section>
        <article>
          {cardImageUrl && (
            <img
              src={cardImageUrl}
              alt="Wankul aléatoire"
              className={styles.wankulCard}
            />
          )}
        </article>
      </section>
    </>
  );
};
