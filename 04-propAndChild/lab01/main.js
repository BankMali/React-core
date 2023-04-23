// const App = <div className='container'>Reuseable UI</div>


function Profile({name,age}) {


    return (
        <div className="container" >
            <h1>Fullname : {name}</h1>
            <h2>Age : {age}</h2>
        </div>

    );
};

function App() {

    return (<div className='container'>
        <Profile name='John Doe' age={27}/>
        <Profile name='Jo Do' age={2}/>
        <Profile name='Ji JI' age={224}/>
        </div>
    );
}

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);