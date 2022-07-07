
import styles from "./Numero.module.css";
const Numero = (props) => {
    const onClickHandler = () => {
        props.numOnClick(props.num)
    }
    return (
        <button className={styles.boton} onClick={onClickHandler}>{props.num}</button>
    
    )
}

export default Numero;