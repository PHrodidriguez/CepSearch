import React from "react";
import {useState} from 'react'
import "./buscador.css"
import api from "./services/api";


function BuscaCep () {
    const [input, setInput] = useState (`""`);
    const [cep, setCep] = useState({});


    async function Buscar (){
      if(input ===" "){
        alert("Digite algum CEP!!")
        return;
      }
      try{
        const response = await api.get(`${input}/json`);
        setCep(response.data)
        setInput("");
        
    }
    catch{
        alert("Ops!! CEP inválido")
        setInput(" ");
      }
    } 
    
    return(
            <div className="content">
        <div className="buscador">
            <div className="title">
            <h1>Buscador de Cep</h1>
            <i>Desenvolvido por Pedro Rodriguez</i><br></br>
            </div>
            
            <input type="text" placeholder="Digite seu cep" value={input}
            onChange={(e) => setInput(e.target.value) }
            ></input><button    onClick={Buscar} 
             className="busca">Buscar</button>

                {Object.keys(cep).length > 0 &&(
                    <main className="container">
                    <h1>Cep:{cep.cep}</h1>
                    <span>{cep.logradouro}</span>
                    <span>{cep.bairro}</span>
                    <span>{cep.localidade} - {cep.uf}</span>
                    </main>
                )}
                
        </div>
        </div>
    )



}

export default  BuscaCep;