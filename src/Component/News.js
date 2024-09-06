import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  fetchNews = async()=> {
    this.props.setProgress(10) ;
    this.setState({loading : true}) ;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pagesize=${this.props.pageSize}&page=${this.state.page}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70) ;
    this.setState({
      articles : parsedData.articles ,
      totalResults : parsedData.totalResults,
      loading : false
    })
    this.props.setProgress(100)
  }

  fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pagesize=${this.props.pageSize}&page=${this.state.page+1}`;
    this.setState({ page : this.state.page+1})
    this.setState({loading : true}) ;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : this.state.articles.concat(parsedData.articles),
      totalResults : parsedData.totalResults,
      loading : false
    })
  }
  async componentDidMount(){
    this.fetchNews() ;
  }

  render() {
    return (
      <>
        <h1 className="text-3xl font-bold text-black text-center mx-2 my-20">
          Today's waves on Water7
        </h1>
        {this.state.loading && <Loading />}

        <InfiniteScroll
          dataLength={this.state.articles?.length || 0}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Loading />}
        >
          <div className="container my-1">
            <div className="row my-6">
              {this.state.articles && this.state.articles.length > 0 ? (
                this.state.articles.map((element) => (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={
                        element.title
                          ? element.title.slice(0, 60)
                          : "title was not provided"
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : "Please click on Read More button"
                      }
                      urlToImage={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                      }
                      url={element.url}
                      author={element.author}
                      time={element.publishedAt}
                    />
                  </div>
                ))
              ) : (
                <p>No articles available.</p>
              )}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container md-3">
            <div className="w-full border-t border-gray-300">
                <div className="mt-2 flex items-center justify-between md-2">
                    <div>
                        <p>
                        showing <strong>{page}</strong> of <strong>{totalPages} pages</strong> of total <strong>{totalResults}</strong> articles
                        </p>
                    </div>
                    <div className="space-x-2">
                        <button
                        type="button" 
                        disabled={page <= 1}
                        onClick={handlePrevPage}
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                        &larr; Previous
                        </button>
                        <button
                        type="button"
                        disabled={state.page >= totalPages }
                        onClick={handleNextPage}
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                        Next &rarr;
                        </button>
                    </div> 
                </div> 
                <div className="w-full border-t border-gray-300 md-2"></div>           
             </div>
          </div>         */}
      </>
    );
  }
}
export default News;
