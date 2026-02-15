"use client";
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";

const FacebookFeed = () => {
    const { language } = useLanguage();

    const t = {
        hi: {
            title: 'फेसबुक',
        },
        en: {
            title: 'Facebook',
        }
    };

    const currentT = t[language] || t.hi;

    // Default to a generic page if specific one is not available, 
    // but trying to match the site identity seen in other files.
    // Replace 'facebook' with the actual page name if known.
    const pageUrl = "https://www.facebook.com/shottyodharaprotidin"; 
    const encodedUrl = encodeURIComponent(pageUrl);

    return (
        <div className="panel_inner">
            <div className="panel_header">
                <h4><strong>{currentT.title}</strong></h4>
            </div>
            <div className="panel_body">
                <iframe 
                    src={`https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                    width="340" 
                    height="500" 
                    style={{border: 'none', overflow: 'hidden', width: '100%'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>
        </div>
    );
};

export default FacebookFeed;
