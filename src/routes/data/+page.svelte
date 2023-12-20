<style>
    div {
        display: flex;
        flex-direction: row;
    }
</style>

<script lang="ts">
    import { pinItem } from "../pinned.ts";
    import { stuff, otherStuff, moreStuff } from "./dataStore.ts";
</script>

<h1>Data</h1>

<div>
    <p>Stuff</p>
    <button on:click={() => pinItem(stuff)}>Pin me!</button>
</div>

<div>
    <p>Other Stuff</p>
    <button on:click={() => pinItem(otherStuff)}>Pin me!</button>
</div>

<div>
    <p>More Stuff</p>
    <button on:click={() => pinItem(moreStuff)}>Pin me!</button>
</div>

<br>

<a href="/">Go home.</a>
<a href="/counter">Go counter.</a>
