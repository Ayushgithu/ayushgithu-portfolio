import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, ExternalLink } from "lucide-react";
import "./blog.css";
import blogPosts from "../blogPosts.json"; // Ensure this file exists in src/

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const withVotes = blogPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
    }));
    setPosts(withVotes);
  }, []);

  const filteredPosts = posts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.text.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  function vote(id, type) {
    const next = posts.map((p) => p.id === id ? { ...p, [type]: p[type] + 1 } : p);
    setPosts(next);
    localStorage.setItem("kd_blog_votes", JSON.stringify(
      Object.fromEntries(next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }]))
    ));
  }

  return (
    <motion.section className="blog-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="blog-title">📝 My Blog</h2>
      
      <div className="blog-controls">
        <input type="text" placeholder="Search posts..." className="blog-search" onChange={(e) => setSearch(e.target.value)} />
        <div className="category-filters">
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)} className={category === c ? "active" : ""}>{c}</button>
          ))}
        </div>
      </div>

      <div className="blog-grid">
        {filteredPosts.map((p, idx) => (
          <motion.div key={p.id} className="blog-post" layout>
            <h3 className="post-title">{p.title}</h3>
            <p className="post-text">
              {expandedId === p.id ? p.text : `${p.text.substring(0, 150)}...`}
            </p>
            <button className="toggle-btn" onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}>
              {expandedId === p.id ? "Read Less" : "Read More"}
            </button>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="post-link">
                <ExternalLink size={14} /> View Reference
              </a>
            )}
            <div className="vote-container">
              <button onClick={() => vote(p.id, "agree")} className="vote-btn-circle agree"><ThumbsUp size={20} /><span className="vote-count">{p.agree}</span></button>
              <button onClick={() => vote(p.id, "disagree")} className="vote-btn-circle disagree"><ThumbsDown size={20} /><span className="vote-count">{p.disagree}</span></button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}