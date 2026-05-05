
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
                    <a href="#" className="text-neonGreen hover:text-neonGreen/80" aria-label="Facebook">
                      <FacebookLogo size={20} weight="light" />
                    </a>
                    <a href="#" className="text-neonGreen hover:text-neonGreen/80" aria-label="X">
                      <XLogo size={20} weight="light" />
                    </a>
                    <a href="#" className="text-neonGreen hover:text-neonGreen/80" aria-label="LinkedIn">
                      <LinkedinLogo size={20} weight="light" />
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
