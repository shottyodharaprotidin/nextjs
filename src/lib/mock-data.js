export const mockCategories = [
  { id: 1, attributes: { name: "Technology", slug: "technology", isTrending: true, sortOrder: 1, articles: { data: [] } } },
  { id: 2, attributes: { name: "Business", slug: "business", isTrending: true, sortOrder: 2, articles: { data: [] } } },
  { id: 3, attributes: { name: "Sports", slug: "sports", isTrending: true, sortOrder: 3, articles: { data: [] } } },
  { id: 4, attributes: { name: "Entertainment", slug: "entertainment", isTrending: false, sortOrder: 4, articles: { data: [] } } },
  { id: 5, attributes: { name: "World", slug: "world", isTrending: false, sortOrder: 5, articles: { data: [] } } },
  { id: 6, attributes: { name: "Health", slug: "health", isTrending: false, sortOrder: 6, articles: { data: [] } } },
  { id: 7, attributes: { name: "Science", slug: "science", isTrending: true, sortOrder: 7, articles: { data: [] } } },
  { id: 8, attributes: { name: "Autos", slug: "autos", isTrending: false, sortOrder: 8, articles: { data: [] } } },
  { id: 9, attributes: { name: "Travel", slug: "travel", isTrending: true, sortOrder: 9, articles: { data: [] } } },
  { id: 10, attributes: { name: "Lifestyle", slug: "lifestyle", isTrending: false, sortOrder: 10, articles: { data: [] } } }
];

export const mockAuthors = [
  { id: 1, attributes: { name: "John Doe", email: "john@example.com", bio: "Senior Tech Journalist", picture: { data: { attributes: { url: "https://placehold.co/100x100?text=JD" } } } } },
  { id: 2, attributes: { name: "Jane Smith", email: "jane@example.com", bio: "Business Analyst", picture: { data: { attributes: { url: "https://placehold.co/100x100?text=JS" } } } } },
  { id: 3, attributes: { name: "Mike Ross", email: "mike@example.com", bio: "Sports Commentator", picture: { data: { attributes: { url: "https://placehold.co/100x100?text=MR" } } } } },
  { id: 4, attributes: { name: "Sarah Lee", email: "sarah@example.com", bio: "Lifestyle Editor", picture: { data: { attributes: { url: "https://placehold.co/100x100?text=SL" } } } } },
  { id: 5, attributes: { name: "David Kim", email: "david@example.com", bio: "Science Writer", picture: { data: { attributes: { url: "https://placehold.co/100x100?text=DK" } } } } }
];

export const mockTags = [
  { id: 1, attributes: { name: "AI", slug: "ai" } },
  { id: 2, attributes: { name: "Startup", slug: "startup" } },
  { id: 3, attributes: { name: "Crypto", slug: "crypto" } },
  { id: 4, attributes: { name: "Gadgets", slug: "gadgets" } },
  { id: 5, attributes: { name: "Football", slug: "football" } },
  { id: 6, attributes: { name: "Cricket", slug: "cricket" } },
  { id: 7, attributes: { name: "Climate", slug: "climate" } },
  { id: 8, attributes: { name: "Space", slug: "space" } },
  { id: 9, attributes: { name: "EVs", slug: "evs" } },
  { id: 10, attributes: { name: "Wellness", slug: "wellness" } },
  { id: 11, attributes: { name: "Politics", slug: "politics" } },
  { id: 12, attributes: { name: "Movies", slug: "movies" } }
];

