<script context="module">
		export async function load({ fetch }) {
			let transactions;
	
			try {
				transactions = await fetch(`http://localhost:6600/api/transactions`);
				transactions = await transactions.json();
			} catch (e) {
				console.log(e);
			}
			return {
				props: {
					transactions
				}
			};
		}
</script>
<script>
  export let transactions;
  console.log(transactions);
</script>

<svelte:head>
  <title>RFIDs Data View</title>
</svelte:head>
<h1 class="text-2xl font-extrabold mb-2 -mt-8">All Transactions</h1>

<div class="w-full">
	<table class="text-left w-full">
		<thead class="bg-gray-800 flex text-white w-full">
			<tr class="flex w-full mb-4">
				<th class="p-4 w-1/4">UUID</th>
				<th class="p-4 w-1/4">Transaction Fare</th>
				<th class="p-4 w-1/4">New Balance</th>
				<th class="p-4 w-1/4">Date</th>
			</tr>
		</thead>
    <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
		<tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-auto w-full" style="height: 63vh;">
      {#if transactions.length == 0}
      <p>No records are found .....</p>
      {/if}
      {#each transactions as transaction}
			<tr class="flex w-full mb-4">
				<td class="p-4 w-1/4"><a href="/card/{transaction.card_id}"></a>{transaction.card_id}</td>
				<td class="p-4 w-1/4">{ transaction.transaction_fare}</td>
				<td class="p-4 w-1/4">{ transaction.current_balance}</td>
				<td class="p-4 w-1/4">{ transaction.createdAt}</td>
			</tr>
      {/each}
		</tbody>
	</table>
</div>
<!-- dark design -->

<style lang="postcss">
  p {
    @apply text-lg;
    @apply mt-0 mb-1;

  }
  code {
    @apply transition-colors duration-500;
    @apply px-1;
    @apply bg-gray-200;
    :global(.dark) & {
      @apply bg-gray-800;
    }
  }
  pre {
    @apply transition-colors duration-500;
    @apply text-left p-2 bg-gray-200;
    :global(.dark) & {
      @apply bg-gray-800;
    }
  }
</style>
