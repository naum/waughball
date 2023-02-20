<script>
  import wordstubs from './wordstubs12.json'
  import { sample } from './lib/neumann.js'
  console.log(`wordstubs.length=${wordstubs.length}`)
  let wordpool = []
  const drawNames = () => {
    wordpool = []
    for (let i = 0; i < 48; i += 1) {
      wordpool.push(sample(wordstubs))
    }
    wordpool = wordpool.sort()
  }
  drawNames()  
</script>

<main>
  <h1>waughball</h1>
  <article>
    {wordpool.join(' ')}
  </article>
  <button on:click={drawNames}>
    More words!
  </button>
  <footer>
    A GNT creation &copy;2023
  </footer>
</main>

<style>
  article {
    font-size: 1.33rem;
  }
  article, h1 {
    text-align: center;
  }
  button {
    text-align: center;
  }
  footer {
    color: var(--cmed);
    font-size: 0.75rem;
    font-style: italic;
    text-align: center;
  }
  h1 {
    color: var(--cemph);
    font-size: 3.16rem;
    margin-top: 0.75rem;
    text-shadow: 
      -1px -1px 0 var(--cfg),
      1px -1px 0 var(--cfg),
      -1px 1px 0 var(--cfg),
      1px 1px 0 var(--cfg);
      
  }
  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  main > * {
    padding: 0.5rem 1rem;
  }
</style>
