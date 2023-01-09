import Quadrado from "./quadrado"

export default function Tabuleiro() {
    return (
        <div className="tabueiro">
            <div className="linha">
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
            </div>            
            <div className="linha">
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
            </div>
            <div className="linha">
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
            </div>
            <div className="linha">
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
            </div>
            <div className="linha">
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
            </div>
            <div className="linha">
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
            </div>            
            <div className="linha">
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
            </div>
            <div className="linha">
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
                <Quadrado black/>
                <Quadrado />
            </div>                    
        </div>
    )
}