import React from "react";

const NotFound = (props) => {
  return (
    <div className="notification">
      <h3>
        Unfortunately, there are no results for "{props.match.params.query}".
        You may have fallen asleep on your keyboard. Wake up!
      </h3>
    </div>
  );
};

export default NotFound;
