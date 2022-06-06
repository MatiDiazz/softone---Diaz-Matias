import logo from './logo.svg';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  /*const [show, setShow] = useState (true) */
  const [page, setPage] = useState('list')
  
  return (
    <div className="App">
    {/*<button onClick = {() => setShow(!show)}> En Stock</button> */}
        <NavBar/>
        <CartWidget/>
        <ItemListContainer greeting="SoftOne"/>
        <ItemCount/>
        <ItemCount stock={10}/>
        <ItemDetailContainer/>
          {/*{ show ? <ItemCount/> : null}*/}
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
