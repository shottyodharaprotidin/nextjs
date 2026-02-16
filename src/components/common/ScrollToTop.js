'use client';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && 
                <div onClick={scrollToTop} className="scrollToTop" style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: '999',
                    cursor: 'pointer',
                    backgroundColor: '#e74c3c',
                    color: '#fff',
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    lineHeight: '40px',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease-in-out'
                }}>
                    <i className="fas fa-angle-up"></i>
                </div>
            }
        </>
    );
}

export default ScrollToTop;
