import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, newsUrl, imgUrl, date, author, source } =
      this.props;
    return (
      <>
        <div className="container my-4">
          <div
            className="card "
            style={{
              width: "18rem",
            }}
          >
            <img
              src={
                imgUrl == null
                  ? "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2020/07/breakingnews-live-blog-1568185450-1595123397-1595295947.jpg"
                  : imgUrl
              }
              className="card-img-top"
              style={{ width: "18rem", height: "250px" }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className=" badge rounded-pill bg-danger">
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>
            <div className="container my-3">
              <div className="card-body ">
                <h5 className="card-title">{title}....</h5>
                <p className="card-text">{description}....</p>
                <p className="card-text">
                  <small className="text-muted">
                    {new Date(date).toGMTString()}
                  </small>{" "}
                  <br></br>
                  <small className="text-muted">
                    By {author == null ? "UnKnown" : author}
                  </small>
                </p>
                <a
                  href={newsUrl}
                  target="_blank"
                  className="btn btn-sm btn-primary "
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
