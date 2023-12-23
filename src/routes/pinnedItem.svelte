<style>
    .item {
        display: flex;
        justify-content: space-between;
        width: auto;
        border: 1px solid grey;
        border-top: none;
        border-left: none;
        border-right: none;
        background-color: white;
    }

    .content {
        padding: 25px 10px;
        width: 180px;
        flex-wrap: wrap;
    }

    .item:hover button {
        display: block;
        background-color: #db2828;
        color: white;
        cursor: pointer;
    }

    .item button {
        display: none;
        border: none;
        padding: 0;
        margin: 0;
        width: 25px;
        text-align: center;
    }

    .content :global(img) {
        max-width: 150px;
    }
</style>

<script lang="ts">
    import { removeItem, type Pinnable } from "./pinned";

    export let item: Pinnable;
</script>

<div class="item">
    <div class="content">
        <svelte:component this={item.component}/>
    </div>
    <button on:click={() => removeItem(item)}>X</button>
</div>