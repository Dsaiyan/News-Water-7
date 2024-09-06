import React from "react";

const NewsItem = (props) => {
  let { title, description, urlToImage, url, author, time } = props;
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={urlToImage}
        alt="..."
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title}
        </h1>
        <span className="badge bg-secondary">
          By {author ? author.slice(0,35) : "Unknown"}
        </span>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            <b>Published at </b>
            {new Date(time).toGMTString()}
          </small>
        </p>
        <button
          type="button"
          onClick={() => {
            window.open(url, "_blank", "noopener,noreferrer");
          }}
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
