import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getGlobalSettings } from "@/services/globalService";

const LiveTV = () => {
    const { language } = useLanguage();
    const [liveTvUrl, setLiveTvUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    const t = {
        bn: {
            titleStrong: 'লাইভ',
            titleRest: 'টিভি (Live TV)',
            live: 'সরাসরি'
        },
        en: {
            titleStrong: 'Live',
            titleRest: 'TV',
            live: 'LIVE'
        }
    };

    const currentT = t[language] || t.bn;
    const locale = language === 'bn' ? 'bn' : 'en';

    useEffect(() => {
        async function fetchLiveTV() {
            setLoading(true);
            setLiveTvUrl(null);
            try {
                const response = await getGlobalSettings(locale);
                if (response?.data?.liveTvUrl) {
                    setLiveTvUrl(response.data.liveTvUrl);
                }
            } catch (error) {
                console.error("Error fetching Live TV URL:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchLiveTV();
    }, [locale]);

    if (loading) {
        return <div className="p-3 bg-light rounded mb-4" style={{ height: '200px' }}>Loading Live TV...</div>;
    }

    if (!liveTvUrl) return null;

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
                        src={liveTvUrl}
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
