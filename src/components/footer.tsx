import "./styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footertop">
        {/* Logo & Social */}
        <div className="footersection">
          <img src="/Hakeela Logo Icon (white) 1.png" alt="Logo" className="footerlogo" />
          <p>The Future of Tech Inclusion</p>
          <div className="footersocials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footersection">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Hakeela Margin Internship</a></li>
            <li><a href="#">Special Needs and Tech</a></li>
            <li><a href="#">Hakeela Fund</a></li>
            <li><a href="#">HDx Consulting</a></li>
            <li><a href="#">Hakeela Tech Hub</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footersection">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Donate</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footersection">
          <h4>Contact</h4>
          <p>+2347040247816</p>
          <p>+2349019006751</p>
          <p>hello.wgtdafrica@gmail.com</p>
        </div>
      </div>

      <div className="footerbottom">
        Hakeela – The Future of Tech Inclusion. Established since 2019
      </div>
    </footer>
  );
}
