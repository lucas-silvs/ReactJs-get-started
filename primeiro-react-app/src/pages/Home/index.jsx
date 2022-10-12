import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';


import { Card } from '../../components/Card'

export function Home() {
  //Criando um estado para atualizar dinamicamente o valor no front-end
  const [nomeStudent, setNomeStudent] = useState();
  const [estudantes, setEstudantes] = useState([]);
  const [usuario, setusuario] = useState({nomeUsuario: '', avatarUsuario: ''})

  //o UserEffect é executado automaticamente assim que os itens da tela são renderizados 
  useEffect(()=>{
    // método do javascript para requisições https
    fetch("https://api.github.com/users/lucas-silvs")
    .then(Response => Response.json())
    .then(data =>  {
      setusuario(
        {nomeUsuario: data.name, 
        avatarUsuario: data.avatar_url}
        )
        
    })
  }, [estudantes]);


  return (
    //deve-se retornar apenas 1 item,um fragment (<></>) ou um div geralmente (<div></div>)
    // e é usada para retornar um item de uma função java script para o react
    <div className="container">

      <header>
        <h1 className='titulo'>Listas dos amiguinhos</h1>
        <div>
          <strong>{usuario.nomeUsuario}</strong>
          <img src={usuario.avatarUsuario} alt='Foto de perfil' />
        </div>
      </header>

      <input type="text" placeholder='Digite um nome, meu caro' onChange={e => alteraNomeEstudante(e.target.value)} />
      <button type='button' onClick={adicionaEstudante} >adicionar</button>
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

  function adicionaEstudante() {
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
    setEstudantes(prevEstudantes => [...prevEstudantes, novoEstudante])
  }


}
