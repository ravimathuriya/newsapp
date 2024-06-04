import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props = {
  countary: "in",
  pagesize: 6,
  category: "general",
}) => {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)



  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };



  const fetchMoreData = async () => {
    props.setprogress(10)
    setloading(true)

    const api = `https://newsapi.org/v2/top-headlines?country=${props.countary}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pagesize}`;
    setpage(page + 1)
    props.setprogress(30)
    let data = await fetch(api);
    let parsedData = await data.json();
    props.setprogress(70)
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setprogress(100)
  };

  // async updatenews() {
  //   const api = `https://newsapi.org/v2/top-headlines?country=${this.props.countary}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(api);
  //   let parsedData = await data.json();

  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });

  // }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - DailyNews`;
    fetchMoreData()
    // eslint-disable-next-line
  }, []);

  // onclickprev = async () => {

  //   this.setState({
  //     page: this.state.page - 1
  //   });

  //   this.updatenews();
  // };

  // onclicknext = async () => {
  //   this.setState({
  //     page: this.state.page + 1
  //   });

  //   this.updatenews();
  // };


  return (
    <>
      <h3 className="mx-3" style={{ textAlign: "center", marginTop: "72px" }}>
        DailyNews - Top {capitalizeFirstLetter(props.category)}{" "}
        Headlines
        {/* {this.state.loading && <Spinner />} */}
      </h3>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row" style={{ justifyContent: "space-around" }}>
            {
              articles.map((element) => {
                return (
                  <div className="col-md-3 mx-1 my-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      date={element.publishedAt}
                      author={element.author}
                      desc={element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between my-2 mx-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.onclickprev}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.onclicknext}
          >
            Next
          </button>
        </div> */}
    </>
  );

}

// News.defaultProps = {
//   countary: "in",
//   pagesize: 6,
//   category: "general",
// };

News.propTypes = {
  countary: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
