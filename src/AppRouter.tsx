import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import AddEvento from "./pages/Evento/AddEvento";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={ Layout }>
                  <Route path="evento/cadastrar" Component={ AddEvento } />
                    {/* <Route
                        path="/"
                        element={<Navigate to="/enderecos/lista" replace />}
                    />
                    
                    <Route path="endereco/cadastro" Component={ CadastroEndereco } />
                    <Route path="endereco/cadastro/:id" Component={ CadastroEndereco } /> */}
                </Route>
            </Routes>
        </Router>
    );
}
