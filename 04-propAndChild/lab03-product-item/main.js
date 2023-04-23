// const App = <div className='container'>Reuseable UI</div>


function ProductItem({nameProduct,priceProduct,description}) {


    return (
        <div className="container" >
            <h1>Product : {nameProduct}</h1>
            <h2>Price : {priceProduct}</h2>
            <p>Description : {description}</p>
        </div>

    );
};

function App() {

    return (<div className='container'>
        <ProductItem nameProduct='Bag' priceProduct={'1 btc'} description={'This is a bag'}/>
        <ProductItem nameProduct='Book' priceProduct={'0.5 btc'} description={'This is a book'}/>
        <ProductItem nameProduct='Apple' priceProduct={'0.1 btc'} description={'This is a apple'}/>
        </div>
    );
}

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);