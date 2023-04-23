// const App = <div className='container'>Reuseable UI</div>


function App() {
    return (
    <div className='container'>
        test
        </div>);
};

// render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);

// จงสร้าง tag <select> ซึ่งมีข้อมูลชื่อประเทศในรายการให้เลือก (ให้ลองใส่มา 5 ประเทศ)
// เมื่อผู้ใช้เลือกประเทศ ให้ console.log ค่าประเทศที่ถูกเลือก
