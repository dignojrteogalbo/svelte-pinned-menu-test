<script lang="ts">
    import { onDestroy } from "svelte";
    import { formatDate, timeStore } from "./timeStore";
    import Time from "./time.svelte";
    import PinButton from "../pinButton.svelte";
    import { itemStore, type Pinnable } from "../pinned";

    let items: Pinnable[] = [];
    let time = 0;

    const unsubscribeItems = itemStore.subscribe((value) => items = value);
    onDestroy(unsubscribeItems);
    const unsubscribe = timeStore.subscribe((value) => time = value);
    onDestroy(unsubscribe);

    const delayMS = 1000;
    setInterval(() => {
        if (!Boolean(items.find(({ id }) => id == "time"))) {
            timeStore.update(() => Date.now());
        }
    }, delayMS);
</script>

<h1>The time is {formatDate(time)}.</h1>
<PinButton item={{ id: "time", component: Time}} />
<a href="/">Go home.</a>
<a href="/data">Go data.</a>
<a href="/counter">Go counter.</a>
<a href="/cats">Go cats.</a>