import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

const Root = () => {
  return (
    <div>
      <Menu />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Root
