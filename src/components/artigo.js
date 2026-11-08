import React from "react";

export default function Artigo({ title, atualizado, html }) {
    return (
        <article>
            <div style={{ backgroundColor: "lightblue", margin: "10px", padding: "5px" }}>
                <h3>{title}</h3>
            </div>
            <p>Atualizado em {atualizado}</p>
            {/* html gerado pelo markdown */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    )
}
