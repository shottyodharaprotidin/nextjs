"use client"

import React from 'react';
import { useTheme } from 'next-themes';

const StyleSelector = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // or a placeholder/loader if preferred, but null avoids flicker better here
    }

    return (
        <div>
            {theme === "skin-dark" ? (
                <i 
                    className="fa-regular fa-sun fa-lg" 
                    onClick={() => setTheme("light")}
                    aria-label="Switch to light mode"
                    role="button"
                    style={{ cursor: 'pointer' }}
                />
            ) : (
                <i 
                    className="fa-solid fa-moon fa-lg" 
                    onClick={() => setTheme("skin-dark")}
                    aria-label="Switch to dark mode"
                    role="button"
                    style={{ cursor: 'pointer' }}
                />
            )}
        </div>
    );
};

export default StyleSelector;