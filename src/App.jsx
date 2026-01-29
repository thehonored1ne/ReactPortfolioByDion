import './App.css'
import Desktop from './components/Desktop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/StartPage";

function App() {

    return (

        <BrowserRouter>
            <Routes>
                {/* When path is "/", show your Desktop OS */}
                <Route path="/" element={<About />} />

                {/* When path is "/about", show your new About Page */}
                <Route path="/desktop" element={<Desktop />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App