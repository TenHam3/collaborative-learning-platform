import './App.css';
import Sidebar from './components/sidebar';
import Card from './components/card';

function App() {
  // Get user's username from backend and pass it into greeting in header

  return (
    <div className="container">
      <div className="header">
        <div className="greeting">
          <div className="pfp-container">
            <img src="/images/cat.png" alt="Profile" className="contained-img" />
          </div>
          <h1>Hello, username</h1>
        </div>
        <h1 className="title">Collaborative Learning Platform</h1>
      </div>
      <Sidebar />
      <div className="content">
        <div className="cards-container">
          <Card cardName="Documents" cardIcon="/images/file-document.svg" />
        </div>
      </div>
    </div>
  );
}

export default App;