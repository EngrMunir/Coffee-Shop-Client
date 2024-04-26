import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;