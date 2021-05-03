<svelte:head>
  <title>New Card</title>
</svelte:head>

<h1 class="text-2xl font-extrabold mb-2 -mt-8">New Card</h1>

<form on:submit|preventDefault={newCard} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
            Owner
          </label>
          <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="card owner">
         
        </div>
      </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          UUID
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="uuid">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
          Current Balance
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="number" placeholder="balance">
      </div>
    </div>
    <div class="w-full">
        <div class="w-max float-right">
            <button type="submit" class=" py-2 px-8">Save </button>
        </div>
      </div>
    
  </form>
  <script>
      let card = {
          owner: "",
          uuid: "",
          balance: 0,
      }
      async function newCard() {

      }
  </script>