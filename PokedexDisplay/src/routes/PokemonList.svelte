<script>
  import { onMount } from "svelte";
  import DropDisplay from "./DropDisplay.svelte";
  import {
    AlolaStore,
    GalarStore,
    HisuiStore,
    HoennStore,
    JohtoStore,
    KalosStore,
    KantoStore,
    PaldeaStore,
    SinnohStore,
    UnovaStore,
  } from "./store.js";

  let selectedName = "";
  let pokemon;
  onMount(async () => {
    try {
      const kantoResponse = await fetch("http://localhost:4002/api/kanto");
      const kantoData = await kantoResponse.json();
      KantoStore.set(kantoData);

      const johtoResponse = await fetch("http://localhost:4002/api/johto");
      const johtoData = await johtoResponse.json();
      JohtoStore.set(johtoData);

      const hoennResponse = await fetch("http://localhost:4002/api/hoenn");
      const hoennData = await hoennResponse.json();
      HoennStore.set(hoennData);

      const sinnohResponse = await fetch("http://localhost:4002/api/sinnoh");
      const sinnohData = await sinnohResponse.json();
      SinnohStore.set(sinnohData);

      const unovaResponse = await fetch("http://localhost:4002/api/unova");
      const unovaData = await unovaResponse.json();
      UnovaStore.set(unovaData);

      const kalosResponse = await fetch("http://localhost:4002/api/kalos");
      const kalosData = await kalosResponse.json();
      KalosStore.set(kalosData);

      const alolaResponse = await fetch("http://localhost:4002/api/alola");
      const alolaData = await alolaResponse.json();
      AlolaStore.set(alolaData);

      const galarResponse = await fetch("http://localhost:4002/api/galar");
      const galarData = await galarResponse.json();
      GalarStore.set(galarData);

      const hisuiResponse = await fetch("http://localhost:4002/api/hisui");
      const hisuiData = await hisuiResponse.json();
      HisuiStore.set(hisuiData);

      const paldeaResponse = await fetch("http://localhost:4002/api/paldea");
      const paldeaData = await paldeaResponse.json();
      PaldeaStore.set(paldeaData);
    } catch (err) {
      throw new Error(`Error getting data. ${err}`);
    }
  });

  async function nameSelected(event) {
    selectedName = event.target.value;
    try {
      const response = await fetch(
        `http://localhost:4000/api/pokedex/${selectedName.toLowerCase()}`
      );
      const data = await response.json();
      pokemon = data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
</script>

<div>
  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #001-151 (Kanto)</option>
    {#each $KantoStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #152-251 (Johto)</option>
    {#each $JohtoStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #252-386 (Hoenn)</option>
    {#each $HoennStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #387-493 (Sinnoh)</option>
    {#each $SinnohStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #494-649 (Unova)</option>
    {#each $UnovaStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #650-721 (Kalos)</option>
    {#each $KalosStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #722-809 (Alola)</option>
    {#each $AlolaStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #810-884 (Galar)</option>
    {#each $GalarStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #885-905 (Hisui)</option>
    {#each $HisuiStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <select on:change={nameSelected}>
    <option value="" disabled selected>Pokémon #906-1025 (Paldea)</option>
    {#each $PaldeaStore as name}
      <option value={name}>{name}</option>
    {/each}
  </select>
</div>
<DropDisplay {pokemon} />

<style>
  select {
    text-align: center;
  }
  div {
    text-align: center;
    background-color: rgb(201, 71, 32);
  }
</style>
