// const App = <div className='container'>Reuseable UI</div>
// import { AiFillTwitterCircle } from 'react-icons/Ai';

<script
src="https://kit.fontawesome.com/42fd49d90f.js"
crossorigin="anonymous"
></script>

function Menu(navbar) {
    console.log(navbar);
    return (
        <ul>
            <h6>{navbar.subMenu}</h6>
            {navbar.children}
        </ul>
    );
}

function NavButton(navbar) {
    console.log(navbar);
    return (
            <h4 className='navButton'>{navbar.menu}</h4>
    );
}


function ProductItem({products: {name,price,typeProduct,colorProduct,stock,discount,imgProduct}}) {


    return (
        <div className="container_product" >
            <img className="imgproduct" src={imgProduct}></img>
            <p className="textGray">{colorProduct} color</p>
            <p>{name}</p>
        </div>

    );
};


// function MenuFooter(footer) {
//     console.log(footer);
//     return (
//         <ul>
//             <h6>{footer.subMenu}</h6>
//             {footer.children}
//         </ul>
//     );
// }

// function NavButtonFooter(footer) {
//     console.log(footer);
//     return (
//             <h4 className='navButton'>{footer.menu}</h4>
//     );
// }



function App() {
    let product1 = { name: 'Terry tote bag',colorProduct: 4 , imgProduct:'./woman1.png'};
    let product2 = { name: 'Re-Nylon bucket hat',colorProduct: 8 , imgProduct:'./woman2.png'};
    let product3 = { name: 'Prada Symbole sunglasses',colorProduct: 1 , imgProduct:'./woman3.png'};
    let product4 = { name: 'Cotton pique T-shirt',colorProduct: 2 , imgProduct:'./man1.png'};
    let product5 = { name: 'Cotton robe',colorProduct: 1 , imgProduct:'./man2.png'};
    let product6 = { name: 'Prada Symbole sunglasses',colorProduct: 2 , imgProduct:'./man3.png'};
    let footer = {}

    

    return (<div className='container'>
        <div className='topheader-container'>
            <p className='topheader-topic'>SHOP THE SALE COLLECTION</p>
            <div className='topheader-menu'>
            <p>Sign In / Register</p>
            <p><i class="fa-regular fa-heart"></i></p>
            <p><span><i class="fa-solid fa-bag-shopping"></i></span> Bag</p>
            </div>
        </div>


        <div className='M-container'>
            <img src='./PRADA.png'></img>
            {/* <h1>PRADA</h1> */}
                <div className='navbar-container'>
                    <NavButton menu='Women'></NavButton>
                    <NavButton menu='Men'></NavButton>
                    <NavButton menu='Children'></NavButton>
                    <NavButton menu='Sale'></NavButton>
                    <NavButton menu='New In'></NavButton>
                    <NavButton menu='Home collection'></NavButton>
                </div>
        <img className='full_w' src='./main_pic.png'></img>
        <h3>SUMMER 2021</h3>
        <p className='P1'>Explore sports-inspired ready-to-wear and bold accessories from the latest collection.</p>
        <button className='button'>NEW IN FOR HER</button>
        <h2>NEW ARRIVALS</h2>

            <div className='M-container-product'>
            <ProductItem products={product1}/>
            <ProductItem products={product2}/>
            <ProductItem products={product3}/>
            </div>

           

            <div className='contect3-container'>
                <div className='content3-div'>
                <p className='p3'>LIGHT LAYERS</p>
                <p className='p2'>The Pre-Fall 2021 womenswear collections lightweight jackets in relaxed fits.</p>
                <button className='button'>SHOP NOW</button>
                </div>

            <img src='./woman4.png'/>
            </div>
            
        <h2>NEW ARRIVALS FOR HIM</h2>
              <div className='M-container-product'>
            <ProductItem products={product4}/>
            <ProductItem products={product5}/>
            <ProductItem products={product6}/>
            </div>

        <div className='content5-container'>
        <img className='full_w2' src='./woman_footer.png'/>
        <div className='content5-text'>
        <p className='p3'>LA PRADINA</p>
        <button className='button'>EVERYTHING FOR HER</button>
        </div>
        </div>
             </div>

             <div className='bigFooter-container'>
                <div className='footer-container'>
            <ul className='ul1'>
            COMPANY
                <li>Fondazione Prada</li>
                <li>Prada Group</li>
                <li>Luna Rossa</li>
                <li>Sustainability</li>
                <li>Work with us</li>
                <li>  <span className='footer-store'><i class="fa-solid fa-location-dot"></i> Store Locator</span></li>
        
            </ul>
            <ul className='ul2'>
            LEGAL TERMS AND CONDITIONS
                <li>Legal Notice</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Sitemap </li>
            </ul>
            <ul className='ul3'>
            FOLLOW US
                <li className="i-size">  <i class="fa-brands fa-twitter iSize"></i>
                <i class="fa-brands fa-instagram iSize"></i>
                <i class="fa-brands fa-facebook iSize"></i>
                <i class="fa-brands fa-youtube iSize"></i> </li>
              
            </ul>
           
                </div>
             </div>
            </div>

            
        
    );
}

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);