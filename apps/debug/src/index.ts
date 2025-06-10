/* eslint-disable new-cap */
import { lru_cache } from "@gepick/top-100-liked/common";

const lruCache = new lru_cache(1);

lruCache.put(2, 1);
lruCache.get(2);
lruCache.put(3, 2);
lruCache.get(2);
lruCache.get(3);

// eslint-disable-next-line no-console
console.log("🚀 ~ lruCache:", lruCache);
