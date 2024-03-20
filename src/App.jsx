import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
    
  return (
    <div id='App' className='App'>
      <NavBar></NavBar>
      <ItemListContainer>
          <h1>Bienvenido</h1>
          <p>Al mejor Shopping de ropa de niños del mundo, donde podra desde la comodidad de su casa seleccionar las mejores marcas, realizar la compra y recibir sus productos en pocos pasos</p>
      </ItemListContainer>
    </div>
  )
}

export default App
