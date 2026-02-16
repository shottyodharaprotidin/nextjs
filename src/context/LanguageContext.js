"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { translateNumber as translateNumberUtils } from '@/lib/language';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLang }) => {
    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();
    
    // Default to 'bn' if params.lang is missing (e.g. initial render)
    const [language, setLanguage] = useState(initialLang || 'bn');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (params?.lang) {
            setLanguage(params.lang);
        }
        setIsLoaded(true);
    }, [params?.lang]);

    const toggleLanguage = () => {
        const newLang = language === 'bn' ? 'en' : 'bn';
        setLanguage(newLang);
        
        // Construct new path
        if (!pathname) return;
        const newPath = pathname.replace(`/${language}`, `/${newLang}`);
        router.push(newPath);
    };

    const translateNumber = (num) => {
        return translateNumberUtils(num, language);
    };

    const value = {
        language,
        toggleLanguage,
        translateNumber,
        isLoaded,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
