import styles from "./BtnSection.module.css";

interface ButtonProps {
  setCardImageUrl: (url: string) => void;
}

export const BtnSection = ({ setCardImageUrl }: ButtonProps) => {
  const handleClick = () => {
    const season = `S${Math.floor(Math.random() * 3) + 1}`; // S1, S2 ou S3
    const number = String(Math.floor(Math.random() * 180) + 1).padStart(3, "0"); // 001 à 180
    const newUrl = `https://cdn.shopify.com/s/files/1/0683/2055/9412/files/Wankul_${season}_${number}.webp?v=1718440711`;

    setCardImageUrl(newUrl);
  };

  return (
    <button onClick={handleClick} className={styles.randomBtn}>
      Obtenir une carte Wankul
    </button>
  );
};
