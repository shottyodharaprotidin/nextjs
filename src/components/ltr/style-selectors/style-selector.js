"use client"

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/app/theme-providers';
const StyleSelector = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI

    useEffect(() => {
        setMounted(true)
    }, [])
 

    if (!mounted) {
        return null
    }

    return (
        <div>

            {theme === "skin-dark" ? (
                <i className="fa-regular fa-sun fa-lg theme-icon" onClick={() => setTheme("light")} style={{ cursor: 'pointer' }} title="Switch to Light Mode" />

            ) : (
                <i className="fa-solid fa-moon fa-lg theme-icon" onClick={() => setTheme("skin-dark")} style={{ cursor: 'pointer' }} title="Switch to Dark Mode"></i>
            )}
        </div>



    );
};

export default StyleSelector;