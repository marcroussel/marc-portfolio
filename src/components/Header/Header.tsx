import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <img alt="Photo de Profil" className={styles.profilePicture} src="src/assets/photo_profil.jpg" />
            <div className={styles.nameSection}>
                <p className={styles.name}>Marc Roussel</p>
                <p className={styles.subtitle}>Etudiant en 3ème année de BUT Informatique</p>
            </div>
        </div>
    );
}

export default Header;