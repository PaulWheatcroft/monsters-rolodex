import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        }
      )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value;
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    const { searchField, monsters } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <SearchBox
          className={'monsters-search-box'}
          onChangeHandler={onSearchChange}
          placeholder={'Search monster'}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  }
  
export default App;
