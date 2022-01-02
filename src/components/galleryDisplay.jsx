import React from "react";
import GalleryItem from "./galleryItem";
import NotFound from "./notFound";

const GalleryDisplay = (props) => {
  // Utility function to capitalise the first letter of query search for presentation in DOM.
  const capitaliseQuery = (query) => {
    return query.charAt(0).toUpperCase() + query.slice(1);
  };

  // Object destructuring
  const { query } = props.match.params;

  return (
    <React.Fragment>
      {/* Dynamically insert search query name */}
      <h1>Gallery Results for "{capitaliseQuery(query)}"</h1>

      <div className="photo-container">
        <ul>
          {/* Conditional rendering. If the data is loading, generate a loading notification. Otherwise, populate the DOM with gallery items for each image in the dataset. */}
          {props.loading ? (
            <h1 className="notification">"Loading"</h1>
          ) : (
            props.data.photos.photo.map((p) => (
              <GalleryItem data={p} key={p.id} />
            ))
          )}

          {/* Conditional rendering. If the data is not loading AND the dataset is empty, render a Not Found component. */}
          {!props.loading && props.data.photos.photo.length === 0 && (
            <NotFound {...props} />
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default GalleryDisplay;
