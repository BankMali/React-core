// const App = <div className='container'>Reuseable UI</div>
function App() {

    const handleClick = (event) => {
        console.log('Click');
        console.log(event);
    };

const handleChange = (event) => {
    console.log(event.target.value)
}

    return (
    <div className='container'>
        <h1>Event Handler</h1>
        <button onClick={handleClick}>Click Me</button>
        <input onChange={handleChange}/>
    </div>);
};

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);