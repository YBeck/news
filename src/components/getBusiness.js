import React, { Component } from "react";
import News from "./news";

class GetBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      recentArticles: [],
      error: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=feac0e08fbbe4e5597b10a31254e15b9`;
    fetch(url)
      .then(response => response.json())
      .catch(() => this.setState({ error: true }))
      .then(headlines =>
        this.setState({
          headlines: headlines ? headlines.articles : []
        })
      );

    let url2 = `https://newsapi.org/v2/everything?sources=cnbc&apiKey=feac0e08fbbe4e5597b10a31254e15b9`;
    fetch(url2)
      .then(response => response.json())
      .catch(() => this.setState({ error: true }))
      .then(recentArticles =>
        this.setState({
          recentArticles: recentArticles ? recentArticles.articles : []
        })
      );
  };
  render() {
    let { headlines, recentArticles, error } = this.state;
    // console.log("error ", error);
    return (
      <div>
        {!error ? (
          <News
            headlines={headlines}
            recentArticles={recentArticles}
            title="Business Articles"
          />
        ) : (
          <h1 className="text-danger fail">
            Sorry failed to get business news
          </h1>
        )}
      </div>
    );
  }
}

export default GetBusiness;
