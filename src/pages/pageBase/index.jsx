import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/header";





function pageBase() {

    return (
        <>
           <Header />
                <Outlet/>
        </>

    )
}

export default pageBase;
