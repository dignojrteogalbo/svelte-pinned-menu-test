<script lang="ts">
    import { onDestroy } from "svelte";
    import { itemStore, pinItem, type Pinnable } from "./pinned.ts";

    export let item: Pinnable;
    let items: Pinnable[];
    let disabled = false;
    let label = "Pin me!";

    let unsubscribe = itemStore.subscribe((value) => items = value);
    onDestroy(unsubscribe);

    $: {
        disabled = items.includes(item);
        label = disabled ? "Pinned!" : "Pin me!";
    }
</script>

<button on:click={() => pinItem(item)} {disabled}>{label}</button>