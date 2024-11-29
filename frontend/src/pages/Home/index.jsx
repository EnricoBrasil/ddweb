import './Home.css'
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';


function Home() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(event){
      event.preventDefault();
      axios.post('http://localhost:8081/', {email, senha})
      .then(res => console.log(res))
      .catch(err => console.log(err));

    }
  return (
  <>
    <HeaderLogin/>
      <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className='iconeForm'>
            <IoPersonCircleOutline className='iconAvatar'/>
            </div>

            <div className='inputForm'>
                <input type="email" placeholder='Email' 
                onChange={e => setEmail(e.target.value)} />
            </div>

            <div className='inputForm'>
                <input type="password" placeholder='Senha' 
                onChange={e => setSenha(e.target.value)}/>
            </div>

            <div className='forgotPassword'>
                <a href="esqueciSenha">Esqueceu a senha?</a>
            </div>

            <div className='btnSubmit'>
            <button>Enviar</button>
            </div>

            <div className='createAccount'>
              <p>
                Não tem cadastro?<a href="/registrar"> Quero criar uma conta</a>
              </p>
            </div>
        </form>
    </div>
  </>
  )
}

export default Home;
