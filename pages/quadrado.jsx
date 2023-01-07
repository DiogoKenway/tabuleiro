export default function Quadrado({ black }) {
    return (
        <div className={`${black ? "black" : "white" }`}></div>
    )
}