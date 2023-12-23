import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreationPage from './CreationPage';
import WordleLetter from './pages/WordleLetter';

export const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreationPage />} />
                <Route path="/letter/:letterId" element={<WordleLetter />} />
            </Routes>
        </Router>
    )
}