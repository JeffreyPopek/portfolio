import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/page";
import About from "./app/about/page";
import VRProjectPage from "./app/projects/pvp/page";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects/vrproject" element={<VRProjectPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
