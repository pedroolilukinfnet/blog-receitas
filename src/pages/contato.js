import React from "react";
import Layout from "../components/layout";
import Formulario from "../components/formulario";
import Seo from "../components/seo";

export default function Contato() {
    return (
        <Layout>
            <h3>Contato</h3>
            <p>Se alguma receita não ficou clara, manda uma mensagem.</p>
            <Formulario />
        </Layout>
    )
}

export const Head = () => (
    <Seo
        title="Contato"
        description="Formulário pra mandar uma mensagem sobre as receitas."
    />
)
