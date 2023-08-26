import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import Scroll from "./components/Scroll.js";
import "tachyons";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:'',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }C

  onSearchChange = (e) => {
          const searchField = e.target.value.toLocaleLowerCase(); 
          this.setState(() => {
            return { searchField }
          })
        }

  render() {
    const { monsters, searchField} = this.state;
    const { onSearchChange} = this;
    
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className="tc">
        <h1 className="app-title">Monster's   DeX</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="search-box"/>
        <Scroll>
          <CardList monsters={filteredMonsters}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
