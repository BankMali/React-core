// const App = <div className='container'>Reuseable UI</div>
function App() {

    const handleClick = () => {
        console.log('Click');
    };

    return (
    <div className='container'>
        <h1>Event Handler</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>);
};

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);