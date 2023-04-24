// const App = <div className='container'>Reuseable UI</div>
function App() {
    const friend = ['man', 'fai', 'jai', 'bright'];


    return (<div className='container'>Friend List
    <ul>
      {friend.map((el, idx) => (
        <li key={idx}>{el}</li>
      ))}
    </ul>


    
    </div>);
};

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);