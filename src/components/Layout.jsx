import { Outlet } from 'react-router-dom'
import Headers from './Header'

const Layout = () => {
  return (
    <main>
      <Headers />
      <Outlet />
    </main>
  )
}

export default Layout