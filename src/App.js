import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SubdomainPage from './SubdomainPage';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <nav> {/* This is a JSX comment */}
                        <Link to="/">Home</Link> | <Link to="/subdomain">Subdomain Page</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/subdomain" element={<SubdomainPage />} />
                    </Routes>
                </header>
            </Router>
        </div>
    );
}

export default App;