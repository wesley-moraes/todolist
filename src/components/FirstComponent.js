import AnotherFuncion from './AnotherFuncion'
import styles from './FirstComponent.module.css'

function FirstComponent(){
    return(
        <div className={styles.first_component}>
            <p>Primeiro Componente</p>

            <AnotherFuncion />
        </div>
    )
}

export default FirstComponent