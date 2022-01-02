import React from "react";

const WelcomePage = () => {
  // A simply friendly welcome message on load!
  return (
    <div className="notification">
      <h1>Hello and welcome!</h1>
      <p>
        Please begin by either entering a query into the search bar, selecting
        one of the amazing pre-chosen image categories, or navigate using the
        url at the top of the screen.
      </p>
    </div>
  );
};

export default WelcomePage;
