
import NavBar from './shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer';

const MainLayout = () => {
    return (
        <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;