import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <span>Questions? Contact us.</span>
        <div className="footerLinks">
          <div className="footerItem">
            <span>FAQ</span>
            <span>Investor Relations</span>
            <span>Privacy</span>
            <span>Speed Test</span>
          </div>
          <div className="footerItem">
            <span>Help Centre</span>
            <span>Jobs</span>
            <span>Cookie Preferences</span>
            <span>Legal Notices</span>
          </div>
          <div className="footerItem">
            <span>Account</span>
            <span>Ways to Watch</span>
            <span>Corporate Information</span>
            <span>Only on Netflix</span>
          </div>
          <div className="footerItem">
            <span>Media Centre</span>
            <span>Terms of Use</span>
            <span>Contact Us</span>
          </div>
        </div>
        <select>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
    </footer>
  );
}
