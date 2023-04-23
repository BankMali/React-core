// const App = <div className='container'>Reuseable UI</div>
function ProductItem({products: {name,price,typeProduct,colorProduct,stock,discount,imgProduct}}) {


    return (
        <div className="container_product" >
            <img className="imgproduct" src={imgProduct}></img>
            <p className="textRed">{stock}</p>
            <p>{name}</p>
            <p className="textGray">{typeProduct}</p>
            <p className="textGray">{colorProduct} สี</p>
            <p className="textPrice">{price}</p>
            <p className="textDis">{discount}</p>
        </div>

    );
};

function App() {
    let product1 = { name: 'Jordan Series ES', price: '฿2,639' ,typeProduct:'รองเท้าผู้ชาย',colorProduct: 3 , stock:'',discount:'ส่วนลด 20%', imgProduct:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6fc4194d-cabe-4daa-a11a-4f349bd7a794/รองเท้าผู้-jordan-series-es-FDtg9v.png'};
    let product2 = { name: 'Air Jordan 1 Low SE Craft', price: '฿4,500' ,typeProduct:'รองเท้าผู้ชาย',colorProduct: 1 , stock:'สินค้าหมด',discount:'', imgProduct:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d465f39d-0cf2-424b-9714-78ea2e098b89/รองเท้าผู้-air-jordan-1-low-se-craft-q1ktlR.png'};
    let product3 = { name: 'Jordan Series Mid', price: '฿3,600' ,typeProduct:'รองเท้าผู้ชาย',colorProduct: 1 , stock:'สินค้ามาใหม่',discount:'', imgProduct:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e57204bc-21ce-4423-8136-0dbe833e3074/รองเท้าผู้-jordan-series-mid-xdNNBc.png'};


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