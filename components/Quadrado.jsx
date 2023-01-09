import styles from "../styles/Quadrado.module.css";

export default function Quadrado({ black }) {
    return (
        <div 
        className={styles.quadrado}
        style={{ backgroundColor: black ? "#000" : "#FFF" }}>

        </div>
    )
}