'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getArticlesByCategorySlug } from '@/services/articleService';
import { getCategoryBySlug } from '@/services/categoryService';
import HeroSection from '@/components/homepage/HeroSection';
import { useLanguage } from '@/context/LanguageContext';

// Lazy-loaded components
const MainNewsSection = dynamic(() => import('@/components/homepage/LatestNews'));
const LatestArticles = dynamic(() => import('@/components/homepage/LatestArticles'));
const TechInnovation = dynamic(() => import('@/components/homepage/TechInnovation'));
const EditorsPick = dynamic(() => import('@/components/homepage/EditorsPick'));
const SidebarTabs = dynamic(() => import('@/components/homepage/Sidebar'));
const Tags = dynamic(() => import('@/components/widgets/Tags'));

export default function CategoryPage({ params }) {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  const locale = language === 'bn' ? 'bn' : 'en';

  const t = {
    bn: { subtitle: 'এই বিভাগের সর্বশেষ সংবাদ', categoryFallback: 'বিভাগ' },
    en: { subtitle: 'Latest articles in this category', categoryFallback: 'Category' }
  };
  const currentT = t[language] || t.bn;

  useEffect(() => {
    async function fetchData() {
      try {
        const decodedSlug = decodeURIComponent(params.slug);
        const categoryData = await getCategoryBySlug(decodedSlug, locale);
        if (!categoryData) {
          notFound();
        }
        setCategory(categoryData);
      } catch (error) {
        console.error('Error fetching category:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params.slug, locale]);

  if (loading) {
    return (
      <main className="page_main_wrapper">
        <div className="bg-img feature-section py-4" style={{ backgroundColor: '#1a1a1a' }}>
          <div className="container">
            <div className="text-center text-white">
              <div className="skeleton-loader mx-auto mb-2" style={{ width: '200px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
              <div className="skeleton-loader mx-auto" style={{ width: '300px', height: '20px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
            </div>
          </div>
        </div>
        
        <div className="hero-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                         <div className="row">
                            <div className="col-12 col-md-6 mb-3">
                                <div className="skeleton-loader w-100" style={{ height: '400px' }}></div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="col-md-6 mb-3">
                                             <div className="skeleton-loader w-100" style={{ height: '190px' }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
          <div className="row gx-lg-5">
            <div className="col-md-3 leftSidebar d-none d-xl-block">
                 <div className="skeleton-loader w-100 mb-3" style={{ height: '300px' }}></div>
            </div>
            <div className="col-xl-6 col-md-12">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="skeleton-loader w-100 mb-4" style={{ height: '150px' }}></div>
                 ))}
            </div>
            <div className="col-md-3 rightSidebar d-none d-md-block">
                 <div className="skeleton-loader w-100 mb-3" style={{ height: '300px' }}></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!category) {
    notFound();
  }

  const categoryData = category.attributes || category;
  const categoryName = categoryData.name || currentT.categoryFallback;

  return (
    <main className="page_main_wrapper">
      {/* Category Header Banner */}
      <div className="bg-img feature-section py-4" style={{ backgroundImage: "url('/assets/images/bg-shape.png')" }}>
        <div className="container">
          <div className="text-center text-white">
            <h1 className="display-4 mb-2">{categoryName}</h1>
            <p className="lead">{currentT.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Hero Section with Category Filter */}
      <HeroSection categorySlug={decodeURIComponent(params.slug)} key={`hero-${params.slug}`} />

      <div className="container">
        <div className="row gx-lg-5">
          {/* Sidebar */}
          <div className="col-md-3 leftSidebar d-none d-xl-block">
            <div className="sidebar-sticky">
              <SidebarTabs categorySlug={decodeURIComponent(params.slug)} />
              <Tags />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-xl-6 col-md-12">
            <MainNewsSection categorySlug={decodeURIComponent(params.slug)} key={params.slug} />
            <LatestArticles categorySlug={decodeURIComponent(params.slug)} key={`latest-${params.slug}`} />
          </div>

          {/* Right Sidebar */}
          <div className="col-md-3 rightSidebar d-none d-md-block">
            <div className="sidebar-sticky">
              <EditorsPick />
              <TechInnovation />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
