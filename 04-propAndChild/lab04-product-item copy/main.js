// const App = <div className='container'>Reuseable UI</div>
function ProductItem({products: {name,price,description}}) {


    return (
        <div className="container" >
            <h1>Product : {name}</h1>
            <h2>Price : {price}</h2>
            <p>Description : {description}</p>
        </div>

    );
};

function App() {
    let product1 = { name: 'Bag', price: '1 btc' ,description:'This is a bag'};
    let product2 = { name: 'Book', price: '0.5 btc' ,description:'This is a book'};
    let product3 = { name: 'Apple', price: '0.1 btc' ,description:'This is a apple'};

    return (<div className='container'>
        <ProductItem products={product1}/>
        <ProductItem products={product2}/>
        <ProductItem products={product3}/>
        </div>
    );
}

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);