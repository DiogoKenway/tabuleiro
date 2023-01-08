import Quadrado from "./quadrado"

export default function Tabuleiro() {
    return (
        <div className="tabueiro">
            <div className="linha">
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
            </div>            
            <div className="linha">
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
            </div>
            <div className="linha">
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
            </div>
            <div className="linha">
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
            </div>
            <div className="linha">
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
            </div>
            <div className="linha">
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
            </div>            
            <div className="linha">
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
            </div>
            <div className="linha">
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
                <Quadrado black/>
                <Quadrado white/>
            </div>                    
        </div>
    )
}