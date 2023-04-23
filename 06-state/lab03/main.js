
function App() {
    const [isShow, setIsShow] = React.useState(true);



    
const handleToggle = () => setIsShow(!isShow);
let text = isShow ? 'Click to hide text' : 'Click to show text';

    return (
        <div className='container'>
         <button onClick={handleToggle}>{text}</button>
         {isShow && <h4 >TEXT</h4>}

        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
