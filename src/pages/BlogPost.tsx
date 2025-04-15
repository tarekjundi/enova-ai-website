
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // Find the blog post by ID
    const blogPost = blogPosts.find(post => post.id === Number(id));
    if (blogPost) {
      setPost(blogPost);
      window.scrollTo(0, 0);
    } else {
      navigate("/blog");
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-darkTeal text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-darkTeal text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button 
              variant="ghost" 
              className="text-neonGreen mb-6 hover:bg-darkTeal/50"
              onClick={() => navigate("/blog")}
            >
              ← Back to Blog
            </Button>
            
            <div className="mb-4">
              <span className="inline-block bg-neonGreen text-darkTeal px-3 py-1 rounded-full text-sm font-medium mr-2">
                {post.category}
              </span>
              <span className="text-gray-400">{post.date} • {post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="w-full h-64 md:h-80 bg-darkTeal/80 rounded-xl overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-white prose-headings:text-neonGreen prose-a:text-neonGreen"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="border-t border-neonGreen/20 mt-12 pt-8">
              <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                <div className="mb-4 sm:mb-0">
                  <span className="text-gray-400">Share this article:</span>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-neonGreen hover:text-neonGreen/80">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-neonGreen hover:text-neonGreen/80">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-neonGreen hover:text-neonGreen/80">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
                <Button 
                  className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;
