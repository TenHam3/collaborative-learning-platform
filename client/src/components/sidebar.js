import '../sidebar.css';

export default function Sidebar() {
    return (
    <div className="sidebar">
        {/* Make logo a button that returns to home page in future */}
        <div className="logo-section">
            <div className="logo-container">
                <img src="/images/paperclip.svg" alt="Logo" className="contained-img" />
            </div>
        </div>
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    <div className="nav-link-container">
                        <img className="icon" alt="Settings" src="/images/cog.svg" />
                        <a className="nav-link">Settings</a>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link-container">
                        <img className="icon" alt="Account" src="/images/account-circle.svg" />
                        <a className="nav-link">Account</a>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
    );
}