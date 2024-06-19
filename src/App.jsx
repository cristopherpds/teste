import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { imprime, resta, soma } from './components/Calculadora'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exercicios, { Postagens, Exercicios3 } from './components/Exercicios'
import Usuarios from './usuarios'
import Botao1 from './teste'


let usuario = {
  nome: "Cristopher",
  sobrenome: "Paiva",
  idade: 26,
  adm: true
}

function MyButton(){
  return(
    <>
    <button>Acessar area Clinete</button>
    </>
  );
}

function MyButton2(){
  return(
    <>
    <button>Accesar area ADM</button>
    </>
  );
}

const Qualbotao = () =>{
  let rerotno = usuario.adm? <MyButton2/> : <MyButton/>;
  return(
    <>
      {rerotno}
    </>
  )
}

function HomePage() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        Soma:{imprime(soma(2,2))}
        Resta:{imprime(resta(5,2))}
        <Qualbotao/>
        <Usuarios/>
        <Botao1/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercicios" element={<Exercicios />} />
        <Route path="/exercicios2" element={<Postagens />} />
        <Route path="/exercicios3" element={<Exercicios3 />} />
      </Routes>
    </Router>
  )
}

export default App
