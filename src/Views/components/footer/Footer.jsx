import "./style/index.scss";
import { Link } from "react-router-dom";
function Footer({ fixed }) {
  return (
    <footer className={fixed ? "fixed" : ""}>
      <div className="right-container">
        <p className="left m">©2023г. Все права зищищены.</p>
        <Link to="/#" className="right">
          <p className="m">Powered By Web-Team</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
