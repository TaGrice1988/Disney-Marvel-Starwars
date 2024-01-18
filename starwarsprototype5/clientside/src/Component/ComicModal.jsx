import "react";
import styles from "../pages/styles/ComicModal.module.css";

const ComicModal = ({ comic, onClose }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        {comic && (
          <>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className={styles.comicImage}
            />
            <div className={styles.modalDetails}>
              <h3>{comic.title}</h3>
              <p>{comic.description}</p>
              <h4>Creators:</h4>
              <div className={styles.columnContainer}>
                <ul className={styles.columnList}>
                  {comic.creators.items.map((creator) => (
                    <li key={creator.name}>
                      {creator.role}: {creator.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.modalCharacters}>
                <h3>Characters:</h3>
                <ul>
                  {comic.characters.items.map((character) => (
                    <li key={character.name}>{character.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ComicModal;
