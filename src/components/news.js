import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./newsItem";
import Article from "./article";
import { Row, Col, Container } from "reactstrap";
import { Header, Footer } from "./layout";

class News extends Component {
  render() {
    let { headlines, recentArticles, title } = this.props;
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
  title: PropTypes.string
};

export default News;
