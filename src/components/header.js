import React from "react";
import { Link } from "gatsby";

export default function Header() {
    return (
        <div className="header">
            <h3>Caderno de receitas</h3>
            <nav className="topnav">
                <Link to="/">Início</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </div>
    )
}
