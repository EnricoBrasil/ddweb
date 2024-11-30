import './CreateAccount.css'
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";

function CreateAccount() {
 
  return (
  <>
    <HeaderLogin/>
      <div className='container'>
        <form>
            <h1>Criar conta</h1>
            <div className='inputFormCA'>
                <input type="text" placeholder='Nome' name='nome'/>
            </div>

            <div className='inputFormCA'>
                <input type="email" placeholder='Email' name='email'/>
            </div>

            <div className='inputFormCA'>
                <input type="password" placeholder='Senha' name='senha'/>
            </div>

            <div className='btnSubmitCA'>
            <button type='submit'><a href='/'>Enviar</a></button>
            </div>

        </form>
    </div>
  </>
  )
}

export default CreateAccount;