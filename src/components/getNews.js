import React, { Component } from "react";
import News from "./news";

class GetNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      recentArticles: [],
      author: "fox-news",
      error: false
    };
  }

  componentDidMount() {
    this.fetchArticals();
    this.fetchHeadlines();
  }

  setAuthor = author => {
    this.setState(
      () => {
        return { author };
      },
      () => {
        this.fetchArticals();
      }
    );
  };

  fetchHeadlines = () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=feac0e08fbbe4e5597b10a31254e15b9`;
    fetch(url)
      .then(response => response.json())
      .catch(() => this.setState({ error: true }))
      .then(headlines =>
        this.setState({ headlines: headlines ? headlines.articles : [] })
      );
  };

  fetchArticals = () => {
    let { author } = this.state;
    let url = `https://newsapi.org/v2/everything?sources=${author}&apiKey=feac0e08fbbe4e5597b10a31254e15b9`;
    fetch(url)
      .then(response => response.json())
      .catch(() => this.setState({ error: true }))
      .then(recentArticles => {
        this.setState({
          recentArticles: recentArticles ? recentArticles.articles : []
        });
      });
  };
  render() {
    let { headlines, recentArticles, error } = this.state;
    // console.log(recentArticles);
    return (
      <div>
        {!error ? (
          <News
            headlines={headlines}
            recentArticles={recentArticles}
            title="News Articles"
            setAuthor={this.setAuthor}
          />
        ) : (
          <h1 className="text-danger fail">Sorry failed to get News</h1>
        )}
      </div>
    );
  }
}

export default GetNews;
