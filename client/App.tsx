import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      working {':]'}
    </div>
  );
}

render(<App />, document.querySelector('#root'));