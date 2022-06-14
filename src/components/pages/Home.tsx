import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>This is Home Page</p>
      <Link to="/about">Go to the about page</Link> <br />
      <button onClick={() => navigate("/about/123")}>
        Go to about page with number
      </button>
    </div>
  );
};

export default Home;
