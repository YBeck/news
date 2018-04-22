import React, { Component } from "react";
// import { Switch, Link, Route } from "react-router-dom";
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
    this.fetchData();
  }

  setAuthor = author => {
    // this.setState({ author });
    // console.log(author);
    // this.fetchData();

    this.setState(
      () => {
        return { author };
      },
      () => {
        // console.log(this.state.author);
        this.fetchData();
      }
    );
  };

  fetchData = () => {
    let { author } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=feac0e08fbbe4e5597b10a31254e15b9`;
    fetch(url)
      .then(response => response.json())
      .catch(() => this.setState({ error: true }))
      .then(headlines =>
        this.setState({ headlines: headlines ? headlines.articles : [] })
      );

    let url2 = `https://newsapi.org/v2/everything?sources=${author}&apiKey=feac0e08fbbe4e5597b10a31254e15b9`;
    fetch(url2)
      .then(response => response.json())
      .catch(() => this.setState({ error: true }))
      .then(recentArticles => {
        // console.log("url ", url2);
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
