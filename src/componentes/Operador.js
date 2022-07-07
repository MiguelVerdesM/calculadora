import styles from './Operador.module.css'
const Operador = (props) => {
    const onClickHandler = () => {
        props.opeOnClick(props.ope);
    }
    return (
        <button className={styles.boton} onClick={onClickHandler}>{props.ope}</button>
    )
}

export default Operador;