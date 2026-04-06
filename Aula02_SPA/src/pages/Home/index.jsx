import fundo from "../../assets/livro.png"

export default function Home() {
  return (
    <div>
      <h2>Página Inicial</h2>

      <img src={fundo} alt="Pôster" className="poster" />

      <p>
        I Want to Eat Your Pancreas é uma história emocionante sobre amizade,
        tempo e a importância de viver cada momento.
      </p>

      <p>
        O filme acompanha Haruki, um jovem reservado, e Sakura, uma garota cheia
        de vida que guarda um grande segredo.
      </p>

      <p>
        Mesmo sendo muito diferentes, os dois criam uma conexão inesperada que
        transforma completamente suas vidas.
      </p>

      <p>
        A obra mistura momentos leves com reflexões profundas sobre a vida,
        o tempo e as relações humanas.
      </p>
    </div>
  )
}