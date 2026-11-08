import React, { useState } from "react";
import styled from "@emotion/styled";

const Form = styled.form`
    max-width: 420px;

    label {
        display: block;
        margin-bottom: 12px;
    }

    input, textarea {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 8px;
        margin-top: 4px;
    }

    textarea {
        min-height: 100px;
    }

    button {
        padding: 8px 16px;
    }

    @media (max-width: 600px) {
        max-width: 100%;

        button {
            width: 100%;
            padding: 12px;
        }
    }
`;

const Erro = styled.small`
    color: red;
`;

const Aviso = styled.p`
    background-color: aquamarine;
    padding: 8px;
`;

export default function Formulario() {
    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
    const [erros, setErros] = useState({});
    const [aviso, setAviso] = useState("");
    const [enviando, setEnviando] = useState(false);

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    function validar() {
        const e = {};
        if (form.nome.trim() === "") {
            e.nome = "Falta o nome.";
        }
        if (form.email.indexOf("@") < 0 || form.email.indexOf(".") < 0) {
            e.email = "E-mail inválido.";
        }
        if (form.mensagem.trim().length < 5) {
            e.mensagem = "A mensagem está curta demais.";
        }
        return e;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const e = validar();
        setErros(e);
        setAviso("");
        if (Object.keys(e).length > 0) {
            return;
        }

        setEnviando(true);
        // httpbin devolve o que a gente mandou, só pra testar o envio
        fetch("https://httpbin.org/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("erro");
            }
            return res.json();
        })
        .then(() => {
            setAviso("Mensagem enviada.");
            setForm({ nome: "", email: "", mensagem: "" });
        })
        .catch(() => {
            setAviso("Deu erro no envio.");
        })
        .finally(() => {
            setEnviando(false);
        });
    }

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <label>
                Nome
                <input name="nome" value={form.nome} onChange={handleChange} />
                {erros.nome && <Erro>{erros.nome}</Erro>}
            </label>
            <label>
                E-mail
                <input name="email" value={form.email} onChange={handleChange} />
                {erros.email && <Erro>{erros.email}</Erro>}
            </label>
            <label>
                Mensagem
                <textarea name="mensagem" value={form.mensagem} onChange={handleChange} />
                {erros.mensagem && <Erro>{erros.mensagem}</Erro>}
            </label>
            <button type="submit" disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar"}
            </button>
            {aviso && <Aviso>{aviso}</Aviso>}
        </Form>
    )
}
