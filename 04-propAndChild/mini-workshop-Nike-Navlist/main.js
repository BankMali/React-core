

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

// Parent
function App() {

let navbar = {}
    return (
        <div className='container'>
                <div className='navbar-container'>
                    <NavButton menu='ใหม่และโดดเด่น'></NavButton>
                    <NavButton menu='ผู้ชาย'></NavButton>
                    <NavButton menu='ผู้หญิง'></NavButton>
                    <NavButton menu='เด็ก'></NavButton>
                    <NavButton menu='ลดราคา'></NavButton>
                    <NavButton menu='SNKRS'></NavButton>
                </div>
            

            <div className='subNavbar-container'>
            <Menu  subMenu='ใหม่และโดดเด่น'>
                <li>สินค้ามาใหม่</li>
                <li>รองเท้ารุ่นใหม่ล่าสุด</li>
                <li>เสื้อผ้าสไตล์ใหม่ล่าสุด</li>
                <li>ปฎิธินเปิดตัว SNKRS</li>
                <li>เป็นเจ้าของได้แล้วที่ SNKRS</li>
                <li>ออกแบบเองกับ Nike By You</li>
                <li>พิเศษเฉพาะ Nike App</li>
                <li>สินค้าขายดี</li>
                <li>พิเศษสำหรับ Member</li>
                <li>ใหม่และโดดเด่น</li>
            </Menu>
            <Menu  subMenu='ซื้อสินค้าไอคอน'>
                <li>Air Force 1</li>
                <li>Air Jordan 1</li>
                <li>Air Max</li>
                <li>Dunk</li>
                <li>Blazer</li>
                <li>Pegasus</li>
            </Menu>
            <Menu  subMenu='สินค้าใหม่สำหรับผู้ชาย'>
                <li>รองเท้า</li>
                <li>เสื้อผ้า</li>
                <li>อุปกรณ์และอุปกรณ์เสริม</li>
                <li>ซื้อสินค้ามาใหม่ทั้งหมด</li>
                
            </Menu>
            <Menu  subMenu='สินค้าใหม่สำหรับผู้หญิง'>
                <li>รองเท้า</li>
                <li>เสื้อผ้า</li>
                <li>อุปกรณ์และอุปกรณ์เสริม</li>
                <li>ซื้อสินค้ามาใหม่ทั้งหมด</li>
           
            </Menu>
            <Menu  subMenu='สินค้าใหม่สำหรับเด็ก'>
                <li>รองเท้า</li>
                <li>เสื้อผ้า</li>
                <li>อุปกรณ์และอุปกรณ์เสริม</li>
                <li>ซื้อสินค้ามาใหม่ทั้งหมด</li>
            
            </Menu>
            </div>
        </div>
    );
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);