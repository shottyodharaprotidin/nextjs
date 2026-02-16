'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/strapi";
import { getLatestArticles } from "@/services/articleService";
import { getCategories } from "@/services/categoryService";
import ScrollToTopUI from '../common/ScrollToTop';

import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const t = {
    bn: {
      placeholder: 'আপনার ইমেল ঠিকানা লিখুন',
      subscribe: 'সাবস্ক্রাইব',
      privacyText: 'সাবস্ক্রাইব করার মাধ্যমে আপনি আমাদের',
      privacyLink: 'গোপনীয়তা নীতিতে',
      agree: 'সম্মত হন',
      categories: 'বিষয়শ্রেণী',
      usefulLinks: 'প্রয়োজনীয় লিংক',
      privacyPolicy: 'গোপনীয়তা নীতি',
      faq: 'সাধারণ জিজ্ঞাসা',
      epaper: 'ই-পেপার',
      copyright: 'কপিরাইট @ ২০২৬ সত্যধারা প্রতিদিন'
    },
    en: {
      placeholder: 'Enter your email address',
      subscribe: 'Subscribe',
      privacyText: 'By subscribing you agree to our',
      privacyLink: 'Privacy Policy',
      agree: '',
      categories: 'Categories',
      usefulLinks: 'Useful Links',
      privacyPolicy: 'Privacy Policy',
      faq: 'FAQ',
      epaper: 'E-Paper',
      copyright: 'Copyright @ 2026 Shottyodhara Protidin'
    }
  };

  const currentT = t[language] || t.bn;
  const locale = language === 'bn' ? 'bn' : 'en';


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [recentRes, categoriesRes] = await Promise.all([
          getLatestArticles(1, 3, locale),
          getCategories(locale)
        ]);
        setRecentPosts(recentRes?.data || []);
        setCategories(categoriesRes?.data || []);
      } catch (error) {
        console.error("Failed to fetch footer data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [language]);

  return (
    <>
       <ScrollToTopUI/>
      {/* *** START FOOTER *** */}
      <footer
        className="main-footer"
      >
        <div className="container position-relative z-1">
          <div className="g-3 row">
            <div className="col-md-6">
              <img
                src="/logo-dark.png"
                alt="footer logo"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              {/* Form */}
              <form className="row g-2 align-items-center justify-content-md-end">
                <div className="col-12 col-lg-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={currentT.placeholder}
                  />
                </div>
                <div className="col-12 col-lg-auto">
                  <button type="submit" className="btn btn-news m-0">
                    {currentT.subscribe}
                  </button>
                </div>
                <div className="form-text mt-2 text-white text-md-end w-100">
                  {currentT.privacyText}{" "}
                  <Link href={`/${language}/privacy-policy`} className="text-decoration-underline text-primary">
                    {currentT.privacyLink}
                  </Link>{" "}
                  {currentT.agree}
                </div>
              </form>
            </div>
          </div>
          <hr className="mt-5 mb-4" />

            {/* START FOOTER BOX (Category & Info) */}
            <div className="col-sm-12 footer-box py-4">
              <div className="row">
                <div className="col-md-9 mb-4 mb-md-0">
                  <h5 className="wiget-title">{currentT.categories}</h5>
                  <ul className="list-inline m-0 menu-services">
                    {categories.map((category) => (
                      <li key={category.id} className="list-inline-item me-3">
                        <Link href={`/${language}/category/${category.slug}`}>{category.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5 className="wiget-title">{currentT.usefulLinks}</h5>
                  <ul className="list-inline m-0 menu-services">
                    <li className="list-inline-item me-3 d-block d-md-inline-block">
                      <Link href={`/${language}/privacy-policy`}>{currentT.privacyPolicy}</Link>
                    </li>
                    <li className="list-inline-item me-3 d-block d-md-inline-block">
                      <Link href={`/${language}/faq`}>{currentT.faq}</Link>
                    </li>
                    <li className="list-inline-item me-3 d-block d-md-inline-block">
                      <Link href={`/${language}/epaper`}>{currentT.epaper}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* END OF /. FOOTER BOX (Category & Info) */}
          </div>


      </footer>
      {/* *** END OF /. FOOTER *** */}

      {/* *** START SUB FOOTER *** */}
      <div className="sub-footer">
        <div className="container">
          <div className="align-items-center g-1 g-sm-3 row">
            <div className="col text-center">
              <div className="copy">{currentT.copyright}</div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Footer;