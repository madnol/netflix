import React from "react";
import MovieList from "./MovieList";
import ShowDetail from "./ShowDetail";

class Home extends React.Component {
  state = {
    keyWord: "",
    isTyped: false,
  };

  HandleSearchQuery = query => {
    if (query.length >= 3) {
      this.setState({ keyWord: query, isTyped: true });
    } else {
      this.setState({ keyWord: "", isTyped: false });
    }
  };

  render() {
    return (
      <>
        <div className="form-inline my-2 my-lg-0">
          {/* searchbar */}

          <form className="searchBar" action="">
            <input
              type="search"
              onChange={e => {
                this.HandleSearchQuery(e.target.value);
              }}
            />
            <i className="fa fa-search"></i>
          </form>
        </div>
        {this.state.isTyped ? (
          <MovieList query={this.state.keyWord} />
        ) : (
          <>
            <MovieList details={this.props} query="batman" />
            <MovieList details={this.props} query="superman" />
            <MovieList details={this.props} query="hulk" />
          </>
        )}
      </>
    );
  }
}

export default Home;
