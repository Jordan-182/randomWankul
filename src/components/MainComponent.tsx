import { useState } from "react";
import { BtnSection } from "./BtnSection";
import { DisplayCardSection } from "./DisplayCardSection";
import styles from "./MainComponent.module.css";

export const MainComponent = () => {
  const [cardImageUrl, setCardImageUrl] = useState("");
  return (
    <>
      <main className={styles.main}>
        <BtnSection setCardImageUrl={setCardImageUrl} />
        <DisplayCardSection cardImageUrl={cardImageUrl} />
      </main>
    </>
  );
};
