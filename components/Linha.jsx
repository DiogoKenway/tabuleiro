import Quadrado from "./Quadrado";

export default function Linha(props) {
    return (
        <div className="linha">            
            <Quadrado black={!props.black}/>
            <Quadrado black={props.black}/>
            <Quadrado black={!props.black}/>
            <Quadrado black={props.black}/>
            <Quadrado black={!props.black}/>
            <Quadrado black={props.black}/>
            <Quadrado black={!props.black}/>
            <Quadrado black={props.black}/>            
        </div>
    )
}