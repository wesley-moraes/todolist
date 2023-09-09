import { useState } from "react";

const Hooks = () =>{

    let idade = 30
    const [novaIdade, setNovaIdade] = useState(14)

    const changeAge = () =>{
        idade = 31;
        console.log(idade)
    }

    const changeNewAge = () =>{
        setNovaIdade(34)
    }

    return(
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>Nova Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar idade</button>
        </div>
    )
}

export default Hooks