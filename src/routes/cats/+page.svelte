<script>
    import PinButton from "../pinButton.svelte";
    import { pinnable, src, alt } from "./catStore";
</script>

<img {src} {alt}/><PinButton item={pinnable}/>

<a href="/">Go home.</a>
<a href="/data">Go data.</a>
<a href="/counter">Go counter.</a>