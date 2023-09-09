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
                items.map((item)=>(
                    <p>{item.id} - {item.name}</p>
                ))
            }
        </div>
    )
}

export default List