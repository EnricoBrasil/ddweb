import './Home.css'
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import { IoPersonCircleOutline } from "react-icons/io5";

function Home() {

  return (
  <>
    <HeaderLogin/>
      <div className="container">
        <form >
            <div className='iconeForm'>
            <IoPersonCircleOutline className='iconAvatar'/>
            </div>

            <div className='inputForm'>
                <input type="email" placeholder='Usuario' />
            </div>

            <div className='inputForm'>
                <input type="password" placeholder='Senha'/>
            </div>

            <div className='forgotPassword'>
                <a href="esqueciSenha">Esqueceu a senha?</a>
            </div>

            <div className='btnSubmit'>
            <button><a href="/menuprincipal">Enviar</a></button>
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
