import React from "react";

const GalleryItem = (props) => {
  // Object destructuring
  const { id, server, secret, title } = props.data;
  return (
    // Creates an individual gallery item component with image content fetched from the App state
    <li>
      <img
        src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={`Title: ${title}`}
      />
    </li>
  );
};

export default GalleryItem;
