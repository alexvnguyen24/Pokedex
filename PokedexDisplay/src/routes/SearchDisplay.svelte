<script>
  export let pokemon;
  import { FavoritesStore } from "./store.js";

  async function addToFavorites() {
    try {
      const response = await fetch("http://localhost:4001/addfavorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: pokemon.name }),
      });

      if (response.ok) {
        const updateResponse = await fetch("http://localhost:4001/favorites");
        const updateData = await updateResponse.json();
        FavoritesStore.set(updateData);
        console.log(`Added ${pokemon.name} to favorites.`);
      } else {
        throw new Error(
          `Error adding ${pokemon.name} in SearchDisplay.svelte.`
        );
      }
    } catch (err) {
      throw new Error(
        `Error adding to favorites in SearchDisplay.svelte: ${err}`
      );
    }
  }
</script>

<body>
  {#if pokemon}
    <div class="info-border">
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <p>
        <b>Type(s)</b>:
        {#each pokemon.types as types, index}
          <span class={types.type.name}
            >{types.type.name.charAt(0).toUpperCase() +
              types.type.name.slice(1)}
          </span>
          {#if index < pokemon.types.length - 1},
          {/if}
        {/each}
      </p>
      <p>
        <b>Abilities</b>:
        {#each pokemon.abilities as ability, index}
          <span class={ability.ability.name}>
            {ability.ability.name.charAt(0).toUpperCase() +
              ability.ability.name.slice(1)}
            {#if index < pokemon.abilities.length - 1},
            {/if}
          </span>
        {/each}
      </p>
      <p>
        <b>Height</b>: {pokemon.height / 10} m
      </p>
      <p>
        <b>Weight</b>: {pokemon.weight / 10} kg
      </p>
      <img
        src={pokemon.sprites.front_default}
        alt="No front sprite for {pokemon.name}"
      />
      <img
        src={pokemon.sprites.back_default}
        alt="No back sprite for {pokemon.name}"
      />
      <br />
      <button on:click={addToFavorites}>Add to Favorites</button>
    </div>
  {/if}
</body>

<style>
  .info-border {
    border: 3px solid black;
  }
  img {
    width: 150px;
    height: 150px;
  }
  body {
    text-align: center;
    background-color: rgb(235, 153, 132);
  }
  .normal {
    color: #a8a77a;
  }
  .fire {
    color: #ee8130;
  }
  .water {
    color: #6390f0;
  }
  .electric {
    color: #f7d02c;
  }
  .grass {
    color: #7ac74c;
  }
  .ice {
    color: #96d9d6;
  }
  .fighting {
    color: #c22e28;
  }
  .poison {
    color: #a33ea1;
  }
  .ground {
    color: #e2bf65;
  }
  .flying {
    color: #a98ff3;
  }
  .psychic {
    color: #f95587;
  }
  .bug {
    color: #a6b91a;
  }
  .rock {
    color: #b6a136;
  }
  .ghost {
    color: #735797;
  }
  .dragon {
    color: #6f35fc;
  }
  .dark {
    color: #705746;
  }
  .steel {
    color: #b7b7ce;
  }
  .fairy {
    color: #d685ad;
  }
</style>
