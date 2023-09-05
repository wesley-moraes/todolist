const AnotherFuncion = () => {
    const handleClick = () => {
        console.log("Clicou no botao");
    }

    return(
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Button</button>
            {/* <button onClick={() => console.log("Evento no elemento")}>Evento no elemento</button> */}
        </div>
    );
};

export default AnotherFuncion