// const App = <div className='container'>Reuseable UI</div>
function App() {
    return (<div className='container'>
        <div class row>

        </div>
        </div>);
};

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);