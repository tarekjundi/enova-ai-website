
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "5 Ways Automation Is Transforming the Manufacturing Industry",
    excerpt: "Discover how intelligent automation is revolutionizing manufacturing processes and increasing productivity.",
    category: "Industry Insights",
    date: "April 10, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "The Future of Work: How AI and Automation Will Change Jobs",
    excerpt: "Explore how automation technologies are reshaping the workforce and creating new opportunities.",
    category: "Future of Work",
    date: "April 5, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Automation ROI: Calculating the Real Value for Your Business",
    excerpt: "Learn how to measure the return on investment for your automation initiatives and maximize value.",
    category: "Business Strategy",
    date: "March 28, 2025",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Building a Culture of Innovation: Embracing Automation",
    excerpt: "Tips for creating an organizational culture that embraces automation and continuous improvement.",
    category: "Organizational Culture",
    date: "March 22, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Customer Success Story: How Company X Saved $2M with Automation",
    excerpt: "A case study on how one of our clients transformed their operations with our automation platform.",
    category: "Case Study",
    date: "March 15, 2025",
    readTime: "10 min read",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Getting Started with Automation: A Beginner's Guide",
    excerpt: "Everything you need to know to begin your automation journey and avoid common pitfalls.",
    category: "Tutorials",
    date: "March 8, 2025",
    readTime: "9 min read",
    image: "/placeholder.svg"
  }
];

// Category filters
const categories = [
  "All",
  "Industry Insights",
  "Future of Work",
  "Business Strategy",
  "Organizational Culture",
  "Case Study",
  "Tutorials"
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <div className="min-h-screen bg-darkTeal text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AutomateX <span className="text-neonGreen">Blog</span></h1>
          <p className="text-xl text-gray-300 mb-8">
            Insights, tutorials, and industry news about automation and AI.
          </p>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-6 bg-darkTeal/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category 
                  ? "bg-neonGreen text-darkTeal hover:bg-neonGreen/90" 
                  : "border-neonGreen/40 text-neonGreen hover:bg-neonGreen/10"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Card key={post.id} className="bg-darkTeal/50 border-neonGreen/20 text-white overflow-hidden hover:border-neonGreen/40 transition-colors duration-300">
                  <div className="h-48 bg-darkTeal/80 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute top-4 left-4 bg-neonGreen text-darkTeal px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-neonGreen transition-colors duration-300">
                      <a href="#" className="block">{post.title}</a>
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="link" className="text-neonGreen p-0 hover:text-neonGreen/80">
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl">No posts found in this category.</p>
              </div>
            )}
            
            <div className="text-center mt-12">
              <Button className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90">
                Load More Articles
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-b from-darkTeal/80 to-darkTeal">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-300 mb-8">
                Get the latest automation insights and industry news delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen w-full sm:max-w-md"
                />
                <Button className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
