import './style.css';
import { useState } from 'react';

import {Card} from '../../components/Card'

export function Home() {
  //Criando um estado para atualizar dinamicamente o valor no front-end
  const [nomeStudent, setNomeStudent] = useState('valor inicial');  

  return (
    //deve-se retornar apenas 1 item,um fragment (<></>) ou um div geralmente (<div></div>)
    // e é usada para retornar um item de uma função java script para o react
    <div className="container"> 
    <h1 className='titulo'>nome do amiguinho: {nomeStudent}</h1>

    <input type="text"  placeholder='Digite um nome, meu caro' onChange={e => handleNameChange(e.target.value)} />
    <button type='button' >adicionar</button>
    <Card name="Lucas" time="10:10:10"/>
    <Card name="James Bond" time="00:00:07"/>
    </div>
  )

  function handleNameChange(name){
    setNomeStudent(name)
  }
}
