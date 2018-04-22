import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./newsItem";
import Article from "./article";
import { isLoggedIn } from "../utils/authService";
import { Row, Col, Container } from "reactstrap";
import { Header, Footer } from "./layout";
import Authors from "./authors";

class News extends Component {
  displayAuthor = () => {
    const { setAuthor } = this.props;
    // only news not business
    if (setAuthor) {
      if (isLoggedIn()) {
        return <Authors setAuthor={setAuthor} />;
      } else {
        return <h4 className="text-info">Log in to select a news source</h4>;
      }
    }
    return null;
  };
  render() {
    let { headlines, recentArticles, title } = this.props;
    // console.log(isLoggedIn());
    //console.log(headlines);
    let ret = headlines.map((news, index) => {
      return (
        <div key={index} className="ticker__item">
          <NewsItem item={news} />
        </div>
      );
    });

    let retArticles = recentArticles.map((news, index) => {
      return (
        <Col key={index} sm="4">
          <Article item={news} />
        </Col>
      );
    });
    // console.log(ret);

    return (
      <div>
        <Container>
          <Header title={title} />
          {this.displayAuthor()}
          <Row>{retArticles}</Row>
        </Container>
        <Footer items={ret} />
      </div>
    );
  }
}

News.propTypes = {
  headlines: PropTypes.array,
  recentArticles: PropTypes.array,
  title: PropTypes.string,
  setAuthor: PropTypes.func
};

export default News;
