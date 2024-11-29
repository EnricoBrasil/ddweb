import './CreateAccount.css'
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import Validation from '../../services/CreateAccountValidation';
import { useState } from 'react';
import axios from 'axios';

function CreateAccount() {
  const [values, setValues] = useState({
    nome:'',
    email:'',
    senha: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.senha === ""){
      axios.post('http://localhost:8081/registrar', values)
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));
    }
  }
  return (
  <>
    <HeaderLogin/>
      <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Criar conta</h1>
            <div className='inputFormCA'>
                <input type="text" placeholder='Nome' name='nome'
                onChange={handleInput}/>
                {errors.nome && <span className='textError'> {errors.nome}</span>}
            </div>

            <div className='inputFormCA'>
                <input type="email" placeholder='Email' name='email'
                onChange={handleInput}/>
                {errors.email && <span className='textError'> {errors.email}</span>}
            </div>

            <div className='inputFormCA'>
                <input type="password" placeholder='Senha' name='senha'
                onChange={handleInput}/>
                {errors.senha && <span className='textError'> {errors.senha}</span>}
            </div>

            <div className='btnSubmitCA'>
            <button type='submit'>Enviar</button>
            </div>

        </form>
    </div>
  </>
  )
}

export default CreateAccount;
