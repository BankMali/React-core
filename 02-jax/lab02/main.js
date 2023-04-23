let height = 177;
let weight = 70;

function calcBMI (height,weight) {
    return weight/(height/100)**2
};

const App = (
    <h1>{calcBMI(height,weight) }</h1>
);



const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot);

root.render(App)




// ให้สร้างตัวแปรชื่อ height และ weight เก็บข้อมูลส่วนสูงและน้ำหนักตามลำดับ
// ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI
// ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h1>

