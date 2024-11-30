import './AsideBar.css'

function AsideBar() {

  return (
  <>
<div class="menu-lateral">
    <div className='imgContainer'>
        <img src="src/assets/logoiSide.jpg" alt="" />

    </div>
    <ul>
      <li><a href="/menuprincipal">Aulas</a></li>
      <li><a href="/perfil">Minha conta</a></li>
    </ul>
    <p className='quit'><a href="/">Sair</a></p>
  </div>
  </>
  )
}

export default AsideBar;
