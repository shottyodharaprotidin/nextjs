'use client';
import React, { useState, useEffect } from 'react';

// Icons as inline SVGs to ensure visibility without external dependencies
const Icons = {
    ChevronDown: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
        </svg>
    ),
    ChevronLeft: ({ size = 24, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
        </svg>
    ),
    ChevronRight: ({ size = 24, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
        </svg>
    ),
    Search: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
    ),
    Eye: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
        </svg>
    ),
    Download: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
    ),
    Share: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
    ),
    Maximize: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
        </svg>
    ),
    Close: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
    ),
    News: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
        </svg>
    )
};

// Mock data for ePaper pages
const mockPages = [
    { id: 1, image: 'https://placehold.co/800x1100/EEE/31343C?text=Page+1', title: 'প্রথম পাতা' },
    { id: 2, image: 'https://placehold.co/800x1100/EEE/31343C?text=Page+2', title: 'দ্বিতীয় পাতা' },
    { id: 3, image: 'https://placehold.co/800x1100/EEE/31343C?text=Page+3', title: 'তৃতীয় পাতা' },
    { id: 4, image: 'https://placehold.co/800x1100/EEE/31343C?text=Page+4', title: 'চতুর্থ পাতা' },
    { id: 5, image: 'https://placehold.co/800x1100/EEE/31343C?text=Page+5', title: 'পঞ্চম পাতা' },
    { id: 6, image: 'https://placehold.co/800x1100/EEE/31343C?text=Page+6', title: 'ষষ্ঠ পাতা' },
    { id: 7, image: 'https://placehold.co/800x1100/EEE/31343C?text=Page+7', title: 'সপ্তম পাতা' },
    { id: 8, image: 'https://placehold.co/800x1100/EEE/31343C?text=Page+8', title: 'শেষ পাতা' },
];

