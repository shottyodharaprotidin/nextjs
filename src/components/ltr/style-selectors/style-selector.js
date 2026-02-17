"use client"

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
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
                <i className="fa-regular fa-sun fa-lg" onClick={() => setTheme("light")} />

            ) : (
                <i className="fa-solid fa-moon fa-lg" onClick={() => setTheme("skin-dark")}></i>
            )}
        </div>



    );
};

export default StyleSelector;