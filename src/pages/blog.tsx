import './styling/blog.css'

export default function Blog() {
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
        </div>
    )
}