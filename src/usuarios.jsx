let usuarios=[
    {nome: "Cristopher", sobrenome:"Paiva", idade: 26, adm: true},
    {nome: "Julia", sobrenome:"Silva", idade: 21, adm: false},
    {nome: "Pedro", sobrenome:"de Mello", idade: 29, adm: false},
    {nome: "Silvana", sobrenome:"Marques", idade: 32, adm: true},
    {nome: "Gabrielle", sobrenome:"Ramos", idade: 27, adm: true}
]


export default function Usuarios(){
    const saida = usuarios.map(user =>(
        <li key={user.nome}>
            {user.nome} {user.sobrenome}
        </li>
    ));

    return(
        <>
        <ul>
            {saida}
        </ul>
        </>
    )
}