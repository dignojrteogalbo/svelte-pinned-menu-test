<script lang="ts">
    import { onDestroy } from "svelte";
    import { formatDate, timeStore } from "./timeStore";

    let time = 0;
    const unsubscribe = timeStore.subscribe((value) => time = value);
    onDestroy(unsubscribe);

    const delayMS = 1000;
    setInterval(() => {
        timeStore.update(() => Date.now());
    }, delayMS);
</script>

<p>The time is {formatDate(time)}</p>
