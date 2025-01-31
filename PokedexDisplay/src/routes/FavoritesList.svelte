<script>
  import { onMount } from "svelte";
  import { FavoritesStore } from "./store.js";

  onMount(async () => {
    const response = await fetch("http://localhost:4001/favorites");
    const data = await response.json();
    FavoritesStore.set(data);
  });

  async function removeFavorite(pokemonName) {
    try {
      const response = await fetch("http://localhost:4001/removefavorite", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: pokemonName }),
      });

      if (response.ok) {
        const updateResponse = await fetch("http://localhost:4001/favorites");
        const updateData = await updateResponse.json();
        FavoritesStore.set(updateData);
        console.log(`Removed ${pokemonName} from favorites.`);
      } else {
        throw new Error(
          `Error deleting ${pokemonName} in FavoritesList.svelte.`
        );
      }
    } catch (err) {
      console.error(err);
      throw new Error(
        `Error removing Pokemon from favorites list in FavoritesList.svelte.`
      );
    }
  }
</script>

<body>
  <h1>Your Favorite Pokemon</h1>

  <div class="button-grid">
    {#each $FavoritesStore as pokemon}
      {#if pokemon}
        {#each Object.keys(pokemon) as pokemonName}
          <button
            on:click={() => removeFavorite(pokemonName)}
            style="cursor: pointer;"
          >
            <b>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</b>
            <img
              src={pokemon[pokemonName].fronticon}
              alt="Pokemon home icon of {pokemonName}"
              width="100px;"
              height="100px;"
            />
          </button>
        {/each}
      {:else}
        <p>You have no Pokemon in your favorites list.</p>
      {/if}
    {/each}
  </div>
</body>

<style>
  button {
    cursor: pointer;
    background: none;
    border: none;
    display: block;
    font-size: 15px;
    margin-bottom: 5px;
  }
  body {
    text-align: center;
  }
  .button-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
  }
</style>
