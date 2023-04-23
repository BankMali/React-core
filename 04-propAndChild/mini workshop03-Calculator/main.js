
function App() {

    return    <div className='container'>
        <div className='calculator'>
            <div className="item--1">0</div>
            <div className="item--2, bg3">C</div>
            <div className="item--3, bg3">+/-</div>
            <div className="item--4, bg3">%</div>
            <div className="item--5, bg2">/</div>
        <div className="item--6, bg1">7</div>
        <div className="item--7, bg1">8</div>
        <div className="item--8, bg1">9</div>
        <div className="item--9, bg2">x</div>
        <div className="item--10, bg1">4</div>
    <div className="item--11, bg1">5</div>
    <div className="item--12, bg1">6</div>
    <div className="item--13, bg2">-</div>
    <div className="item--14, bg1">3</div>
    <div className="item--15, bg1">2</div>
    <div className="item--16, bg1">1</div>
    <div className="item--17, bg2">+</div>
    <div className="item--18, bg1, lconner">0</div>
    <div className="item--19, bg1">.</div>
    <div className="item--20, bg1">&#8592;</div>
    <div className="item--21, Rconner">=</div>
    </div>
    </div>
}


// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);