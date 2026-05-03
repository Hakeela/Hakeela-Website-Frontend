import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BlogCard.css';

interface BlogCardProps {
  imageUrl: string;
  author: string;
  timeToRead: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  author,
  timeToRead,
  title,
  description,
}) => {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt={title} className="blog-image" />

      <div className="blog-content">
        <div className="blog-meta">
          <span className="author">👤 {author}</span>
          <span className="read-time">{timeToRead}</span>
        </div>

        <h3 className="blog-title">{title}</h3>

        <p className="blog-description">{description}</p>

        <Link to="/blog-detail" className="read-more-button">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
