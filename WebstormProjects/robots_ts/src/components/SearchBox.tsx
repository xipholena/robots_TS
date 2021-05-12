import * as React from 'react';

interface ISearchBoxProps {
    searchChange(event: React.SyntheticEvent<HTMLInputElement>): void //так как это пропс, помотреть, что он принимает и возвращает можно в родительском компоненте
}                                                                      //типизируется также и в родительском App, который передаёт эту функцию пропсами
const SearchBox = ({ searchChange }: ISearchBoxProps) => { //в пропсах функция
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;