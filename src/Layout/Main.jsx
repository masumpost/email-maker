import { Outlet } from "react-router-dom";
import Nabvar from "../Shared/Nabvar";
import Banner from "../Shared/Banner";


const Main = () => {
    return (
        <div className="bg-slate-400">
            <Nabvar></Nabvar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;