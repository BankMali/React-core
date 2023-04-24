// const App = <div className='container'>Reuseable UI</div>
function App() {
    const post = [
      { id: '16099', name: 'John', msg: 'so hungry', date:'1-2-2023' },
      { id: '23123', name: 'Jook', msg: 'so tried', date:'4-2-2023' },
      // { id: '2133', name: 'Jack' }
    ];
    const list = post.map(el => <li key={el.id}>{el.name} <div>{el.msg}</div> <div>{el.date}</div></li>
   );

    return (<div className='container'>Post Today
   <ul>{list}</ul>


    
    </div>);
};

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);