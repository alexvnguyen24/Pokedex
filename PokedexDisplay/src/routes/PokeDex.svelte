<script>
  import FavoritesList from "./FavoritesList.svelte";
  import PokemonList from "./PokemonList.svelte";
  import PokemonSearch from "./PokemonSearch.svelte";
</script>

<body>
  <PokemonList />
  <hr />
  <PokemonSearch />
  <hr />
  <FavoritesList />
</body>

<style>
  body {
    background-color: rgb(201, 71, 32);
  }
</style>
