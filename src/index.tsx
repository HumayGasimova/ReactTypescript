import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from './Header/header';

let fruits : Array<string> = [
  'red',
  'green',
  'blue',
  'yellow',
  'pink',
  'brown'
]
ReactDOM.render(
  <Header fruits={fruits}/>,
   document.getElementById('app')
);