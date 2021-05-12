import * as React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export interface IRobot { //описание объекта, массив которых будет получен с сервера, экспорт  - для компонентов, которые получат массив роботов пропсами (тут CardList)
  name: string;
  id: number;
  email: string;
}



interface IAppState {
  robots: Array<IRobot>;
  searchfield: string;
}

class App extends React.Component<{}, IAppState> { //поскольку пропсов нет
  constructor({}) { //то же, что и в самом компоненте
    super({}) //то же, что и в самом компоненте
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(): void { //как любая ф-я, кот ничего не возвращает
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => { //типизируется также и в дочернем SearchBox, который получает эту функцию пропсами
    this.setState({ searchfield: event.currentTarget.value })
  }

  render(): React.ReactElement { //мог быть дженерик с типом пропсов, но их нет. Было бы например React.ReactElement<ComponentProps>
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;