import * as React from 'react';
import Card from './Card';
import {IRobot} from'../containers/App'

const CardList = ({ robots }: {robots: Array<IRobot>}) => { //массив объектов
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;