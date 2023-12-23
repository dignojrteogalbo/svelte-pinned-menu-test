<style>
    div {
        display: flex;
        flex-direction: row;
    }
</style>

<script lang="ts">
    import PinButton from "../pinButton.svelte";
    import MoreStuff from "./MoreStuff.svelte";
    import OtherStuff from "./OtherStuff.svelte";
    import Stuff from "./Stuff.svelte";
</script>

<h1>Data</h1>

<div>
    <Stuff />
    <PinButton item={{ id: "stuff", component: Stuff }} />
</div>

<div>
    <OtherStuff />
    <PinButton item={{ id: "other-stuff", component: OtherStuff }} />
</div>

<div>
    <MoreStuff />
    <PinButton item={{ id: "more-stuff", component: MoreStuff }} />
</div>

<br>

<a href="/">Go home.</a>
<a href="/counter">Go counter.</a>
<a href="/cats">Go cats.</a>
<a href="/time">Go time.</a>
