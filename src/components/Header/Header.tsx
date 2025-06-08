import styles from "./Header.module.scss";

const Header = () => {
    return (
        <span className={styles.header}>
            <img alt="Photo de Profil" className={styles.profilePicture} src="src/assets/photo_profil.jpg" />
            <div className={styles.nameSection}>
                <p className={styles.name}>Marc Roussel</p>
                <p className={styles.subtitle}>Etudiant en 3ème année de BUT Informatique</p>
            </div>
        </span>
    );
}

export default Header;