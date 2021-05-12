import * as React from 'react';
type Props = {
  children?: JSX.Element // React.ReactNode тоже подойдёт, ?необязательность, если этот компонент не будет рендерить children props
}
const Scroll = (props: Props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;