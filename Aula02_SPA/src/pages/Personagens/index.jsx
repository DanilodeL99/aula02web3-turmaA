import sakura from "../../assets/sakura.png"
import haruki from "../../assets/haruki.png"
import kyoko from "../../assets/kyoko.png"

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
          <p>
            Ela gosta de aproveitar cada momento ao máximo e tem uma personalidade
            que marca todos ao seu redor.
          </p>
        </div>

        <div className="card">
          <h3>Haruki Shiga</h3>
          <img src={haruki} alt="Haruki" />
          <p>
            Um garoto quieto e solitário que descobre novos sentimentos ao se
            aproximar de Sakura.
          </p>
          <p>
            Com o tempo, ele começa a mudar e passa a entender melhor o valor
            das relações e da amizade.
          </p>
        </div>

        <div className="card">
          <h3>Kyoko Takimoto</h3>
          <img src={kyoko} alt="Kyoko" />
          <p>
            Amiga de Sakura, sempre presente e preocupada com quem gosta.
          </p>
          <p>
            Sua personalidade forte e direta mostra um lado mais realista da história,
            ajudando a equilibrar os acontecimentos.
          </p>
        </div>

      </div>
    </div>
  )
}