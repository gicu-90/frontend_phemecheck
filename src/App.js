import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      total_themes: []
    };
  }

  componentDidMount() {
    fetch('https://phemecheck.com/api/post/')
    .then(response => response.json())
    .then(total_themes => this.setState({ total_themes: total_themes }))
  }

  render() {
    const { total_themes } = this.state;

    return (
      <div className="App">
        <h1> “كل يوم أكتشف في وطني مجداً جديداً
وعاراً جديداً
أخباراً ترفع الرأس
وأخرى ترفع الضغط”
― محمد الماغوط </h1>
        {
          total_themes.map(theme => 
            <CardList key={theme.id} theme={theme} />
          )
        }
      </div>
    );
  }
}

export default App;