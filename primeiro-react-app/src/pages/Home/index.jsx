import './style.css';
import { useState } from 'react';

import { Card } from '../../components/Card'

export function Home() {
  //Criando um estado para atualizar dinamicamente o valor no front-end
  const [nomeStudent, setNomeStudent] = useState('valor inicial');
  const [estudantes, setEstudantes] = useState([]);


  return (
    //deve-se retornar apenas 1 item,um fragment (<></>) ou um div geralmente (<div></div>)
    // e é usada para retornar um item de uma função java script para o react
    <div className="container">
      <h1 className='titulo'>nome do amiguinho: {nomeStudent}</h1>

      <input type="text" placeholder='Digite um nome, meu caro' onChange={e => alteraNomeEstudante(e.target.value)} />
      <button type='button'  onClick={adicionaEstudante} >adicionar</button>
      {
        estudantes.map(estudante =>
          <Card
          key={estudante.time} 
          name={estudante.name} 
          time={estudante.time} 
          />
        )
      }
    </div>
  )

  function alteraNomeEstudante(name) {
    setNomeStudent(name)
  }

  function adicionaEstudante(){
    const novoEstudante = {
      name: nomeStudent,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    // foi utilizado o spreadOperator para despejar todo o conteudo do array de estudantes antigo e
    // assim realizando o append corretamente 
    setEstudantes(prevEstudantes => [...prevEstudantes , novoEstudante])
  }


}
