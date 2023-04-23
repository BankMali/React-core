// const header = React.createElement('h1', { className: 'text-red' }, 'Hello from React');
// // header.innerText = 'Hello from Js-Dom'
// // header.classList = 'text-red';

// const domRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(domRoot);

// root.render(header);
// root.innerText = 'Helllo from Js-Dom'

let list1 = React.createElement('li', null, 'item-1')
let list2 = React.createElement('li', null, 'item-2')
let list3 = React.createElement('li', null, 'item-3')
let lists = React.createElement('ul', null,list1,list2,list3)
let card = React.createElement('h2', {className: 'text-red'} ,'Mylist',lists)
// card.classList = 'text-red';

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(card);
