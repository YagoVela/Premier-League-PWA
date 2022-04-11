import React from 'react';

const HeadersMenu: React.FC = () => {
  return(
    <>
      <div className="menu">
        <ul className="grid">
          <li className="menu-li"><a href="#">Home</a></li>
          <li className="menu-li"><a href="#">Times</a></li>
          <li className="menu-li"><a href="#">Comunidade</a></li>
          <li className="menu-li"><a href="#">Vídeos</a></li>
          <li className="menu-li"><a href="#">Mais</a></li>
        </ul>
      </div>

       <div className="btn logo-desktop">
           <div className="button"><a href="/" target="_blank">No Room Racism</a></div>
       </div>
    </>
  )
}
export default HeadersMenu;
