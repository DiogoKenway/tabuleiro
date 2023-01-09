import Linha from "../components/Linha"

export default function Home() {
  return (
    <div className="tabuleiro">
      <Linha black/>
      <Linha />
      <Linha black/>
      <Linha />
      <Linha black/>
      <Linha />
      <Linha black/>
      <Linha />
    </div>
  )
}
