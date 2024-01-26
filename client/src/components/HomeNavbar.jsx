import Button from './NewHomeButton';
import logo from '../assets/logoNew.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './Footer.module.css';
// import back from "../assets/trasparentbg.svg"

const HomeNavbar = () => {
    const location = useLocation();
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (location.pathname === '/newAbout') setStatus(true);
    }, []);

    return (
        <div
            className={`lg:flex hidden ${classes.header} py-4 justify-around items-center `}
        >
            <Button title="About Us" />
            <Button title="Events" />
            {status ? <img src={logo} alt="" /> : null}
            <Button title="Sponsors" />
            <Button title="Register" />
        </div>
    );
};

export default HomeNavbar;
