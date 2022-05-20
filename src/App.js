import logo from './logo.svg';
import './App.css';
import CountFunction from './components/Count/CountFunction';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <CartWidget/>
        <ItemListContainer greeting="Gracias por su compra"/>
        <CountFunction/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
