import { writable } from "svelte/store";

export function formatDate(time: number): string {
    const date = new Date(time);
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'long',
    }).format(date);
}

export const timeStore = writable(Date.now());
