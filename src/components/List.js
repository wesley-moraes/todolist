const List = () => {
    const items = [{
        id: 1,
        name: "Wesley"
    },
    {
        id: 2,
        name: "Paulo"
    },
    {
        id: 3,
        name: "Cilda"
    }

    ]

    return(
        <div>
            {
                items.map((item)=>( /*Como está retornando um objeto tem que abrir parenteses, 
            Um parenteses para a funcao map, um pro argumento e outro pro retorno*/
                    <p key={item.id}>{item.id} - {item.name}</p>
                ))
            }
        </div>
    )
}

export default List