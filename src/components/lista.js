import React from "react";
import { Link } from "gatsby";

export default function Lista({ nodes }) {
    return (
        <ul className="lista">
            {nodes.map(node => (
                <li key={node.id}>
                    <Link to={"/receitas/" + node.frontmatter.slug}>
                        {node.frontmatter.title}
                    </Link>
                    <span>atualizado em {node.frontmatter.atualizado}</span>
                </li>
            ))}
        </ul>
    )
}
