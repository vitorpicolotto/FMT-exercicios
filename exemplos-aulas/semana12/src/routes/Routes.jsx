import {createBrowserRouter} from 'react-router-dom'
//importação das páginas
import App from '../App.jsx';
import Home from "../pages/Home.jsx";
import Cadastro from "../pages/Cadastro.jsx";
import Lista from "../pages/Lista.jsx";


const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/lista",
        element: <Lista />
      },
    ],
  },
]);

export default routers