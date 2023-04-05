import styles from "./ItemsList.module.css";

const ItemsList = ({ saludo }) => {
	return <div className={styles.saludo}>{saludo}</div>;
};

export default ItemsList;
