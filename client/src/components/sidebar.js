import styles from '../sidebar.module.css';

export default function Sidebar() {
    return (
    <div className={styles.sidebar}>
        {/* Make logo a button that returns to home page in future */}
        <div className={styles["logo-section"]}>
            <div className={styles["logo-container"]}>
                <img src="/images/paperclip.svg" alt="Logo" className={styles["contained-img"]} />
            </div>
        </div>
        <nav className={styles.navbar}>
            <ul className={styles["nav-links"]}>
                <li className={styles["nav-item"]}>
                    <div className={styles["nav-link-container"]}>
                        <img className={styles.icon} alt="Settings" src="/images/cog.svg" />
                        <a className={styles["nav-link"]}>Settings</a>
                    </div>
                </li>
                <li className={styles["nav-item"]}>
                    <div className={styles["nav-link-container"]}>
                        <img className={styles.icon} alt="Account" src="/images/account-circle.svg" />
                        <a className={styles["nav-link"]}>Account</a>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
    );
}