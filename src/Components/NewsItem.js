import React from "react";

const NewsItem = (props) => {

  

    let { title, desc, imageUrl, url, date, author } = props;
    return (
      <div>
        <div className="card mx-1 my-1" >
          <img src={!imageUrl ? "https://picsum.photos/1000/" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span>{new Date(date).toGMTString()}</span>
            <br />
            <p className="badge rounded-pill text-bg-secondary">{!author ? "Sources" : author}</p>
            <p className="card-text">
              {desc}
            </p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Read more
            </a>

          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
