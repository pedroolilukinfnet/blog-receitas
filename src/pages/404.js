import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function NotFoundPage() {
    return (
        <Layout>
            <h3>Página não encontrada</h3>
            <p>O endereço não existe.</p>
            <Link to="/">Voltar para o início</Link>
        </Layout>
    )
}

export const Head = () => <Seo title="Página não encontrada" />