export const mockArticles = [
  // FEATURED & TRENDING (Tech, Business)
  {
    id: 1,
    attributes: {
      title: "The Future of AI in 2026: What to Expect",
      slug: "future-of-ai-2026",
      content: "Artificial Intelligence is evolving rapidly...",
      excerpt: "AI is reshaping industries faster than ever before.",
      publishedAt: "2026-02-10T10:00:00Z",
      isFeatured: true,
      isTrending: true,
      isPopular: true,
      isEditorPick: true, // Editor Pick
      videoUrl: null,
      rating: 4.5,
      viewCount: 1500,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=AI+Future" } } },
      category: { data: mockCategories[0] },
      author: { data: mockAuthors[0] },
      tags: { data: [mockTags[0], mockTags[1]] }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Global Markets Rally as Tech Stocks Soar",
      slug: "global-markets-rally",
      content: "Stock markets showed strong gains today...",
      excerpt: "Investors are optimistic as global markets hit new highs.",
      publishedAt: "2026-02-09T14:30:00Z",
      isFeatured: true,
      isTrending: true,
      isPopular: true,
      videoUrl: "https://youtube.com/watch?v=example",
      rating: null,
      viewCount: 2300,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Markets" } } },
      category: { data: mockCategories[1] },
      author: { data: mockAuthors[1] },
      tags: { data: [mockTags[2]] }
    }
  },
  {
    id: 3,
    attributes: {
      title: "New Smartphone Includes Holographic Display",
      slug: "holographic-smartphone",
      content: "The latest flagship killer is here with hologram tech...",
      excerpt: "A detailed review of the new XPhone Pro with 3D display.",
      publishedAt: "2026-02-08T09:15:00Z",
      isFeatured: true,
      isTrending: false,
      isPopular: true,
      videoUrl: "https://youtube.com/watch?v=tech",
      rating: 4.8,
      viewCount: 5000,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Holo+Phone" } } },
      category: { data: mockCategories[0] },
      author: { data: mockAuthors[0] },
      tags: { data: [mockTags[3]] }
    }
  },
  
  // SPORTS
  {
    id: 4,
    attributes: {
      title: "Championship Finals: The Match of the Decade",
      slug: "championship-finals",
      content: "What a game! The finals exceeded all expectations...",
      excerpt: "Recap of the intense match last night.",
      publishedAt: "2026-02-07T20:00:00Z",
      isFeatured: true,
      isTrending: true,
      isPopular: true,
      videoUrl: "https://youtube.com/watch?v=sports",
      rating: null,
      viewCount: 12000,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Finals" } } },
      category: { data: mockCategories[2] },
      author: { data: mockAuthors[2] },
      tags: { data: [mockTags[4]] }
    }
  },
  {
    id: 5,
    attributes: {
      title: "Cricket World Cup Schedule Announced",
      slug: "cricket-world-cup",
      content: "The ICC has released the schedule...",
      excerpt: "Get ready for the biggest cricket event of the year.",
      publishedAt: "2026-02-06T11:00:00Z",
      isFeatured: false,
      isTrending: true, // Ticker
      isPopular: false,
      videoUrl: null,
      rating: null,
      viewCount: 4500,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Cricket" } } },
      category: { data: mockCategories[2] },
      author: { data: mockAuthors[2] },
      tags: { data: [mockTags[5]] }
    }
  },

  // ENTERTAINMENT
  {
    id: 6,
    attributes: {
      title: "Top 10 Movies to Watch This Summer",
      slug: "top-10-movies",
      content: "Cinema had a great year. Here are our picks...",
      excerpt: "From indie hits to blockbusters, these are must-watch films.",
      publishedAt: "2026-02-05T12:00:00Z",
      isFeatured: false,
      isTrending: false,
      isPopular: true, // Sidebar
      videoUrl: null,
      rating: 4.9,
      viewCount: 8900,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Movies" } } },
      category: { data: mockCategories[3] },
      author: { data: mockAuthors[3] },
      tags: { data: [mockTags[11]] }
    }
  },
  {
    id: 7,
    attributes: {
      title: "Award Season Review: Who Won Big?",
      slug: "award-season-review",
      content: "The red carpet was dazzling...",
      excerpt: "A look back at the winners and losers of the night.",
      publishedAt: "2026-02-04T18:00:00Z",
      isFeatured: true,
      isTrending: false,
      isPopular: true,
      videoUrl: "https://youtube.com/watch?v=awards",
      rating: 4.2,
      viewCount: 6700,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Red+Carpet" } } },
      category: { data: mockCategories[3] },
      author: { data: mockAuthors[3] },
      tags: { data: [mockTags[11]] }
    }
  },

  // SCIENCE & SPACE
  {
    id: 8,
    attributes: {
      title: "Mars Colony: Are We Ready?",
      slug: "mars-colony",
      content: "SpaceX announces new timeline...",
      excerpt: "Humanity's next giant leap might happen sooner than you think.",
      publishedAt: "2026-02-11T09:00:00Z",
      isFeatured: true,
      isTrending: true,
      isPopular: true,
      videoUrl: "https://youtube.com/watch?v=space",
      rating: 5.0,
      viewCount: 15000,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Mars" } } },
      category: { data: mockCategories[6] },
      author: { data: mockAuthors[4] },
      tags: { data: [mockTags[7]] }
    }
  },
  {
    id: 9,
    attributes: {
      title: "New Battery Tech Charges EV in 5 Mins",
      slug: "ev-charging-breakthrough",
      content: "Researchers have developed a solid-state battery...",
      excerpt: "This could end range anxiety forever.",
      publishedAt: "2026-02-01T08:00:00Z",
      isFeatured: false,
      isTrending: true,
      isPopular: true,
      videoUrl: null,
      rating: 4.7,
      viewCount: 3400,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Battery+Tech" } } },
      category: { data: mockCategories[7] },
      author: { data: mockAuthors[4] },
      tags: { data: [mockTags[0], mockTags[8]] }
    }
  },

  // WORLD & POLITICS
  {
    id: 10,
    attributes: {
      title: "Global Climate Summit Results",
      slug: "climate-summit-results",
      content: "World leaders gathered to discuss...",
      excerpt: "Key takeaways from the international climate conference.",
      publishedAt: "2026-02-10T11:00:00Z",
      isFeatured: false,
      isTrending: true,
      isPopular: false,
      videoUrl: null,
      rating: null,
      viewCount: 900,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Climate" } } },
      category: { data: mockCategories[4] },
      author: { data: mockAuthors[1] },
      tags: { data: [mockTags[6], mockTags[10]] }
    }
  },

  // LIFESTYLE & TRAVEL
  {
    id: 11,
    attributes: {
      title: "Hidden Gems of Europe: Travel Guide",
      slug: "hidden-gems-europe",
      content: "Travel off the beaten path...",
      excerpt: "Discover beautiful destinations without the crowds.",
      publishedAt: "2026-01-15T14:00:00Z",
      isFeatured: true,
      isTrending: false,
      isPopular: false,
      videoUrl: null,
      rating: 4.7,
      viewCount: 1200,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Europe" } } },
      category: { data: mockCategories[8] },
      author: { data: mockAuthors[3] },
      tags: { data: [] }
    }
  },
  {
    id: 12,
    attributes: {
      title: "10 Healthy Habits for a Better Life",
      slug: "healthy-habits",
      content: "Small changes make a big difference...",
      excerpt: "Improve your physical and mental well-being today.",
      publishedAt: "2026-01-20T10:00:00Z",
      isFeatured: false,
      isTrending: false,
      isPopular: true,
      videoUrl: null,
      rating: null,
      viewCount: 2200,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Healthy" } } },
      category: { data: mockCategories[9] },
      author: { data: mockAuthors[3] },
      tags: { data: [mockTags[9]] }
    }
  },
  
  // FILLER ARTICLES (For Pagination/Grid)
  {
    id: 13,
    attributes: {
      title: "Why Remote Work is Here to Stay",
      slug: "remote-work-trends",
      excerpt: "Companies are adapting to the new normal.",
      publishedAt: "2026-01-25T09:00:00Z",
      isFeatured: false, isTrending: false, isPopular: false,
      viewCount: 800, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Remote+Work" } } },
      category: { data: mockCategories[1] },
      author: { data: mockAuthors[1] },
      tags: { data: [mockTags[1]] }
    }
  },
  {
    id: 14,
    attributes: {
      title: "Digital Nomad Visa: Best Countries",
      slug: "digital-nomad-visa",
      excerpt: "Work from paradise with these top visa options.",
      publishedAt: "2026-01-24T09:00:00Z",
      isFeatured: false, isTrending: true, isPopular: true,
      viewCount: 3100, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Digital+Nomad" } } },
      category: { data: mockCategories[8] },
      author: { data: mockAuthors[3] },
      tags: { data: [] }
    }
  },
  {
    id: 15,
    attributes: {
      title: "Quantum Computing Explained",
      slug: "quantum-computing",
      excerpt: "Understanding the next revolution in computing.",
      publishedAt: "2026-01-23T09:00:00Z",
      isFeatured: true, isTrending: false, isPopular: false,
      viewCount: 500, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Quantum" } } },
      category: { data: mockCategories[0] },
      author: { data: mockAuthors[4] },
      tags: { data: [mockTags[0], mockTags[7]] }
    }
  },
  {
    id: 16,
    attributes: {
      title: "Sustainable Fashion Trends",
      slug: "sustainable-fashion",
      excerpt: "How fashion is going green in 2026.",
      publishedAt: "2026-01-22T09:00:00Z",
      isFeatured: false, isTrending: false, isPopular: false,
      viewCount: 600, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Fashion" } } },
      category: { data: mockCategories[9] },
      author: { data: mockAuthors[3] },
      tags: { data: [mockTags[9]] }
    }
  },
  {
    id: 17,
    attributes: {
      title: "The Rise of E-Sports",
      slug: "esports-rise",
      excerpt: "Competitive gaming is now a billion-dollar industry.",
      publishedAt: "2026-01-21T09:00:00Z",
      isFeatured: false, isTrending: true, isPopular: true,
      viewCount: 5600, rating: null, videoUrl: "https://youtube.com/watch?v=gaming",
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Gaming" } } },
      category: { data: mockCategories[3] },
      author: { data: mockAuthors[2] },
      tags: { data: [mockTags[3]] }
    }
  },
  {
    id: 18,
    attributes: {
      title: "Mental Health in the Digital Age",
      slug: "mental-health-digital",
      excerpt: "Coping mechanisms for a hyper-connected world.",
      publishedAt: "2026-01-19T09:00:00Z",
      isFeatured: false, isTrending: false, isPopular: true,
      viewCount: 4200, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Mental+Health" } } },
      category: { data: mockCategories[5] },
      author: { data: mockAuthors[3] },
      tags: { data: [mockTags[9]] }
    }
  },
  {
    id: 19,
    attributes: {
      title: "Best Coding Bootcamps 2026",
      slug: "coding-bootcamps",
      excerpt: "Launch your tech career with these top programs.",
      publishedAt: "2026-01-18T09:00:00Z",
      isFeatured: false, isTrending: false, isPopular: false,
      viewCount: 900, rating: 4.0, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Coding" } } },
      category: { data: mockCategories[0] },
      author: { data: mockAuthors[0] },
      tags: { data: [mockTags[0], mockTags[1]] }
    }
  },
  {
    id: 20,
    attributes: {
      title: "Meditation for Beginners",
      slug: "meditation-101",
      excerpt: "Start your mindfulness journey today.",
      publishedAt: "2026-01-17T09:00:00Z",
      isFeatured: false, isTrending: false, isPopular: false,
      viewCount: 300, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Meditate" } } },
      category: { data: mockCategories[9] },
      author: { data: mockAuthors[3] },
      tags: { data: [mockTags[9]] }
    }
  },
  {
    id: 21,
    attributes: {
      title: "Urban Farming: Grow Food Anywhere",
      slug: "urban-farming",
      excerpt: "How to start a garden in your apartment.",
      publishedAt: "2026-01-16T09:00:00Z",
      isFeatured: false, isTrending: true, isPopular: false,
      viewCount: 1100, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Farming" } } },
      category: { data: mockCategories[9] },
      author: { data: mockAuthors[4] },
      tags: { data: [mockTags[6]] }
    }
  },
  {
    id: 22,
    attributes: {
      title: "Blockchain Beyond Crypto",
      slug: "blockchain-utility",
      excerpt: "Real-world applications of blockchain technology.",
      publishedAt: "2026-01-14T09:00:00Z",
      isFeatured: false, isTrending: false, isPopular: false,
      viewCount: 750, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Blockchain" } } },
      category: { data: mockCategories[0] },
      author: { data: mockAuthors[0] },
      tags: { data: [mockTags[2]] }
    }
  },
  {
    id: 23,
    attributes: {
      title: "Top 5 luxury Cars of 2026",
      slug: "luxury-cars-2026",
      excerpt: "Driving in style: The best luxury vehicles reviewed.",
      publishedAt: "2026-01-13T09:00:00Z",
      isFeatured: true, isTrending: false, isPopular: true,
      viewCount: 6000, rating: 4.8, videoUrl: "https://youtube.com/watch?v=cars",
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Luxury+Cars" } } },
      category: { data: mockCategories[7] },
      author: { data: mockAuthors[1] },
      tags: { data: [mockTags[8]] }
    }
  },
  {
    id: 24,
    attributes: {
      title: "NASA's New telescope Discovers Planet",
      slug: "new-planet-discovery",
      excerpt: "Exploring the new habitable zone candidate.",
      publishedAt: "2026-01-12T09:00:00Z",
      isFeatured: true, isTrending: true, isPopular: true,
      viewCount: 9000, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Space+Telescope" } } },
      category: { data: mockCategories[6] },
      author: { data: mockAuthors[4] },
      tags: { data: [mockTags[7]] }
    }
  },
  {
    id: 25,
    attributes: {
      title: "Minimalism: Less is More",
      slug: "minimalism-guide",
      excerpt: "Declutter your home and your mind.",
      publishedAt: "2026-01-11T09:00:00Z",
      isFeatured: false, isTrending: false, isPopular: false,
      viewCount: 400, rating: null, videoUrl: null,
      cover: { data: { attributes: { url: "https://placehold.co/800x600/png?text=Minimalism" } } },
      category: { data: mockCategories[9] },
      author: { data: mockAuthors[3] },
      tags: { data: [mockTags[9]] }
    }
  }
];
