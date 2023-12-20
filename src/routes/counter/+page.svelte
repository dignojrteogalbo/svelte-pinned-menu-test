<style>
    div {
        display: flex;
        flex-direction: row;
    }
</style>

<script lang="ts">
    import { onDestroy } from "svelte";
    import { pinItem } from "../pinned";
    import { counterStore } from "./counterStore.ts";

    let count = 0;
    let content: any;
    $: counterStore.update(() => ({id: "counter", content: `The count is ${count}`}));

    const unsubscribe = counterStore.subscribe((value) => content = value);
    onDestroy(unsubscribe);

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }

    function reset() {
        count = 0;
    }
</script>

<div>
    <p>{$counterStore.content}</p>
    <button on:click={() => pinItem(counterStore)}>Pin me!</button>
</div>
<div>
    <button on:click={increment}>+</button>
    <button on:click={decrement}>-</button>
    <button on:click={reset}>Reset</button>
</div>

<a href="/">Go home.</a>
<a href="/data">Go data.</a>