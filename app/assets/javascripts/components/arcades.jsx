class Arcades extends React.Component {
    constructor(){
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,40)});
  }

  render () {
  let filteredArcades = this.props.arcades.filter(
      (arcade) => {
        return arcade.name.toLowerCase().indexOf(this.state.search.toLowerCase()
        ) !== -1;

      }
  );
  let arcadeStates = filteredArcades.map(arcade => {
        return arcade.state
      }
  );
    return (
    <div>
    <input type="text"
      placeholder="Search"
      value={this.state.search}
      onChange={this.updateSearch.bind(this)}/>
      <ul>

    {
    filteredArcades.map(arcade => {
          return([
          <h1>{arcade.state}</h1>,
          <li key={arcade.id}> <a href={"/arcades/" + arcade.id}> <button className="react-buttons" type="button">{arcade.name}</button></a></li>
          ])
})
}
        </ul>
        </div>
    )
  }
}