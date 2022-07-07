import styles from "./Card.module.css";
const Card = (props) => {
    return(<section className={styles.section}>{props.children}</section>)
}

export default Card;