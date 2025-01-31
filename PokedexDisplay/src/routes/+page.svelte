<script>
  import PokeDex from "./PokeDex.svelte";
  import pokemonLogo from "./pokemonlogo.png";
</script>

<div class="center-image">
  <img src={pokemonLogo} alt="Picture of Pokemon logo" width="400px" />
</div>

<PokeDex />

<footer>
  <p>
    Note: Not all Pokemon are in the PokeAPI. Some Pokemon will not have their
    information displayed. Selecting one of these Pokemon will break the page.
    Please reload it to fix.
  </p>
</footer>

<style>
  .center-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer {
    background-color: #4e4e4e;
    color: white;
    text-align: center;

    bottom: 0;
    width: 100%;
  }

  p {
    margin: 0;
  }
</style>
