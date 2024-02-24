import { Outlet } from "react-router-dom";
import Header from "../../components/Header";





function pageBase() {

    return (
        <main>
            <Header/>
                <Outlet/>
        </main>

    )
}

export default pageBase;