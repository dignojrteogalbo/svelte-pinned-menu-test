import { writable } from "svelte/store";
import cat from "../../img/cute-cat.jpeg";
import type { Pinnable } from "../pinned";

export const src = cat;
export const alt = "A kitten.";
export const pinnable: Pinnable = { id: "img", content: writable(`<img src="${src}" alt="${alt}"/>`)};
