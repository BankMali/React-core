let fullName = 'Watchira Malipechara';
let birthYear = 2020 - 30;
let CURRENT_YEAR = 2023;
let imgSrc = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const App = (
    <>
        <h1>{fullName}</h1>
        <p>{CURRENT_YEAR - birthYear}</p>
        <img src={imgSrc}></img>
    </>
);

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(App);
