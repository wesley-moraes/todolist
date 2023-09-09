const RenderCond = ({x, y}) => {
    //const x = 1

    return(
        <div>
            {x > 5 && <p>X é maior que 5</p>}
            {x > 5 ? <p>X é um numero alto</p> : <p>X é um número baixo</p>}
            <p>O Valor de y é: {y}</p>
        </div>
    )
}

export default RenderCond