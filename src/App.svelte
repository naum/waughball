<script>
  import wordstubs from './wordstubs.json'
  import { sample } from './lib/neumann.js'
  console.log(`wordstubs.length=${wordstubs.length}`)
  let theword = ''
  const drawName = () => {
    theword = sample(wordstubs)
  }
  drawName()
</script>

<main>
  <h1>waughball</h1>
  <section>
    {theword}
  </section>
  <button on:click={drawName}>
    Word!
  </button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  main > * {
    padding: 0.5rem 1rem;
  }
</style>
