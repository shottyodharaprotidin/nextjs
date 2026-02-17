
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { WiDayLightning } from 'weather-icons-react';
const HomeLinks = [
    { href: '/rtl/home', text: 'Home – Layout 1', badge: 'NEW' },
    { href: '/rtl/home-two', text: 'Home – Layout 2', badge: 'POPULAR' },
    { href: '/rtl/home-three', text: 'Home – (Box) Layout 3' },
    { href: '/rtl/home-four', text: 'Home – Layout 4' },
    { href: '/rtl/home-five', text: 'Home – Layout 5' },
    { href: '/rtl/home-six', text: 'Home – Layout 6' },
    { href: '/rtl/home-seven', text: 'Home – Layout 7' },
    { href: '/rtl/home-eight', text: 'Home – Layout 8' },
    { href: '/rtl/home-nine', text: 'Home – Layout 9' },
    { href: '/rtl/category-style', text: 'Category - layout 1' },
    { href: '/rtl/category-style-two', text: 'Category - layout 2' },
    { href: '/rtl/category-style-three', text: 'Category - layout 3' },
    { href: '/rtl/post-template', text: 'Post - layout 1' },
    { href: '/rtl/post-template-two', text: 'Post - layout 2' },
    { href: '/rtl/post-template-three', text: 'Post - layout 3' },
    { href: '/rtl/typography', text: 'Typography' },
    { href: '/rtl/about', text: 'About Us' },
    { href: '/rtl/contact', text: 'Contact' },
    { href: '/rtl/faq', text: 'F.A.Q' },
];
const Header = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const [isOverlayActive, setOverlayActive] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const path = usePathname()

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
        setOverlayActive(!isOverlayActive);
    };

    const closeSidebar = () => {
        setSidebarActive(false);
        setOverlayActive(false);
    };

    useEffect(() => {
        const dismissOverlay = document.querySelector('#dismiss');
        const overlay = document.querySelector('.overlay');
        const navIcon = document.querySelector('#nav-icon');

        if (dismissOverlay && overlay) {
            dismissOverlay.addEventListener('click', closeSidebar);
            overlay.addEventListener('click', closeSidebar);
        }

        if (navIcon) {
            navIcon.addEventListener('click', toggleSidebar);
        }

        // Cleanup function for removing event listeners
        return () => {
            if (dismissOverlay && overlay) {
                dismissOverlay.removeEventListener('click', closeSidebar);
                overlay.removeEventListener('click', closeSidebar);
            }
            if (navIcon) {
                navIcon.removeEventListener('click', toggleSidebar);
            }
        };
    }, [isSidebarActive, isOverlayActive]); // R
    useEffect(() => {
        const fullSkinSearch = () => {
            let wHeight = window.innerHeight;

            // Search bar middle alignment
            const fullscreenSearchform = document.getElementById('fullscreen-searchform');
            fullscreenSearchform.style.top = `${wHeight / 2}px`;

            // Reform search bar on window resize
            window.addEventListener('resize', () => {
                wHeight = window.innerHeight;
                fullscreenSearchform.style.top = `${wHeight / 2}px`;
            });
        };

        fullSkinSearch(); // Call the function once the component is mounted

        // Cleanup function if needed
        return () => {
            // Remove event listeners or perform cleanup if required
        };
    }, []);

    const handleSearchButtonClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleCloseButtonClick = () => {
        setIsSearchOpen(false);
    };

    return (
        <>
            {/* *** START PAGE HEADER SECTION *** */}
            <header>
                {/* START HEADER TOP SECTION */}
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/* Start top left menu */}
                                <div className="d-flex top-left-menu">
                                    <ul className="align-items-center d-flex flex-wrap">
                                        <li>
                                            {/* Start header social */}
                                            <div className="header-social">
                                                <ul className="align-items-center d-flex gap-2">
                                                    <li>
                                                        <Link href="#">
                                                            <i className="fab fa-facebook-f" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <i className="fab fa-twitter" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <i className="fab fa-vk" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <i className="fab fa-instagram" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <i className="fab fa-youtube" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <i className="fab fa-vimeo-v" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* End of /. header social */}
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <Link href="#">Contact</Link>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <Link href="#">Donation</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* End of /. top left menu */}
                            </div>
                            {/* Start header top right menu */}
                            <div className="col-auto ms-auto">
                                <div className="header-right-menu">
                                    <ul className="d-flex justify-content-end">
                                        <li className="d-md-block d-none">
                                            Currency:{" "}
                                            <Link href="#" className="fw-bold">
                                                USD
                                            </Link>
                                        </li>
                                        <li className="d-md-block d-none">
                                            Wishlist:{" "}
                                            <Link href="#" className="fw-bold">
                                                12
                                            </Link>
                                        </li>
                                        <li>
                                            {" "}
                                            <Link href="#">
                                                <i className="fa fa-lock" /> Sign Up{" "}
                                            </Link>
                                            <span className="fw-bold">or</span>
                                            <Link href="#"> Login</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* end of /. header top right menu */}
                        </div>
                        {/* end of /. row */}
                    </div>
                    {/* end of /. container */}
                </div>
                {/* END OF /. HEADER TOP SECTION */}
                {/* START MIDDLE SECTION */}
                <div className="d-md-block d-none header-mid">
                    <div className="container">
                        <div className="align-items-center row justify-content-center">
                            <div className="col">
                                <div className="hstack gap-3">
                                    <div id="nav-icon" className={isSidebarActive ? 'open' : ''}>
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <div className="vr" />
                                    <span className="fw-semibold text-uppercase menu-text">
                                        All Section
                                    </span>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="align-items-center d-flex gap-3">
                                    {/* Start weather text */}
                                    <div className="fs-5 fw-semibold weather-text">
                                        <WiDayLightning size={28} /> 11.23°C
                                    </div>
                                    {/* Start logo */}
                                    <Link href="/rtl/home" className="header-logo">
                                        <img
                                            src="../../assets/images/logo.png"
                                            className="header-logo_dark"
                                            alt=""
                                        />
                                        <img
                                            src="../../assets/images/logo-white.png"
                                            className="header-logo_white"
                                            alt=""
                                        />
                                    </Link>
                                    {/* Start language dropdown */}
                                    <div className="dropdown language-dropdown">
                                        <button
                                            className="btn p-0 dropdown-toggle d-flex align-items-center gap-2"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fa-solid fa-earth-americas" />
                                            <div className="fw-semibold">En</div>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item active" href="#">
                                                    <i className="sl-flag flag-de" />
                                                    <span className="language-text">De</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="#">
                                                    <i className="sl-flag flag-usa" />
                                                    <span className="language-text">En</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col text-end fw-semibold text-uppercase date-text">
                                Friday, August 4
                            </div>
                        </div>
                    </div>
                </div>
                {/* END OF /. MIDDLE SECTION */}
                {/* START NAVIGATION */}
                <nav className="custom-navbar navbar navbar-expand-lg sticky-top flex-column no-logo no-logo">
                    {/* Start Fullscreen Search */}
                    <div className={`fullscreen-search-overlay ${isSearchOpen ? 'fullscreen-search-overlay-show' : ''}`} >
                        <Link
                            href="#"
                            className="fullscreen-close"
                            onClick={handleCloseButtonClick}
                            id="fullscreen-close-button"
                        >
                            <i className="ti ti-close" />
                        </Link>
                        <div id="fullscreen-search-wrapper">
                            <form method="get" id="fullscreen-searchform">
                                <input
                                    type="text"
                                    defaultValue=""
                                    placeholder="Type keyword(s) here"
                                    id="fullscreen-search-input"
                                />
                                <i className="ti ti-search fullscreen-search-icon">
                                    <input value="" type="submit" />
                                </i>
                            </form>
                        </div>
                    </div>
                    {/* /. End Fullscreen Search */}
                    <div className="container position-relative">
                        {/* Start Navbar Brand*/}
                        <Link className="navbar-brand d-md-none" href="/rtl/home">
                            {/* <img class="logo-dark" src="../../assets/images/logo.png" alt=""> */}
                            <img
                                src="../../assets/images/logo.png"
                                className="header-logo_dark"
                                alt=""
                            />
                            <img
                                src="../../assets/images/logo-white.png"
                                className="header-logo_white"
                                alt=""
                            />
                        </Link>
                        {/* End Navbar Brand*/}
                        {/* Start Search Button */}
                        <button
                            type="button"
                            className="btn btn-search_two  ms-auto ms-md-0 d-lg-none"
                            onClick={handleSearchButtonClick}
                        >
                            <i className="fa fa-search" />
                        </button>
                        {/* End Search Button */}
                        {/* Start Navbar Toggler Buton */}
                        <button
                            className={`navbar-toggler ms-1`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >

                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* End Navbar Toggler Buton */}
                        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                            {/* Start Navbar Collapse Header */}
                            <div className="align-items-center border-bottom d-flex d-lg-none  justify-content-between mb-3 navbar-collapse__header pb-3">
                                {/* Start Brand Logo For Mobile */}
                                <div className="collapse-brand flex-shrink-0">
                                    <Link href="/rtl/home">
                                        <img
                                            src="../../assets/images/logo.png"
                                            className="header-logo_dark"
                                            alt=""
                                        />
                                    </Link>
                                    <Link href="/rtl/home">
                                        <img
                                            src="../../assets/images/logo-white.png"
                                            className="header-logo_white"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                {/* End Brand Logo For Mobile */}
                                {/* Start Collapse Close Button */}
                                <div className="flex-grow-1 ms-3 text-end">
                                    <button
                                        type="button"
                                        className="bg-transparent border-0 collapse-close p-0 position-relative"
                                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                    >
                                        <span /> <span />
                                    </button>
                                </div>
                                {/* End Collapse Close Button */}
                            </div>
                            {/* End Navbar Collapse Header */}
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        Home
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                        {HomeLinks.slice(0, 9).map((link, index) => (
                                            <li key={index}>
                                                <Link className={`dropdown-item ${path === link.href ? 'active' : ''}`} href={link.href}>
                                                    {link.text} {link.badge && <span className="menu-badge">{link.badge}</span>}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown mega-menu-content d-none d-lg-block">
                                    <Link className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mega Menu
                                    </Link>
                                    {/* Mega Menu */}
                                    <ul className="dropdown-menu mega-menu p-3 megamenu-content" aria-labelledby="dropdownMenuButton2">
                                        <li>
                                            <div className="row">
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Accessories</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li>
                                                                <Link href="#">Beanies</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Caps &amp; Hats</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Glasses</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Gloves</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Jewellery</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Scarves</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Sports</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li>
                                                                <Link href="#">Cricket</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Football</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Golf</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Leggings</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Cycling</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Shorts</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Tops</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li>
                                                                <Link href="#">Cardigans</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Coats</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Hoodies &amp; Sweatshirts</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Jumpers</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Polo Shirts</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Shirts</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Accessories</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li>
                                                                <Link href="#">Olympic</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Bomber jackets</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Denim Jackets</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Duffle Coats</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Leather Jackets</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">Parkas</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                            </div>
                                            {/* end row */}
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown mega-menu-content d-none d-lg-block" >
                                    <Link className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                        Video
                                    </Link>
                                    {/* Mega Menu */}
                                    <ul className="dropdown-menu mega-menu p-3 megamenu-content" aria-labelledby="dropdownMenuButton3">
                                        <li className="g-3 row">
                                            <div className="col-menu-video col-md-3">
                                                <Link className="video-nav-item" href="#">
                                                    <div className="img-wrapper">
                                                        <img
                                                            src="../../assets/images/gallery-235x160-1.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                        <div className="link-icon">
                                                            <i className="ti ti-video-camera" />
                                                        </div>
                                                    </div>
                                                    <h4>
                                                        It is a long established fact that a reader will be.{" "}
                                                    </h4>
                                                </Link>
                                            </div>
                                            {/* end col-3 */}
                                            <div className="col-menu-video col-md-3">
                                                <Link className="video-nav-item" href="#" >
                                                    <div className="img-wrapper">
                                                        <img
                                                            src="../../assets/images/gallery-235x160-2.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                        <div className="link-icon">
                                                            <i className="ti ti-video-camera" />
                                                        </div>
                                                    </div>
                                                    <h4>
                                                        It is a long established fact that a reader will be.{" "}
                                                    </h4>
                                                </Link>
                                            </div>
                                            {/* end col-3 */}
                                            <div className="col-menu-video col-md-3">
                                                <Link className="video-nav-item" href="#">
                                                    <div className="img-wrapper">
                                                        <img
                                                            src="../../assets/images/gallery-235x160-3.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                        <div className="link-icon">
                                                            <i className="ti ti-video-camera" />
                                                        </div>
                                                    </div>
                                                    <h4>
                                                        It is a long established fact that a reader will be.{" "}
                                                    </h4>
                                                </Link>
                                            </div>
                                            <div className="col-menu-video col-md-3">
                                                <Link className="video-nav-item" href="#">
                                                    <div className="img-wrapper">
                                                        <img
                                                            src="../../assets/images/gallery-235x160-4.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                        <div className="link-icon">
                                                            <i className="ti ti-video-camera" />
                                                        </div>
                                                    </div>
                                                    <h4>
                                                        It is a long established fact that a reader will be.{" "}
                                                    </h4>
                                                </Link>
                                            </div>
                                            {/* end col-3 */}
                                            <div className="col-menu-video col-md-3">
                                                <Link className="video-nav-item" href="#">
                                                    <div className="img-wrapper">
                                                        <img
                                                            src="../../assets/images/gallery-235x160-5.jpg"
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                        <div className="link-icon">
                                                            <i className="ti ti-video-camera" />
                                                        </div>
                                                    </div>
                                                    <h4>
                                                        It is a long established fact that a reader will be.{" "}
                                                    </h4>
                                                </Link>
                                            </div>
                                            {/* end col-3 */}
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        aria-expanded="false"
                                    >
                                        Pages
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item dropdown dropend">
                                            <Link
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Home
                                            </Link>
                                            <ul className="dropdown-menu">
                                                {HomeLinks.slice(0, 9).map((link, index) => (
                                                    <li key={index}>
                                                        <Link className={`dropdown-item ${path === link.href ? 'active' : ''}`} href={link.href}>
                                                            {link.text} {link.badge && <span className="menu-badge">{link.badge}</span>}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown dropend">
                                            <Link
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Category layout
                                            </Link>
                                            <ul className="dropdown-menu">
                                                {HomeLinks.slice(9, 12).map((link, index) => (
                                                    <li key={index}>
                                                        <Link className={`dropdown-item ${path === link.href ? 'active' : ''}`} href={link.href}>
                                                            {link.text} {link.badge && <span className="menu-badge">{link.badge}</span>}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown dropend">
                                            <Link className="dropdown-item dropdown-toggle" href="#">
                                                Post template
                                            </Link>
                                            <ul className="dropdown-menu">
                                                {HomeLinks.slice(12, 15).map((link, index) => (
                                                    <li key={index}>
                                                        <Link className={`dropdown-item ${path === link.href ? 'active' : ''}`} href={link.href}>
                                                            {link.text} {link.badge && <span className="menu-badge">{link.badge}</span>}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        {HomeLinks.slice(15, 19).map((link, index) => (
                                            <li key={index}>
                                                <Link className={`dropdown-item ${path === link.href ? 'active' : ''}`} href={link.href}>
                                                    {link.text} {link.badge && <span className="menu-badge">{link.badge}</span>}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                {HomeLinks.slice(15, 19).map((link, index) => (
                                    <li key={index} className="nav-item">
                                        <Link className={`nav-link ${path === link.href ? 'active' : ''}`} href={link.href}>
                                            {link.text} {link.badge && <span className="menu-badge">{link.badge}</span>}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="w-100 w-lg-auto d-none d-lg-flex">
                            {/* Start Search Button */}
                            <div className='d-flex align-items-center'>
                                <button type="button" className="btn btn-search_two ms-auto" onClick={handleSearchButtonClick} >

                                    <i className="fa fa-search fa-lg" />
                                </button>

                            </div>
                            {/* End Search Button */}
                        </div>
                        {/* End Color Change Button */}
                    </div>
                </nav>
                {/* END OF/. NAVIGATION */}
                {/* START SIDEBAR */}
                <nav id="sidebar" className={isSidebarActive ? "active p-4" : "p-4"} >
                    <div id="dismiss">
                        <i className="fas fa-arrow-left" />
                    </div>
                    <div className="d-flex flex-column h-100">
                        <div className="">
                            <Link href="/rtl/home" className="d-inline-block my-3">
                                <img src="../../assets/images/logo-white.png" alt="" height={50} />
                            </Link>
                            <p>
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <ul className="nav d-block flex-column my-4">
                            <li className="nav-item h5">
                                <Link className="nav-link" href="/rtl/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item h5">
                                <Link className="nav-link" href="/rtl">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item h5">
                                <Link className="nav-link" href="#">
                                    Our Journal
                                </Link>
                            </li>
                            <li className="nav-item h5">
                                <Link className="nav-link" href="/rtl/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <h5 className="wiget-title">Instagrams</h5>
                        <ul className="g-1 insta_thumb list-unstyled p-0 row">
                            <li className="col-6">
                                <Link href="#" className="insta_effect d-inline-block position-relative">
                                    <img
                                        src="../../assets/images/instagram-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li className="col-6">
                                <Link href="#" className="insta_effect d-inline-block position-relative">
                                    <img
                                        src="../../assets/images/instagram-2.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li className="col-6">
                                <Link href="#" className="insta_effect d-inline-block position-relative">
                                    <img
                                        src="../../assets/images/instagram-3.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li className="col-6">
                                <Link href="#" className="insta_effect d-inline-block position-relative">
                                    <img
                                        src="../../assets/images/instagram-4.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-auto pb-3">
                            {/* Address */}
                            <p className="mb-2 fw-bold">New York, USA (HQ)</p>
                            <address className="mb-0">
                                1123 Fictional St, San Francisco, CA 94103
                            </address>
                            <p className="mb-2">
                                Call:{" "}
                                <Link href="#" className="text-white">
                                    <u>(123) 456-7890</u> (Toll-free)
                                </Link>{" "}
                            </p>
                            <Link href="#" className="d-block text-white">
                                hello@inews.com
                            </Link>
                        </div>
                    </div>
                </nav>
                {/* END OF /. SIDEBAR */}
                <div className={isOverlayActive ? "overlay active" : "overlay"} />

            </header>
            {/* *** END OF /. PAGE HEADER SECTION *** */}

        </>
    );
};

export default Header;