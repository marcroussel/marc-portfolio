import Header from "../components/Header/Header";

import styles from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className={styles.mainContent}>
                <h1>Mes projets</h1>
            </div>
        </>
    );
}

export default HomePage;