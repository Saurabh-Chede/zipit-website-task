import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';

export default function DashboardLayout() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}
