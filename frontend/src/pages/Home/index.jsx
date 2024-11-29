import './Home.css'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin';
import { IoPersonCircleOutline } from "react-icons/io5";
import { useState } from 'react';
// import axios from 'axios';
import Validation from '../../services/LoginValidation';


function Home() {
    const [values, setValues] = useState({
      email:'',
      senha: ''
    });
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));

      // axios.post('http://localhost:8081/', {email, senha})
      // .then(res => console.log(res))
      // .catch(err => console.log(err));

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
                <input type="email" placeholder='Email' name='email'
                onChange={handleInput} />
                {errors.email && <span className='textError'> {errors.email}</span>}
            </div>

            <div className='inputForm'>
                <input type="password" placeholder='Senha' name='senha'
                onChange={handleInput} />
                {errors.senha && <span className='textError'> {errors.senha}</span>}
            </div>

            <div className='forgotPassword'>
                <a href="esqueciSenha">Esqueceu a senha?</a>
            </div>

            <div className='btnSubmit'>
            <button type='submit'>Enviar</button>
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
