import { useLocation, Link } from "react-router-dom";

function Results() {
  const location = useLocation();
  const { score } = location.state;

  return (
    <div>
      <h1>Your Score: {score}</h1>
      <Link to="/">Try Again</Link>
    </div>
  );
}

export default Results;
