import React, { Component } from "react";
import CardList from "./CardList";
import Header from "./Header";
import cats from "./cats";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

class App extends Component {
  state = {
    cats: cats,
    search: ""
  };

  searchCats = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const availableCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    console.log(availableCats);
    return (
      <React.Fragment>
        <Header onChange={this.searchCats} />
        <CardList cats={availableCats} />
      </React.Fragment>
    );
  }
}

export default App;
