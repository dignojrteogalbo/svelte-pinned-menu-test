import { writable, type Writable } from "svelte/store";

type Item = {
    id: string;
    content: string;
}

export type Pinnable = Writable<Item>

export const itemStore: Writable<Pinnable[]> = writable([]);

export function pinItem(add: Writable<Item>) {
    itemStore.update((items) =>
        [...items.filter((item) => item != add), add]
    );
}