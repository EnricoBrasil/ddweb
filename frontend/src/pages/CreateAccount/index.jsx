import './CreateAccount.css'
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import { IoPersonCircleOutline } from "react-icons/io5";

function CreateAccount() {

  return (
  <>
    <HeaderLogin/>
      <div className='container'>
        <form >
            <h1>Criar conta</h1>
            <div className='inputFormCA'>
                <input type="text" placeholder='Nome' />
            </div>

            <div className='inputFormCA'>
                <input type="email" placeholder='Email' />
            </div>

            <div className='inputFormCA'>
                <input type="password" placeholder='Senha'/>
            </div>

            <div className='btnSubmitCA'>
            <button>Enviar</button>
            </div>

        </form>
    </div>
  </>
  )
}

export default CreateAccount;
