<style>
    div {
        display: flex;
        flex-direction: row;
    }
</style>

<script lang="ts">
    import PinButton from "../pinButton.svelte";
    import { stuff, otherStuff, moreStuff } from "./dataStore.ts";
</script>

<h1>Data</h1>

<div>
    <p>Stuff</p>
    <PinButton item={stuff} />
</div>

<div>
    <p>Other Stuff</p>
    <PinButton item={otherStuff} />
</div>

<div>
    <p>More Stuff</p>
    <PinButton item={moreStuff} />
</div>

<br>

<a href="/">Go home.</a>
<a href="/counter">Go counter.</a>
<a href="/cats">Go cats.</a>