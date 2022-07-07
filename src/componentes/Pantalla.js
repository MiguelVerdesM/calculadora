import styles from './Pantalla.module.css'

const Pantalla = (props) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.h2}>{props.inp1 + props.oper + props.inp2}</h2>
    </section>
  );
};

export default Pantalla;
