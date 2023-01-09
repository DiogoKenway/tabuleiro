import Quadrado from "./Quadrado";
import styles from "../styles/Linha.module.css";

export default function Linha({ black }) {
    return (
        <div className={styles.linha}>            
            <Quadrado black={!black}/>
            <Quadrado black={black}/>
            <Quadrado black={!black}/>
            <Quadrado black={black}/>
            <Quadrado black={!black}/>
            <Quadrado black={black}/>
            <Quadrado black={!black}/>
            <Quadrado black={black}/>            
        </div>
    )
}