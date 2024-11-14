import { NavLink } from 'react-router-dom'
function Menu() {
  const menuItems = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Дрифт-такси',
      link: '/drift',
    },
    {
      title: 'Time-attack',
      link: '/timeattack',
    },
    {
      title: 'Forza karting',
      link: '/forza',
    },
  ]
  return (
    <nav>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.link}>
            <NavLink
              className={({ isActive }) =>
                `menu__item ${isActive ? ' menu__item-active' : ''}`
              }
              key={item.link}
              to={item.link}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
