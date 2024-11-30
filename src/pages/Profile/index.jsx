import AsideBar from '../../components/asideBar/AsideBar';
import './Profile.css'

function Profile() {

  return (
      <div className='containerPL'>
      <AsideBar/>
    <form action="#" method="post" className="formulario-perfil">
  <h2>Configurações de Perfil</h2>
      <div className="campo">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome"/>
      </div>
      
      <div className="campo">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" />
      </div>

      <div className="campo">
        <label for="senha">Senha</label>
        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
      </div>

      <button className="btn">Salvar Configurações</button>
    </form>
    </div>
  )
}

export default Profile;