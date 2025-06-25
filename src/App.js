import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SubdomainPage from './SubdomainPage';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <p>npm run build</p>
                    <p>npm run deploy</p>
                    <p>git add .</p>
                    <p>git commit -m ""</p>
                    <p>git push</p>
                    <p>npm start</p>

                    {/* Internal Links */}
                    <Link className="App-link" to="/">Home</Link>
                    <Link className="App-link" to="/sub">Visit Subdomain Page</Link>
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sub" element={<SubdomainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;