console.log("quick-lru");
const QuickLRU = require("quick-lru");

const lru = new QuickLRU({ maxSize: 1000 });
console.log("🚀 ~ file: quick-lru.js ~ line 4 ~ lru", lru);

lru.set("🦄", "🌈");

lru.has("🦄");
//=> true

lru.get("🦄");
//=> '🌈'
``;
