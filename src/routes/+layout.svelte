<style>
    .pinned {
        display: flex;
        flex-direction: column;
        width: 220px;
        position: fixed;
        bottom: 0;
        right: 0;
        border-radius: 20px 20px 0px 0px;
        border: 1px solid grey;
        max-height: 700px;
        overflow-y: scroll;
    }

    .toggle {
        position: sticky;
        top: calc(100% - 700px);
        border-radius: 20px 20px 0px 0px;
        border: none;
        border-bottom: 1px solid grey;
        width: auto;
    }

    .empty {
        padding: 25px 10px;
        display: flex;
        width: auto;
        border: 1px solid grey;
        border-top: none;
        border-left: none;
        border-right: none;
        background-color: white;
    }

    .pinned :last-child {
        border-bottom: none;
    }
</style>

<script lang="ts">
    import { dndzone } from "svelte-dnd-action";
    import { itemStore, type Pinnable } from "./pinned.ts";
    import { onDestroy } from "svelte";
    import PinnedItem from "./pinnedItem.svelte";

    let show = false;
    let items: any[] = [];
    let dragDisabled: boolean;

    const unsubscribe = itemStore.subscribe((values) => items = values);
    onDestroy(unsubscribe);

    $: dragDisabled = !items.length;

    function showPinned() {
        console.log(`showPinned() called: show is ${show}`);
        show = !show;
    }

    function handleSort(e: CustomEvent<DndEvent<Pinnable>>) {
        console.log("items", items);
        console.log("detail", e.detail.items);
        itemStore.update(() => e.detail.items);
    }
</script>

<div class="pinned">
    <button on:click={showPinned} class="toggle"><h1>Pinned</h1></button>
    {#if show}
    <div class="items"
        use:dndzone={{items, dragDisabled}}
        on:consider={handleSort}
        on:finalize={handleSort}
    >
        {#each items as item (item.id)}
            <PinnedItem bind:item={item}/>
        {/each}
        {#if !items.length}
            <div class="empty">
                No pinned items!
            </div>
        {/if}
    </div>
    {/if}
</div>
<slot></slot>