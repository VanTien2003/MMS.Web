// Layouts
import { HeaderOnly } from "~/components/Layout"; 


// Pages
import Home from "~/pages/Home";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar";
import Navbar from "~/components/Layout/DefaultLayout/Navbar";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";


// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/sidebar', component: Sidebar },
    { path: '/navbar', component: Navbar },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }