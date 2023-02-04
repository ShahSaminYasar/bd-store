import "./css/style.css";
import Product from "./components/Product";

function App() {
  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="section_title">BD Store</h1>
        <Product />
      </div>
    </main>
  );
}

export default App;
