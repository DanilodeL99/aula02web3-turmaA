import sakura from "../../assets/sakua.png"
import haruki from "../../assets/haruki.png"

export default function Personagens() {
  return (
    <div>
      <h2>Personagens</h2>

      <div className="personagens-container">

        <div className="card">
          <h3>Sakura Yamauchi</h3>
          <img src={sakura} alt="Sakura" />
          <p>
            Uma garota extrovertida, energética e cheia de vida, mesmo sabendo
            que seu tempo é limitado.
          </p>
        </div>

        <div className="card">
          <h3>Haruki Shiga</h3>
          <img src={haruki} alt="Haruki" />
          <p>
            Um garoto quieto e solitário que descobre novos sentimentos ao se
            aproximar de Sakura.
          </p>
        </div>

      </div>
    </div>
  )
}