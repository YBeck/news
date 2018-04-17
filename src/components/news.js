import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./newsItem";
import Articals from "./articals";
import { Row, Col, Container } from "reactstrap";
import { Header, Footer } from "./layout";

class News extends Component {
  render() {
    let { headlines, recentArticals, title } = this.props;
    //console.log(headlines);
    let ret = headlines.map((news, index) => {
      return (
        <div key={index} className="ticker__item">
          <NewsItem item={news} />
        </div>
      );
    });

    let retArticals = recentArticals.map((news, index) => {
      return (
        <Col key={index} sm="4">
          <Articals item={news} />
        </Col>
      );
    });
    // console.log(ret);
    return (
      <div>
        <Container>
          <Header title={title} />
          <Row>{retArticals}</Row>
        </Container>
        <Footer items={ret} />
      </div>
    );
  }
}

News.propTypes = {
  headlines: PropTypes.array,
  recentArticals: PropTypes.array,
  title: PropTypes.string
};

export default News;
