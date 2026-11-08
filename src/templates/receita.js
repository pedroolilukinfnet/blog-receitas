import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Artigo from "../components/artigo";
import Seo from "../components/seo";

export default function Receita({ data }) {
    const post = data.markdownRemark;

    return (
        <Layout>
            <Artigo
                title={post.frontmatter.title}
                atualizado={post.frontmatter.atualizado}
                html={post.html}
            />
        </Layout>
    )
}

export const Head = ({ data }) => (
    <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
    />
)

export const query = graphql`
    query Receita($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                description
                atualizado(formatString: "DD/MM/YYYY")
            }
        }
    }
`
