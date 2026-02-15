"use client";
import { useLanguage } from "@/context/LanguageContext";

const LiveTV = () => {
    const { language } = useLanguage();

    const t = {
        hi: {
            titleStrong: 'लाइव',
            titleRest: 'टीवी (Live TV)',
            live: 'लाइव'
        },
        en: {
            titleStrong: 'Live',
            titleRest: 'TV',
            live: 'LIVE'
        }
    };

    const currentT = t[language] || t.hi;

    return (
        <div className="panel_inner review-inner">
            <div className="panel_header">
                <h4>
                    <strong>{currentT.titleStrong}</strong> {currentT.titleRest}
                </h4>
            </div>
            <div className="panel_body">
                <div className="live-tv-container position-relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                    <iframe
                        className="position-absolute top-0 start-0 w-100 h-100"
                        src="https://www.youtube.com/embed/live_stream?channel=UCv_X8G99_Fj_U8Xz_e7KxKg" // Placeholder news channel
                        title="Live TV"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="text-center mt-2">
                    <span className="badge bg-danger">{currentT.live}</span>
                </div>
            </div>
        </div>
    );
};

export default LiveTV;
