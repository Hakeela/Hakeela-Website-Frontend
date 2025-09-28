export default function Portfolio() {
    return(
        <div>
            <div style={{display:"flex", gap:"10px", marginTop:"30px", marginBottom:"15px"}}>
                <img style={{height:"50px"}} src="Hakeela Logo Icon (blue) 6.png" alt="" />
                <img style={{height:"50px"}} src="hack51.png" alt="" />
            </div>

            <h1 style={{color:"rgba(0, 0, 184, 1)", marginBottom:"15px"}}>Learn and Build</h1>

            <div style={{fontSize:"12px",display:"flex",flexDirection:"column", gap:"15px"}}>
                <p>At Hakeela, we are committed to not only providing you with top-notch tech skills but also ensuring that you<br/>are fully prepared for your career journey.</p>
                <p>That's why we've partnered with <span style={{color:"rgba(0, 0, 184, 1)", fontWeight:"700"}}>Hack51</span>, a leading portfolio building platform, to help our learners build their<br/>skills and experiences.</p>
                <p style={{fontWeight:"700"}}>Start building your professional portfolio now</p>
            </div>

            <button style={{marginTop:"20px", backgroundColor:"rgba(0, 0, 184, 1)", color:"white", padding:"7px 20px", border:"none", borderRadius:"20px", fontSize:"12px"}}>Get Started</button>
        </div>
    )
}