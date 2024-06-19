import { useState } from "react";

const Exercicios = () => {
    const [color, setColor] = useState("with");

    return (
        <>
            <p style={{ color }}>Cristopher Paiva</p>
            <button
                onClick={() => setColor((color) => (color === "with" ? "red" : "with"))}
            >
                Mudar cor
            </button>
        </>
    );
};


const Exercicios2 = ({ src, data, descricao, nome }) => {
    return (
        <>
            <img src={src} alt="Imagem" />
            <p>{data}</p>
            <p>{descricao}</p>
            <p>{nome}</p>
        </>
    );
};

const postagens = [
    {
        src: "/vite.svg",
        data: "01/01/2022",
        descricao: "",
        nome: "Cristopher Paiva",
    },
    {
        src: "/vite.svg",
        data: "02/01/2022",
        descricao: "Descrição 2",
        nome: "Fulano de tal",
    },
    {
        src: "/vite.svg",
        data: "03/01/2022",
        descricao: "Descrição 3",
        nome: "Fulana almeida",
    },
    {
        src: "/vite.svg",
        data: "04/01/2022",
        descricao: "Descrição 4",
        nome: "Mengano de mello",
    },
    {
        src: "/vite.svg",
        data: "05/01/2022",
        descricao: "Descrição 5",
        nome: "Ciclano demais",
    },
];

function Postagens() {
    return (
        <div>
            {postagens.map((postagem, index) => (
                <Exercicios2 key={index} {...postagem} />
            ))}
        </div>
    );
}

const Exercicios3 = () => {
    const [numero, setNumero] = useState(10);

    return (
        <>
            <p>{numero}</p>
            <button onClick={() => setNumero(numero + 10)}>Adicionar 10</button>
        </>
    );
};

export default Exercicios;
export { Exercicios2 };
export { Postagens };
export { Exercicios3 };
