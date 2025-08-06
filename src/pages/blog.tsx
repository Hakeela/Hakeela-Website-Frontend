import { useState } from 'react'
import './styling/blog.css'
import BlogCard from '../components/BlogCard'

export default function Blog() {

    const [activeTab, setActiveTab] = useState<'blog' | 'events'>('blog')

    return(
        <div className='blogpage'>
            <div className='subscribe'>
                <h2>"Building Africa's future tech talents and<br/>
                Inclusive edtech solutions</h2>
                <p>Subscribe to get updates on our blog and events</p>

                <div className='form'>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Enter Email" className="email-input" />
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="tabs-container">
                <div className="tabs-header">
                    <div className="tabs-buttons">
                        <button
                            className={`tab-button ${activeTab === 'blog' ? 'active' : ''}`}
                            onClick={() => setActiveTab('blog')}
                        >
                            Blog
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'events' ? 'active' : ''}`}
                            onClick={() => setActiveTab('events')}
                        >
                            Events
                        </button>
                    </div>

                    <div className="tabs-dropdown">
                        <select>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                </div>

                <div className="tabs-content">
                    {activeTab === 'blog' &&
                        <div style={{ padding: 0 }}>
                            <div className='topblog'>
                                <BlogCard
                                imageUrl="/blog.png"
                                author="Victor Oyo"
                                timeToRead="3 min"
                                title="From Community Project to Global Organization"
                                description="Learn how Hakeela started, why it started and the 
                                                impact the Edtech organization has been making 
                                                in regions across Africa, and why Hakeela is the 
                                                literally the Future."
                            />
                            <BlogCard
                                imageUrl="/blog.png"
                                author="Victor Oyo"
                                timeToRead="3 min"
                                title="From Community Project to Global Organization"
                                description="Learn how Hakeela started, why it started and the 
                                                impact the Edtech organization has been making 
                                                in regions across Africa, and why Hakeela is the 
                                                literally the Future."
                            />
                            <BlogCard
                                imageUrl="/blog.png"
                                author="Victor Oyo"
                                timeToRead="3 min"
                                title="From Community Project to Global Organization"
                                description="Learn how Hakeela started, why it started and the 
                                                impact the Edtech organization has been making 
                                                in regions across Africa, and why Hakeela is the 
                                                literally the Future."
                            />
                            </div>

                            <br/>

                            <div className='bottomblog'>
                                <BlogCard
                                imageUrl="/blog.png"
                                author="Victor Oyo"
                                timeToRead="3 min"
                                title="From Community Project to Global Organization"
                                description="Learn how Hakeela started, why it started and the 
                                                impact the Edtech organization has been making 
                                                in regions across Africa, and why Hakeela is the 
                                                literally the Future."
                            />
                            <BlogCard
                                imageUrl="/blog.png"
                                author="Victor Oyo"
                                timeToRead="3 min"
                                title="From Community Project to Global Organization"
                                description="Learn how Hakeela started, why it started and the 
                                                impact the Edtech organization has been making 
                                                in regions across Africa, and why Hakeela is the 
                                                literally the Future."
                            />
                            <BlogCard
                                imageUrl="/blog.png"
                                author="Victor Oyo"
                                timeToRead="3 min"
                                title="From Community Project to Global Organization"
                                description="Learn how Hakeela started, why it started and the 
                                                impact the Edtech organization has been making 
                                                in regions across Africa, and why Hakeela is the 
                                                literally the Future."
                            />
                            </div>
                        </div>
                     }
                    {activeTab === 'events' && <p>This is Events content.</p>}
                </div>
            </div>
        </div>
    )
}