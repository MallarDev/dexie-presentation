import Dexie from "dexie";

export const db = new Dexie("dexiePresentation");
db.version(1).stores({
  items: "++id, name, quantity, value, isBought", // Primary key and indexed props
});
