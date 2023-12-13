import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Menu {
  icone: string;
  texto: string;
  para: string;
  ativo: boolean;
}

export default function MenuLateral() {
  const location = useLocation();
  const [menu, setMenu] = useState<Menu[]>([
    {
      icone: 'ri-user-line',
      texto: 'Eventos',
      para: '/evento/listar',
      ativo: false
    }
  ]);

  useEffect(() => {
    setMenu(menu.map((item) => {
      item.ativo = item.para == location.pathname;
      return item;
    }))
  }, [location.pathname]);

  return (
    <div className="iq-sidebar">
      <div className="iq-sidebar-logo d-flex justify-content-between">
        <a href="index.html">
          <img src="images/logo.png" className="img-fluid" alt="" />
          <span>Sofbox</span>
        </a>
        <div className="iq-menu-bt align-self-center">
          <div className="wrapper-menu">
            <div className="line-menu half start" />
            <div className="line-menu" />
            <div className="line-menu half end" />
          </div>
        </div>
      </div>
      <div id="sidebar-scrollbar">
        <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">
            <li className="iq-menu-title">
              <i className="ri-separator" />
              <span>Menu</span>
            </li>
            {menu.map((item, index) => {
              return (
                <li key={index} className={item.ativo ? 'active' : ''}>
                  <Link to={item.para} className="iq-waves-effect">
                    <i className={item.icone}></i>
                    <span>{item.texto}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="p-3" />
      </div>
    </div>
  );
}