import AsideBar from '../../components/asideBar/AsideBar';
import './MenuPrincipal.css'

function MenuPrincipal() {

  return (
  <div className='containerMP'>
    <AsideBar/>
    <div className='logica'>
        <h1>Logica de programação</h1>
        <ul className='listaVideos'>
            <li className='videos'>Video 1</li>
            <li className='videos'>Video 2</li>
            <li className='videos'>Video 3</li>
        </ul>
    </div>
  </div>
  )
}

export default MenuPrincipal;
