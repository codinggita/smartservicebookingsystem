import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
          <Banner />
          <Navbar />
          <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
