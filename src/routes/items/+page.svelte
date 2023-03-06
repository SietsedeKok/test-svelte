<script lang="ts">
	import type {Item} from "$lib/types/item";

	let items: Item[] = [];
</script>

<h1>Items</h1>

<ul>
	{#each items as item, key}
		<li>{item.id}: {item.name}</li>
	{/each}
</ul>