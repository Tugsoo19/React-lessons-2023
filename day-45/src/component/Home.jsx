import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <nav>
        <Link to="/login" className="active">
          Login
        </Link>
        <Link to="/signup">Register</Link>
        {/* <Link to='/accordion'>Accordion</Link> */}
      </nav>
    </div>
  );
}
