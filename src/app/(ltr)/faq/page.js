import Layout from "@/components/ltr/layout/layout";
import { cookies } from 'next/headers';
import Link from "next/link";
import { getFaqs } from "@/services/faqService";
import { getGlobalSettings } from "@/services/globalService";
import { getStrapiMedia } from "@/lib/strapi";
import BodyClassCleaner from "@/components/ltr/useEffect-hook/BodyClassCleaner";

export default async function FaqPage() {
    const cookieStore = await cookies();
    const locale = cookieStore.get('NEXT_LOCALE')?.value || 'bn';
    const translations = {
        en: {
            home: 'Home',
            faq: 'F.A.Q',
            title: 'Frequently Asked Questions',
            description: 'Find answers to your common questions.',
        },
        bn: {
            home: 'হোম',
            faq: 'সাধারণ জিজ্ঞাসা',
            title: 'সচরাচর জিজ্ঞাসিত প্রশ্ন',
            description: 'আপনার বিভিন্ন প্রশ্নের উত্তর এখানে পাবেন।',
        }
    };
    const t = translations[locale] || translations.bn;

    const [faqsResponse, globalSettingsResponse] = await Promise.all([
        getFaqs(locale),
        getGlobalSettings(locale),
    ]);
    // FAQ is now a single type; `data` is the page object with `items` and `faqHeaderImage`
    const faqData = faqsResponse?.data || {};
    const faqs = faqData?.items || [];
    const globalSettings = globalSettingsResponse?.data || null;
    const headerImage = getStrapiMedia(faqData?.faqHeaderImage, "/default.jpg");

    return (
        <Layout hideMiddleHeader={true} globalSettings={globalSettings}>
            {/* *** START PAGE MAIN CONTENT *** */}
            <main className="page_main_wrapper">
                <BodyClassCleaner remove={['home-nine', 'home-six', 'home-seven', 'home-two', 'boxed-layout', 'layout-rtl']} />
                {/* START PAGE HEADER */}
                <section 
                    className="inner-head bg-img"
                    style={{ 
                        backgroundImage: `url(${headerImage})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        position: 'relative'
                    }}
                >
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="entry-title text-white">{faqData?.title || t.title}</h2>
                                {t.description && <p className="description text-white mt-2">{t.description}</p>}
                                <div className="breadcrumb d-flex justify-content-start mt-2">
                                    <ul className="clearfix d-flex align-items-center mb-0 p-0" style={{ listStyle: 'none' }}>
                                        <li className="ib">
                                            <Link href="/">{t.home}</Link>
                                        </li>
                                        <li className="ib current-page ms-2 text-white">{t.faq}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END OF /. PAGE HEADER */}
                <section className="faq-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                {faqs.length === 0 ? (
                                    <div className="text-center py-5">
                                        <p>কোনো FAQ পাওয়া যায়নি।</p>
                                    </div>
                                ) : (
                                    <div className="panel-group" id="accordion" role="tablist">
                                        {faqs.map((faq, index) => {
                                            const collapseId = `collapse-faq-${index}`;
                                            const headingId = `heading-faq-${index}`;
                                            const isFirst = index === 0;
                                            if (!faq?.isActive && faq?.isActive !== undefined) return null;
                                            return (
                                                <div className="panel" key={index}>
                                                    <div className="panel-heading" role="tab" id={headingId}>
                                                        <h4 className="panel-title">
                                                            <a
                                                                role="button"
                                                                data-bs-toggle="collapse"
                                                                data-parent="#accordion"
                                                                href={`#${collapseId}`}
                                                                aria-controls={collapseId}
                                                                className={isFirst ? "" : "collapsed"}
                                                            >
                                                                {faq.question}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div
                                                        id={collapseId}
                                                        className={`panel-collapse collapse${isFirst ? " in" : ""}`}
                                                        role="tabpanel"
                                                        aria-labelledby={headingId}
                                                    >
                                                        <div className="panel-body">
                                                            <p>{faq.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                        

                    </div>
                </section>
            </main>
            {/* *** END OF /. PAGE MAIN CONTENT *** */}
        </Layout>
    );
}