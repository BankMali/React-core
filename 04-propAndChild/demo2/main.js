
// function MyComponent({ title, age, isAdmin, nickname }) {
//     //    Child รับ Prop
//     // console.log(props);

//     // Don't Modify prop
//     // props.title = 'Job';
//     // props.age = 20;

    // prop destructuring
    // const { title, age, isAdmin } = props;
    // const title = props.title
    // const age = props.age
    // const isAdmin = props.isAdmin

//     return (
//         <>
//             <h6>{title}</h6>
//             <p>{age}</p>
//             {isAdmin && <button>Click for delete</button>}
//         </>
//     );
// }

function MyLists(props) {
    console.log(props);
    return (
        <ul>
            <h6>{props.listName} LIST</h6>
            {props.children}
        </ul>
    );
}

// Parent
function App() {
    // เรียก Render == Call Function Component
    // Pass Prop == Pass ที่ App (Parent)

    // let name = 'pavit';
    // let age = 20;
    // let isAdmin = true;
    // Child

let props = {}
    return (
        <div className='container'>

            <MyLists listName='taskkk'>
                <li>HW</li>
                <li>Game</li>
            </MyLists>
        </div>
    );
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);