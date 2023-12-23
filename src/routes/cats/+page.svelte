<script>
    import PinButton from "../pinButton.svelte";
    import Image from "./Image.svelte";
</script>

<Image /><PinButton item={{ id: "image", component: Image }}/>

<a href="/">Go home.</a>
<a href="/data">Go data.</a>
<a href="/counter">Go counter.</a>
<a href="/time">Go time.</a>