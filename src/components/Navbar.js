/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {useStyle} from '../css/Style';
import { CloseOutline } from 'react-ionicons';
import { LogoLinkedin } from 'react-ionicons';
import { LogoBehance } from 'react-ionicons';
import { LogoGithub } from 'react-ionicons'
import Profil from '../img/perfil.png';
const Navbar = () => {
const {header, headerLogo, headerToggle, navMenu, navContent, navClose, navProfil, navImg, navName, navJob, navigMenu, navList, navItem, navLink, navSocials, navSocialIcon, imgP} = useStyle();

    return (
        <header className={header}>
            <a href="#!" className={headerLogo}>Khadetou Dianifabe</a>
            
            <i className={`bx bx-menu ${headerToggle}`}></i>

            <nav className={navMenu}>
                <div className={navContent}>

                <i className={`bx bx-x ${navClose}`}></i>

                    <div className={navProfil}>
                        <div className={navImg}>
                            <img src={Profil} className={imgP} alt="profile" />
                        </div>

                        <div>
                            <a href="#!" className={navName}>Khadetou DIANIFABE</a>
                            <span className={navJob}>Software engineer</span>
                        </div>
                    </div>

                    <div className={navigMenu}>
                        <ul className={navList}>
                            <li className={navItem}>
                                <a href="#!" className={navLink}>Home</a>
                            </li>
                            <li className={navItem}>
                                <a href="#!" className={navLink}>About</a>
                            </li>
                            <li className={navItem}>
                                <a href="#!" className={navLink}>Skills</a>
                            </li>
                            <li className={navItem}>
                                <a href="#!" className={navLink}>Portfolio</a>
                            </li>
                            <li className={navItem}>
                                <a href="#!" className={navLink}>Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className={navSocials}>
                        <a href="#!" className={navSocialIcon}><i className='bx bxl-linkedin-square'></i></a>
                        <a href="#!" className={navSocialIcon}><i className='bx bxl-github'></i></a>
                        <a href="#!" className={navSocialIcon}><i className='bx bxl-behance'></i></a>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navbar;
