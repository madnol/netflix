import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import Home from "./CommentList";
class ShowDetail extends React.Component {
  state = {
    movie: null,
  };

  fetchTheMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=827e9820&i=" +
          this.props.match.params.something
      );
      let movie = await response.json();

      // let newMovies = { ...this.state.Movies };
      // newMovies[query] = movies.Search;

      this.setState({ movie });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  componentDidMount() {
    // let movieIdFromTheHome = this.props.match.params.something;
    // let correctMovieToLoad = fetchTheMovies.find(
    //   movie => movie.id.toString() === movieIdFromTheHome
    // );
    this.fetchTheMovies();
  }

  render() {
    console.log(this.state.movie);
    return (
      <Container>
        {this.state.movie && (
          <div>
            <Row className="my-2">
              <Col md={3}>
                <img
                  src={this.state.movie.Poster}
                  alt="movie"
                  className="img-fluid"
                />
              </Col>
              <Col md={9}>
                <Card>
                  <Card.Body>
                    <Card.Title className="text-dark">
                      {this.state.movie.Title}
                    </Card.Title>
                    <Card.Subtitle>
                      <Badge variant="danger">{this.state.movie.Genre}</Badge>
                    </Card.Subtitle>
                    <Card.Text className="text-dark">
                      {this.state.movie.Plot}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <CommentList movieId={this.state.movie.imdbID} />
                <AddComment movieId={this.state.movie.imdbID} />
              </Col>
            </Row>
          </div>
        )}
        {!this.state.movie && <Home />}
      </Container>
    );
  }
}

export default ShowDetail;
