import Dexie from "dexie";

/**
 * Dexie database instance
 */
export const db = new Dexie("dexiePresentation");

// Create a new table for the version 1 of this database
// The `++` means auto increment
db.version(1).stores({
  items: "++id, name, quantity, value, isBought", // Primary key and indexed props
});
