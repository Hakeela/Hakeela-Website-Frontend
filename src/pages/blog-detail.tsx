import { Link } from 'react-router-dom';
import './styling/blog-detail.css';

export default function BlogDetail() {
  return (
    <div className="blog-detail-page">
      <div className="blog-detail-header">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>

      <div className="blog-detail-container">
        <article className="blog-detail-article">
          <h1 className="blog-detail-title">From Community Project to Global Organization</h1>

          <div className="blog-detail-meta">
            <div className="circle-background" style={{ width: '70px', height: '70px' }}>
              <img src="victor-removebg.png" style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
            </div>
            <span className="detail-author text-xs" style={{marginTop:'20px'}}>Victor Oyo <br/> Posted: July 05, 2025<br/> 3 min read</span>
          </div>

          <img src="/blog.png" alt="Blog article" className="blog-detail-image" />

          <div className="blog-detail-content">
            <p>
              Learn how Hakeela started, why it started and the impact the Edtech organization has been making 
              in regions across Africa, and why Hakeela is the literally the Future.
            </p>

            <h2>The Beginning</h2>
            <p>
              Every great organization has a story. Hakeela's journey began as a simple community project, 
              driven by a passion to democratize education and empower African youth with world-class tech skills. 
              What started in a small room has grown into a continental movement.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to build Africa's future tech talents through innovative, inclusive edtech solutions. 
              We believe that every individual, regardless of their background or circumstances, deserves access 
              to quality education and training in technology.
            </p>

            <h2>Impact Across Africa</h2>
            <p>
              Today, Hakeela operates across multiple regions in Africa, reaching thousands of students and professionals. 
              Our programs have helped individuals land jobs at top tech companies, start their own ventures, and 
              contribute meaningfully to their communities.
            </p>

            <h2>Looking Forward</h2>
            <p>
              As we continue to grow, our commitment remains unwavering: to be the catalyst for Africa's tech revolution. 
              We're not just building an organization; we're building the future of African innovation and excellence.
            </p>
          </div>

          <div className="blog-detail-footer">
            <Link to="/blog" className="back-button">← Back to All Articles</Link>
          </div>
        </article>
      </div>
    </div>
  );
}
