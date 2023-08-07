import "./notFound.scss";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <div className="container">
        <h2>Error: 404 (Not Found Page)</h2>
        <span>Searching for something else & lost?</span>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
}
