import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>User</NavLink>
            <NavLink to='/signUp'>Sign Up</NavLink>
            <NavLink></NavLink>
        </div>
    );
};

export default Header;