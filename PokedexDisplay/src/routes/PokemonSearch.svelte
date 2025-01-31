<script>
  import SearchDisplay from "./SearchDisplay.svelte";
  let userInput = "";
  let pokemon;

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:4000/api/pokedex/${userInput.toLowerCase()}`
    );
    const data = await response.json();
    pokemon = data;
    console.log(data);
  }
</script>

<div>
  <form on:submit={handleSubmit}>
    <label for="input"><b>Enter Pokemon to Search</b>:</label>
    <input
      id="input"
      type="text"
      bind:value={userInput}
      placeholder="Type a Pokemon name from the list here..."
    />
    <button type="submit">Search!</button>
  </form>
</div>

<SearchDisplay {pokemon} />

<style>
  label {
    font-size: 20px;
  }
  input {
    width: 15%;
  }
  div {
    text-align: center;
    background-color: rgb(201, 71, 32);
  }
</style>
