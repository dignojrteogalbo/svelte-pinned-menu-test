import { writable } from "svelte/store";
import cat from "../../img/cute-cat.jpeg";

export const src = cat;
export const alt = "A kitten.";
export const pinnable = writable({ id: "img", content: `<img src="${src}" alt="${alt}"/>`});
