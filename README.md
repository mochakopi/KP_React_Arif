# My Portofolio
## Description
This is my portofolio. I created this portofolio to show my skills and experiences. I hope you enjoy it.

## Langkah Membuat Aplikasi React Menggunakan Vite
1. Install Node.js
2. Install Vite
```
npm install -g create-vite
```
3. Create Vite App
```
create-vite my-portofolio
```
4. Install React Router Dom
```
npm install react-router-dom
```
5. Install Bootstrap
```
npm install bootstrap
```
6. Install Font Awesome & Sweet Alert 2
```
npm install @fortawesome/fontawesome-free
npm install sweetalert2
```
7. Kemudian Manage File Structure
```
- src
  - assets
    - images
  - components
  - App.jsx
  - index.jsx
```
8. Create Components
```
- Footer.jsx
- Navbar.jsx
- About.jsx
- Contact.jsx
- Home.jsx
- TemperatureConverter.jsx
- TodoList.jsx
```
9. Jika Komponent sudah dibuat, kemudian buat routingnya
```
- App.jsx
```
10. Kemudian buat file CSS untuk styling
```
- src
  - assets
    - css
      - style.css
```
11. Kemudian import file CSS ke dalam file index.jsx
```
import './assets/css/style.css';
```
12. Jika sudah, Lalu menjalankan aplikasi
```
npm run dev
```

## Langkah Pembuatan Komponen Temperature Converter
1. Membuat Komponen Temperature Converter
```
- TemperatureConverter.jsx
```
2. Membuat State untuk Menyimpan Data
```
const [celsius, setCelsius] = useState(0);
const [fahrenheit, setFahrenheit] = useState(0);
Berfungsi untuk menyimpan data celsius dan fahrenheit yang akan diinputkan oleh user.
```
3. Membuat Fungsi Perhitungan
```
const convertToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
}
Berfungsi untuk menghitung nilai celsius berdasarkan nilai fahrenheit yang diinputkan oleh user.
```
4. Membuat Fungsi Perubahan Nilai
```
const handleChangeFahrenheit = (e) => {
  setFahrenheit(e.target.value);
  setCelsius(convertToCelsius(e.target.value));
}
Berfungsi untuk mengubah nilai fahrenheit dan celsius berdasarkan inputan user.
```
5. Membuat Input Form
```
<input type="number" value={fahrenheit} onChange={handleChangeFahrenheit} />
Berfungsi untuk membuat input form yang berfungsi untuk menginputkan nilai fahrenheit.
```
6. Membuat Output Form
```
<input type="number" value={celsius} readOnly />
Berfungsi untuk membuat output form yang berfungsi untuk menampilkan nilai celsius.
```

## Apa itu React Router Dom?
React Router Dom adalah library yang digunakan untuk membuat routing pada aplikasi React. Dengan menggunakan React Router Dom, kita dapat membuat aplikasi React yang memiliki beberapa halaman.

## Apa itu React Hooks?
React Hooks adalah fitur yang diperkenalkan oleh React pada versi 16.8. React Hooks memungkinkan kita untuk menggunakan state dan fitur React lainnya tanpa harus menggunakan class. Dengan menggunakan React Hooks, kita dapat membuat komponen React yang lebih sederhana dan mudah dimengerti.
Contoh React Hooks:
1. useState
```
const [count, setCount] = useState(0);
Berfungsi untuk membuat state dan fungsi untuk mengubah state.
State ini digunakan untuk menyimpan data yang akan digunakan pada komponen.
```
2. useEffect
```
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
Berfungsi untuk mengeksekusi kode setiap kali komponen di-render.
UseEffect ini digunakan untuk melakukan side effect pada komponen. Side effect ini bisa berupa pengambilan data dari API, manipulasi DOM, dll.
```
3. useContext
```
const value = useContext(MyContext);
Berfungsi untuk mengakses nilai dari Context.
Context digunakan untuk menyimpan data yang akan digunakan oleh beberapa komponen.
```
4. useReducer
```
const [state, dispatch] = useReducer(reducer, initialArg, init);
Berfungsi untuk mengelola state yang kompleks.
UseReducer ini digunakan untuk mengelola state yang kompleks. State yang kompleks ini bisa berupa state yang memiliki banyak properti atau state yang memiliki banyak kondisi.
```
5. useCallback
```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
Berfungsi untuk menghindari pembuatan fungsi yang baru setiap kali komponen di-render.
UseCallback ini digunakan untuk menghindari pembuatan fungsi yang baru setiap kali komponen di-render. Fungsi yang baru ini bisa mempengaruhi performa aplikasi.
```
6. Dll.

## Deployment Aplikasi React Menggunakan Vercel
1. Kunjungi situs Vercel
2. Login menggunakan akun GitHub
3. Klik New Project
4. Pilih Repository yang akan di-deploy
5. Klik Deploy
6. Tunggu proses deployment selesai
7. Aplikasi berhasil di-deploy

## Fitur Aplikasi
1. Home Page
```
Menampilkan informasi tentang slider foto kota tempat tinggal saya. Disini saya menggunakan Carousel dari Bootstrap. dan juga menampilkan informasi last update secara realtime menggunakan SetInterval pada useEffect.
```
2. About
```
Menampilkan informasi tentang saya. Disini saya menampilkan foto saya, nama saya, dan juga informasi tentang saya.
```
3. Aplikasi
```
- Aplikasi Temperature Converter (Celsius, Fahrenheit)
- Aplikasi Todo List (Menambahkan, Menghapus, dan Menyelesaikan Todo)
```
4. Contact
```
Menampilkan informasi kontak. Disini saya menampilkan email pengirim, nomor telepon, dan juga alamat yang digunakan untuk mengirimkan pesan.
```

## How to Run
1. Clone this repository
2. npm install
3. npm run dev
4. Open your browser and go to http://localhost:3000 (default port)
# KP_React_B2_Arif_Final
