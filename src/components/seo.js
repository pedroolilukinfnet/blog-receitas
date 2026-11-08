import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Seo({ title, description }) {
    const data = useStaticQuery(graphql`
        query Seo {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                    image
                }
            }
        }
    `);

    const site = data.site.siteMetadata;
    const titulo = title ? title + " | " + site.title : site.title;
    const descricao = description || site.description;
    const imagem = site.siteUrl + site.image;

    return (
        <>
            <title>{titulo}</title>
            <meta name="description" content={descricao} />
            <meta property="og:title" content={titulo} />
            <meta property="og:description" content={descricao} />
            <meta property="og:image" content={imagem} />
        </>
    )
}
