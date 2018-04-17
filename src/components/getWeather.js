import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class GetWeather extends Component {
  state = {
    zip: "",
    results: [],
    submitted: false,
    error: false
  };

  fetchData = () => {
    let { zip } = this.state;
    let query = zip;
    let url = `http://api.wunderground.com/api/8a3eb9b15ac33638/satellite/geolookup/conditions/q/${query}.json`;
    fetch(url)
      .then(data => data.json())
      .then(weather => this.setState({ results: weather }))
      .catch(() => this.setState({ error: true }))
      .then(() => this.setState({ submitted: true }));
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      queryType: name
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchData();
  };

  display = () => {
    let { results } = this.state;
    // if no connection
    if (results.length === 0) {
      return (
        <div className="fail">
          <h1 className="text-danger fail">Sorry failed to get weather</h1>;
        </div>
      );
    } else if (results.response.error) {
      return (
        <h1 className="text-danger fail">
          {results.response.error.description}
        </h1>
      );
    } else {
      return (
        <div>
          <h1>
            Weather for {results.current_observation.display_location.full}
          </h1>
          <h2>
            Current temperature is:{" "}
            {results.current_observation.temperature_string}
            {results.current_observation.weather}
          </h2>
          <h2>Wind is {results.current_observation.wind_string}</h2>
          <h2>Feels like: {results.current_observation.feelslike_string}</h2>
          <img
            className="img-fluid float-left"
            src={results.satellite.image_url}
            alt=""
          />
          <img
            className="img-fluid float-right"
            src={results.satellite.image_url_ir4}
            alt=""
          />
        </div>
      );
    }
  };

  form = () => {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="zip" className="mr-sm-2">
            Enter a Zip code
          </Label>
          <Input
            type="text"
            name="zip"
            id="zip"
            value={this.state.zip}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Get Weather</Button>
      </Form>
    );
  };

  render() {
    let { submitted } = this.state;
    // console.log("results are: ", results);

    return (
      <Container>
        {this.form()}
        {submitted ? this.display() : null}
      </Container>
    );
  }
}
export default GetWeather;
