import React, { Component } from "react";
// import { Switch, Link, Route } from "react-router-dom";
import News from "./news";

class GetBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      recentArticals: [],
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
      .then(recentArticals =>
        this.setState({
          recentArticals: recentArticals ? recentArticals.articles : []
        })
      );
  };
  render() {
    let { headlines, recentArticals, error } = this.state;
    // console.log("error ", error);
    return (
      <div>
        {!error ? (
          <News
            headlines={headlines}
            recentArticals={recentArticals}
            title="Business Articals"
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