const EPaperViewer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isYearOpen, setIsYearOpen] = useState(false);
    const [isMonthOpen, setIsMonthOpen] = useState(false);
    const [isDayOpen, setIsDayOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Date Logic
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
    const months = [
        'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
        'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    useEffect(() => {
        const handleKv = (e) => {
            if (e.key === 'Escape' && isModalOpen) setIsModalOpen(false);
            if (e.key === 'ArrowLeft') handlePageChange(currentPage - 1);
            if (e.key === 'ArrowRight') handlePageChange(currentPage + 1);
        };
        window.addEventListener('keydown', handleKv);
        return () => window.removeEventListener('keydown', handleKv);
    }, [isModalOpen, currentPage]);

    const handleDateChange = (type, value) => {
        const newDate = new Date(selectedDate);
        if (type === 'year') newDate.setFullYear(value);
        if (type === 'month') newDate.setMonth(value);
        if (type === 'day') newDate.setDate(value);
        setSelectedDate(newDate);
        setIsYearOpen(false);
        setIsMonthOpen(false);
        setIsDayOpen(false);
    };

    const handlePageChange = (index) => {
        if (index >= 0 && index < mockPages.length) {
            setCurrentPage(index);
        }
    };

    const formatDate = (dateObj) => {
        return dateObj.toLocaleDateString('bn', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="epaper-wrapper min-vh-100 d-flex flex-column">
            <style jsx global>{`
                .epaper-wrapper {
                    background-color: #f8f9fa;
                    transition: background-color 0.3s ease;
                }
                [data-theme='skin-dark'] .epaper-wrapper {
                    background-color: #121212;
                }
                .custom-dropdown-btn {
                    background: white;
                    border: 1px solid #dee2e6;
                    padding: 8px 16px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    min-width: 120px;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .custom-dropdown-btn:hover {
                    background: #f8f9fa;
                    border-color: #ced4da;
                }
                [data-theme='skin-dark'] .custom-dropdown-btn {
                    background: #2a2a2a;
                    border-color: #444;
                    color: #fff;
                }
                [data-theme='skin-dark'] .custom-dropdown-btn:hover {
                    background: #333;
                }
                .custom-dropdown-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    border: 1px solid #dee2e6;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    margin-top: 4px;
                    z-index: 1000;
                    max-height: 200px;
                    overflow-y: auto;
                }
                [data-theme='skin-dark'] .custom-dropdown-menu {
                    background: #2a2a2a;
                    border-color: #444;
                }
                .dropdown-item {
                    padding: 8px 16px;
                    cursor: pointer;
                    font-size: 14px;
                    transition: background 0.2s;
                }
                .dropdown-item:hover {
                    background: #f1f3f5;
                }
                [data-theme='skin-dark'] .dropdown-item {
                    color: #e0e0e0;
                }
                [data-theme='skin-dark'] .dropdown-item:hover {
                    background: #333;
                }
                .dropdown-item.active {
                    background: var(--bs-primary);
                    color: white;
                }
                .viewer-card {
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    overflow: hidden;
                }
                [data-theme='skin-dark'] .viewer-card {
                    background: #1e1e1e;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                }
                .page-thumbnail {
                    border: 2px solid transparent;
                    border-radius: 8px;
                    overflow: hidden;
                    transition: all 0.2s;
                }
                .page-thumbnail.active {
                    border-color: var(--bs-primary);
                    transform: scale(0.98);
                }
                .page-thumbnail:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                .nav-btn {
                    background: #212529 !important;
                    border: 1px solid rgba(255,255,255,0.1);
                    transition: all 0.2s ease;
                }
                .nav-btn:hover {
                    transform: scale(1.1);
                    background: #000 !important;
                }
                .nav-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }
                [data-theme='skin-dark'] .nav-btn {
                    background: #444 !important;
                    border-color: #555;
                }
                .epaper-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0,0,0,0.9);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(5px);
                }
                .modal-image-container {
                    max-width: 90%;
                    max-height: 90vh;
                    position: relative;
                }
                .modal-close-btn {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(255,255,255,0.1);
                    border: none;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .modal-close-btn:hover {
                    background: rgba(255,255,255,0.2);
                }
                /* Dark Theme Overrides */
                [data-theme='skin-dark'] .epaper-header {
                    background-color: #1e1e1e !important;
                    border-color: #333 !important;
                }
                [data-theme='skin-dark'] .epaper-title {
                    color: #fff !important;
                }
                [data-theme='skin-dark'] .epaper-subtitle {
                    color: #aaa !important;
                }
                [data-theme='skin-dark'] .page-thumbnail {
                    background-color: #2a2a2a !important;
                }
                [data-theme='skin-dark'] .epaper-page-title {
                    color: #fff !important;
                }
                [data-theme='skin-dark'] .epaper-page-badge {
                    background-color: #333 !important;
                    color: #fff !important;
                    border-color: #444 !important;
                }
                [data-theme='skin-dark'] .epaper-section-title {
                    color: #aaa !important;
                }
                [data-theme='skin-dark'] .epaper-toolbar {
                    background-color: #252525 !important;
                    border-color: #333 !important;
                }
                [data-theme='skin-dark'] .epaper-current-title {
                    color: #fff !important;
                }
                [data-theme='skin-dark'] .epaper-date {
                    color: #aaa !important;
                    border-color: #444 !important;
                }
                [data-theme='skin-dark'] .epaper-action-btn {
                    background-color: #2a2a2a !important;
                    border-color: #444 !important;
                    color: #fff !important;
                }
                [data-theme='skin-dark'] .epaper-action-btn:hover {
                    background-color: #333 !important;
                }
                [data-theme='skin-dark'] .epaper-info-card {
                    background-color: #1e1e1e !important;
                }
                [data-theme='skin-dark'] .epaper-info-header {
                    background-color: #252525 !important;
                    border-color: #333 !important;
                    color: #fff !important;
                }
                [data-theme='skin-dark'] .epaper-info-body {
                    background-color: #1e1e1e !important;
                }
                [data-theme='skin-dark'] .epaper-info-label {
                    color: #aaa !important;
                }
                [data-theme='skin-dark'] .epaper-info-value {
                    color: #fff !important;
                }
            `}</style>

            {/* Top Bar - Date Selection & Title */}
            <div className="epaper-header bg-white border-bottom sticky-top py-3 shadow-sm" style={{ zIndex: 1020 }}>
                <div className="container-fluid px-lg-5">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                            <div className="bg-primary text-white rounded p-2 d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                                <Icons.News />
                            </div>
                            <div>
                                <h5 className="epaper-title mb-0 fw-bold ls-1 text-uppercase">iNews ePaper</h5>
                                <small className="epaper-subtitle text-muted d-block" style={{ fontSize: '11px' }}>Digital Edition</small>
                            </div>
                        </div>

                        {/* Custom Date Selector */}
                        <div className="d-flex gap-2 position-relative">
                            <div className="position-relative">
                                <div className="custom-dropdown-btn" onClick={() => { setIsDayOpen(!isDayOpen); setIsMonthOpen(false); setIsYearOpen(false); }}>
                                    <span>{selectedDate.getDate()}</span>
                                    <Icons.ChevronDown />
                                </div>
                                {isDayOpen && (
                                    <div className="custom-dropdown-menu">
                                        {days.map(d => (
                                            <div key={d} className={`dropdown-item ${selectedDate.getDate() === d ? 'active' : ''}`} onClick={() => handleDateChange('day', d)}>
                                                {d}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="position-relative">
                                <div className="custom-dropdown-btn" onClick={() => { setIsMonthOpen(!isMonthOpen); setIsDayOpen(false); setIsYearOpen(false); }}>
                                    <span>{months[selectedDate.getMonth()]}</span>
                                    <Icons.ChevronDown />
                                </div>
                                {isMonthOpen && (
                                    <div className="custom-dropdown-menu">
                                        {months.map((m, i) => (
                                            <div key={m} className={`dropdown-item ${selectedDate.getMonth() === i ? 'active' : ''}`} onClick={() => handleDateChange('month', i)}>
                                                {m}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="position-relative">
                                <div className="custom-dropdown-btn" onClick={() => { setIsYearOpen(!isYearOpen); setIsDayOpen(false); setIsMonthOpen(false); }}>
                                    <span>{selectedDate.getFullYear()}</span>
                                    <Icons.ChevronDown />
                                </div>
                                {isYearOpen && (
                                    <div className="custom-dropdown-menu">
                                        {years.map(y => (
                                            <div key={y} className={`dropdown-item ${selectedDate.getFullYear() === y ? 'active' : ''}`} onClick={() => handleDateChange('year', y)}>
                                                {y}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            <button className="btn btn-primary d-flex align-items-center gap-2 px-3 rounded-3">
                                <Icons.Search />
                                <span className="d-none d-sm-inline">Find</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container-fluid px-lg-5 py-4 flex-grow-1">
                <div className="row g-4 h-100">
                    {/* Left Sidebar: Pages List */}
                    <div className="col-lg-2 order-2 order-lg-1">
                        <div className="d-flex flex-column gap-3 h-100">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6 className="epaper-section-title mb-0 fw-bold text-uppercase small ls-1 text-muted">Pages</h6>
                                <span className="badge bg-secondary rounded-pill">{mockPages.length}</span>
                            </div>
                            <div className="overflow-auto pe-2" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                                <div className="d-flex flex-column gap-3">
                                    {mockPages.map((page, index) => (
                                        <div key={page.id} className={`page-thumbnail cursor-pointer bg-white p-2 shadow-sm ${currentPage === index ? 'active' : ''}`} onClick={() => handlePageChange(index)}>
                                            <div className="position-relative mb-2">
                                                <img src={page.image} alt={page.title} className="img-fluid rounded" />
                                                <div className={`position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-10 rounded d-flex align-items-center justify-content-center transition-all ${currentPage === index ? 'opacity-100' : 'opacity-0 hover-opacity-100'}`}>
                                                    <Icons.Eye />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="epaper-page-title small fw-bold text-dark">{page.title}</span>
                                                <span className="epaper-page-badge badge bg-light text-dark border">{index + 1}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center: Main Viewer */}
                    <div className="col-lg-8 order-1 order-lg-2">
                        <div className="viewer-card h-100 d-flex flex-column">
                            {/* Toolbar */}
                            <div className="epaper-toolbar border-bottom p-3 d-flex justify-content-between align-items-center bg-light bg-opacity-50">
                                <div className="d-flex align-items-center gap-3">
                                    <h4 className="epaper-current-title mb-0 fw-bold text-dark">{mockPages[currentPage].title}</h4>
                                    <span className="epaper-date text-muted border-start ps-3 small">{formatDate(selectedDate)}</span>
                                </div>
                                <div className="d-flex gap-2">
                                    <button className="epaper-action-btn btn btn-sm btn-white border shadow-sm rounded-circle d-flex align-items-center justify-content-center" style={{width: 32, height: 32}} title="Download PDF">
                                        <Icons.Download />
                                    </button>
                                    <button className="epaper-action-btn btn btn-sm btn-white border shadow-sm rounded-circle d-flex align-items-center justify-content-center" style={{width: 32, height: 32}} title="Share">
                                        <Icons.Share />
                                    </button>
                                    <button className="epaper-action-btn btn btn-sm btn-white border shadow-sm rounded-circle d-flex align-items-center justify-content-center" style={{width: 32, height: 32}} title="Read Mode" onClick={openModal}>
                                        <Icons.Maximize />
                                    </button>
                                </div>
                            </div>
                            
                            {/* Image Area */}
                            <div className="flex-grow-1 bg-secondary bg-opacity-10 position-relative d-flex align-items-center justify-content-center p-4" style={{ minHeight: '600px' }}>
                                {/* Nav Buttons */}
                                <button className="btn btn-dark rounded-circle position-absolute start-0 ms-4 shadow-lg d-none d-md-flex align-items-center justify-content-center nav-btn" 
                                    style={{width: 48, height: 48, zIndex: 10}}
                                    disabled={currentPage === 0}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    <Icons.ChevronLeft size={20} color="white" />
                                </button>
                                <button className="btn btn-dark rounded-circle position-absolute end-0 me-4 shadow-lg d-none d-md-flex align-items-center justify-content-center nav-btn"
                                    style={{width: 48, height: 48, zIndex: 10}}
                                    disabled={currentPage === mockPages.length - 1}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    <Icons.ChevronRight size={20} color="white" />
                                </button>

                                {/* Clickable Image to Open Modal */}
                                <div className="position-relative cursor-pointer" onClick={openModal} title="Click to read details">
                                    <img 
                                        src={mockPages[currentPage].image} 
                                        alt={mockPages[currentPage].title} 
                                        className="img-fluid shadow-lg rounded"
                                        style={{ maxHeight: 'calc(100vh - 250px)', objectFit: 'contain', maxWidth: '100%', cursor: 'zoom-in' }}
                                    />
                                    <div className="position-absolute top-50 start-50 translate-middle bg-black bg-opacity-50 p-3 rounded-circle opacity-0 hover-opacity-100 transition-all text-white">
                                        <Icons.Maximize />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar: Edition Info Only */}
                    <div className="col-lg-2 order-3 d-none d-lg-block">
                        <div className="d-flex flex-column gap-4">
                            <div className="epaper-info-card card border-0 shadow-sm rounded-3">
                                <div className="epaper-info-header card-header bg-white py-3 border-bottom">
                                    <h6 className="mb-0 fw-bold small text-uppercase ls-1">Edition Info</h6>
                                </div>
                                <div className="epaper-info-body card-body">
                                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 small">
                                        <li className="d-flex justify-content-between">
                                            <span className="epaper-info-label text-muted">Editor:</span>
                                            <span className="epaper-info-value fw-bold">Nazrul Islam</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="epaper-info-label text-muted">Pages:</span>
                                            <span className="epaper-info-value fw-bold">12</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="epaper-info-label text-muted">Price:</span>
                                            <span className="epaper-info-value fw-bold">10.00 BDT</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Read Mode Modal */}
            {isModalOpen && (
                <div className="epaper-modal" onClick={(e) => e.target === e.currentTarget && closeModal()}>
                    <button className="modal-close-btn" onClick={closeModal}>
                        <Icons.Close />
                    </button>
                    
                    <button className="position-absolute start-0 ms-4 btn btn-link text-white opacity-75 hover-opacity-100" 
                        disabled={currentPage === 0}
                        onClick={() => handlePageChange(currentPage - 1)}
                        style={{ transform: 'scale(1.5)', zIndex: 10001 }}
                    >
                        <Icons.ChevronLeft size={32} color="white" />
                    </button>

                    <div className="modal-image-container animate__animated animate__zoomIn">
                        <img 
                            src={mockPages[currentPage].image} 
                            alt={mockPages[currentPage].title} 
                            className="img-fluid rounded shadow-lg"
                            style={{ maxHeight: '90vh', width: 'auto' }}
                        />
                        <div className="text-center mt-3 text-white">
                            <h5 className="mb-0">{mockPages[currentPage].title}</h5>
                            <small className="opacity-75">{formatDate(selectedDate)}</small>
                        </div>
                    </div>

                    <button className="position-absolute end-0 me-4 btn btn-link text-white opacity-75 hover-opacity-100" 
                        disabled={currentPage === mockPages.length - 1}
                        onClick={() => handlePageChange(currentPage + 1)}
                        style={{ transform: 'scale(1.5)', zIndex: 10001 }}
                    >
                         <Icons.ChevronRight size={32} color="white" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default EPaperViewer;
