import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Site from "./pages/Site";
import AddEvento from "./pages/Evento/AddEvento";
import ListaDeEventos from "./pages/Evento/ListaDeEventos";
import EditEvento from "./pages/Evento/EditEvento";
import AddSetor from "./pages/Setor/AddSetor";
import ListaDeSetores from "./pages/Setor/ListaDeSetores";
import EditSetor from "./pages/Setor/EditSetor";
import AddIngresso from "./pages/Ingresso/AddIngresso";
import ListaDeIngressos from "./pages/Ingresso/ListaDeIngressos";
import EditIngresso from "./pages/Ingresso/EditIngresso";
import Eventos from "./pages/Site/Eventos";
import DetalhesDoEvento from "./pages/Site/DetalhesDoEvento";
import Pedidos from "./pages/Pedidos";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="site" Component={ Site }>
                  <Route path="eventos" Component={ Eventos } />
                  <Route path="eventos/:id" Component={DetalhesDoEvento}/>
                </Route>

                <Route path="/" Component={ Layout }>
                  {/* Evento */}
                  <Route path="evento/listar" Component={ ListaDeEventos } />
                  <Route path="evento/cadastrar" Component={ AddEvento } />
                  <Route path="evento/atualizar/:eventoId" Component={ EditEvento } />
                  
                  {/* Setor */}
                  <Route path="evento/:eventoId/setor/listar" Component={ ListaDeSetores } />
                  <Route path="evento/:eventoId/setor/cadastrar" Component={ AddSetor } />
                  <Route path="setor/:setorId/atualizar" Component={ EditSetor } />

                  {/* Ingresso */}
                  <Route path="setor/ingresso/listar/:setorId" Component={ ListaDeIngressos } />
                  <Route path="setor/ingresso/cadastrar/:setorId" Component={ AddIngresso } />
                  <Route path="setor/ingresso/atualizar/:ingressoId" Component={ EditIngresso } />

                  {/* Pedido */}
                  <Route path="pedidos" Component={ Pedidos } />

                </Route>
            </Routes>
        </Router>
    );
}
