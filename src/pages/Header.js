import { Link } from "react-router-dom";
  
function Header() {
  return (
    <div>
      <h1>Health Program</h1>
      <nav>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="admindashboard">Admin Dashboard</Link> |{" "}
        <Link to="analytics">Analytics</Link>
      </nav>
    </div>
  );
}

export default Header;