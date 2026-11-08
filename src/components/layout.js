import React from "react";
import "./layout.css";
import Header from "./header";
import Footer from "./footer";

export default function Layout({children}) { //desestruturação do objeto props
    return (
        <main className="layout">
            {/* className para não colidir com a palavra class do JS */}
            <Header />
            <div className="main">
                {children}
            </div>
            <Footer copyRightYear={2026} />
        </main>
    )
}
