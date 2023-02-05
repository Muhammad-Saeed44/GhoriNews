import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    category: "general",
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 6,
    };
  }
  async componentDidMount() {
    let url11 = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=a7d2b8a73f42463ead3970ae5ffd1dde&pageSize=6`;
    let data = await fetch(url11);
    this.setState({ loading: true });
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ loading: false });
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  PrevButtonClicked = async () => {
    let url11 = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    } &apiKey=a7d2b8a73f42463ead3970ae5ffd1dde&pageSize=6&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url11);
    this.setState({ loading: true });
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ loading: false });
    this.setState({
      page: this.state.page - 1,
      totalResults: this.state.totalResults + 6,
      articles: parsedData.articles,
    });
  };
  NextButtonClicked = async () => {
    let url11 = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=a7d2b8a73f42463ead3970ae5ffd1dde&pageSize=6&page=${
      this.state.page + 1
    }  `;
    let data = await fetch(url11);
    this.setState({ loading: true });
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ loading: false });
    this.setState({
      page: this.state.page + 1,
      totalResults: this.state.totalResults - 6,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <>
        <div className="container my-4 ">
          <h1 className="text-center" style={{ marginTop: "90px" }}>
            GhoriNews! Read Daily News here for free.
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      date={element.publishedAt}
                      author={element.author}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className=" my-3 d-flex justify-content-between"
          style={{ margin: "50px" }}
        >
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark  "
            onClick={this.PrevButtonClicked}
          >
            &laquo; Previous
          </button>
          <button
            disabled={this.state.totalResults < 6}
            type="button"
            className="btn btn-dark "
            onClick={this.NextButtonClicked}
          >
            Next &raquo;
          </button>
        </div>
      </>
    );
  }
}
