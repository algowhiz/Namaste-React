// const h1 = React.createElement('h1',{},"Hello mandy here");


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(h1);


const div = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement('div', { id: 'child' },
      [React.createElement('h1', {}, "Mandy here "),
      React.createElement('h1', {}, "Mandy here ")]
    )
  );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);