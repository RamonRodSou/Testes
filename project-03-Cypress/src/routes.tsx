import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PokemonDetails from "./pages/PokemonDetails";

import { fetchPokemonDetails, fetchPokemonList } from "./services/PokemonService";
import Dashboard from "./pages/Dashboard";

export default function MainRoutes () {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard fetchPokemonList={fetchPokemonList} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/pokemon-details/:id" element={<PokemonDetails fetchPokemonDetails={fetchPokemonDetails} />} />

            <Route path="/*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
    )
}