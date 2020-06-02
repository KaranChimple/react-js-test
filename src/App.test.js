// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import { describe } from 'riteway';
// import render from 'riteway/render-component';
// import React from 'react';

// import App from './App';

// describe('Counter Components', async assert => {
//   const createCounter = () => render(<App />);

//   {
//     const count = 3;
//     const $ = createCounter(count);
//     assert({
//       given: 'a click count',
//       should: 'render the correct number of clicks.',
//       actual: parseInt($('.clicks-count-one').html().trim(), 10),
//       expected: count
//     });
//   }

//   {
//     const count = 5;
//     const $ = createCounter();
//     assert({
//       given: 'a click count',
//       should: 'render the correct number of clicks.',
//       actual: parseInt($('.clicks-count-two').html().trim(), 10),
//       expected: count
//     });
//   }
// })

import React from 'react';
import renderer from 'react-test-renderer';

import { Counter } from './counter';

describe('Counter', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Counter counter={1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});