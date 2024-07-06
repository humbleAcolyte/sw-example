import React, { Component } from "react";

import ListBlock from "../ListBlock";
import { PlanetList, PlanetDetails } from "../SwComponents";

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null,
  };

  onSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const list = <PlanetList onItemSelected={this.onSelected} />;
    const details = <PlanetDetails itemId={this.state.selectedItem} />;

    return <ListBlock list={list} details={details} />;
  }
}
