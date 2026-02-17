
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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
const HeaderTwo = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const path = usePathname()
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
        console.log(isSearchOpen ? 'Closed Search' : 'Open Search, Search Centered');
    };

    const handleCloseButtonClick = () => {
        setIsSearchOpen(false);
        console.log('Closed Search');
    };
    return (
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
                        </div>{" "}
                        {/* end of /. header top right menu */}
                    </div>{" "}
                    {/* end of /. row */}
                </div>{" "}
                {/* end of /. container */}
            </div>
            {/* END OF /. HEADER TOP SECTION */}
            {/* START MIDDLE SECTION */}
            <div className="d-md-block d-none header-mid">
                <div className="container">
                    <div className="align-items-center row">
                        <div className="col-sm-4">
                            <Link href="/rtl/home">
                                <img
                                    src="../../assets/images/logo.png"
                                    className="img-fluid header-logo header-logo_dark"
                                    alt=""
                                />
                                <img
                                    src="../../assets/images/logo-white.png"
                                    className="img-fluid header-logo_white"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="col-sm-8">
                            <Link href="#">
                                <img
                                    src="../../assets/images/add728x90-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* END OF /. MIDDLE SECTION */}
            {/* START NAVIGATION */}
            {/* START NAVIGATION */}
            {/* START NAVIGATION */}
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
                            className="btn btn-search_two  ms-auto ms-md-0  d-lg-none"
                            onClick={handleSearchButtonClick}
                        >
                            <i className="fa fa-search" />
                        </button>
                    {/* End Search Button */}
                    {/* Start Navbar Toggler Buton */}
                    <button
                        className="navbar-toggler ms-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {" "}
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
                                    <li key={index} >
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
            {/* END OF/. NAVIGATION */}
            {/* END OF/. NAVIGATION */}
            {/* END OF/. NAVIGATION */}
        </header>
    );
};

export default HeaderTwo;