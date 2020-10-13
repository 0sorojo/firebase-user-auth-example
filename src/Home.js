import React from "react";

const Home = ({ handleLogOut }) => {
  return (
    <section className="home">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogOut}>Log Out</button>
      </nav>
    </section>
  );
};

export default Home;
