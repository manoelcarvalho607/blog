import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./pages/pageBase";
import Home from "./pages/Home";






const BASE_URL = import.meta.env.BASE_URL || "/";

function AppRoutes() {
    return (
        <BrowserRouter basename={BASE_URL}>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;