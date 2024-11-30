import AsideBar from '../../components/asideBar/AsideBar';
import './MenuPrincipal.css'

function MenuPrincipal() {

  return (
  <div className='containerMP'>
    <AsideBar/>
    <div className='logica'>
        <h1>Logica de programação</h1>
        <ul className='listaVideos'>
            <li className='videos'><a href="https://www.youtube.com/watch?v=gMxQ8vxH9Vk">Lógica de programação, por onde começar ? (Guia RÁPIDO de estudos completo para INICIANTES)</a></li>
            <li className='videos'><a href="https://www.youtube.com/watch?v=FF1wTboPbkc&t=2s">O que é Lógica de Programação | Duvido você não entender agora</a></li>
            <li className='videos'><a href="https://www.youtube.com/watch?v=AhHPE_93nAk">Aprendendo Lógica de Programação</a></li>
        </ul>
        <h1>Front-end</h1>
        <ul className='listaVideos'>
            <li className='videos'><a href="https://www.youtube.com/watch?v=3oSIqIqzN3M">5 MINUTOS DE HTML PARA INICIAR EM PROGRAMAÇÃO!</a></li>
            <li className='videos'><a href="https://www.youtube.com/watch?v=BKATrAAWrRo">CSS EM 15 MINUTOS! ESTILIZAÇÃO, POSITION E MAIS..</a></li>
            <li className='videos'><a href="https://www.youtube.com/watch?v=WRlfwBof66s">Aprenda JAVASCRIPT em apenas 5 MINUTOS (2023)</a></li>
        </ul>
        <h1>Back-end</h1>
        <ul className='listaVideos'>
            <li className='videos'><a href="https://www.youtube.com/watch?v=bhXaHKtklV8">Programação Back-end</a></li>
            <li className='videos'><a href="https://www.youtube.com/watch?v=LNhslFddZ-k">Guia de estudos - ̗̀ BACKEND ̖́-</a></li>
            <li className='videos'><a href="https://www.youtube.com/watch?v=wXMlMsDvk2M">Como se tornar um desenvolvedor BACKEND? (Passo a passo / Roadmap)</a></li>
        </ul>
    </div>
  </div>
  )
}

export default MenuPrincipal;
