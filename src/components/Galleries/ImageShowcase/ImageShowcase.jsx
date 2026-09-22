import styles from "./ImageShowcase.module.scss";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";

function ImageShowcase({ className = "", id, image = "", name = "Image Name" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={id} className={`${styles.imageContainer} ${className}`.trim()}>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        carousel={{ finite: true }}
        slides={[{ src: image }]}
        controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
      <img src={image} alt={`${name} Image`} className={styles.roomImage} />
      <button onClick={() => setIsOpen(true)}>{name}</button>
    </div>
  );
}

export default ImageShowcase;
