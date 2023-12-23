<style>
    div {
        display: flex;
        flex-direction: row;
    }
</style>

<script lang="ts">
    import { counterStore } from "./counterStore.ts";
    import PinButton from "../pinButton.svelte";
    import Counter from "./counter.svelte";
    import { browser } from "$app/environment";

    let count = browser && localStorage.count ? JSON.parse(localStorage.count) : 0;

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }

    function reset() {
        count = 0;
    }

    $: {
        if (browser) localStorage.count = JSON.stringify(count);
        counterStore.update(() => count);
    }
</script>

<div>
    <Counter />
    <PinButton item={{ id: "counter", component: Counter }} />
</div>
<div>
    <button on:click={increment}>+</button>
    <button on:click={decrement}>-</button>
    <button on:click={reset}>Reset</button>
</div>

<a href="/">Go home.</a>
<a href="/data">Go data.</a>
<a href="/cats">Go cats.</a>