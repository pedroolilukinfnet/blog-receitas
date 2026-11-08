import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Lista from "../components/lista";
import Seo from "../components/seo";

export default function IndexPage({ data }) {
    return (
        <Layout>
            <h3>Receitas</h3>
            <p>Anotei aqui as que eu já fiz mais de uma vez.</p>
            <StaticImage src="../images/bolo.png" alt="Bolo de cenoura" width={480} />
            <h4>Últimas atualizações</h4>
            <Lista nodes={data.allMarkdownRemark.nodes} />
        </Layout>
    )
}

export const Head = () => (
    <Seo
        title="Início"
        description="Lista das receitas, com o título e a data da última atualização."
    />
)

// no máximo as 20 mais recentes
export const query = graphql`
    query ListaReceitas {
        allMarkdownRemark(sort: { frontmatter: { atualizado: DESC } }, limit: 20) {
            nodes {
                id
                frontmatter {
                    title
                    slug
                    atualizado(formatString: "DD/MM/YYYY")
                }
            }
        }
    }
`
