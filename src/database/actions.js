import { Item } from "./types";
import { db } from "./db";

/**
 * @param {Item} item 
 * @returns {Item} Created item
 */
export const createItem = async (item) => {
  const created = await db.items.add(item);

  if (!created) {
    console.error("could not create item " + item);
  }

  return created;
};

/**
 * @param {number} id - The id of the item to update
 * @param {string} column - The column to update
 * @param {string | number | boolean} value - The new value
 * @returns {Item} Updated item
 */
export const updateItem = async (id, column, value) => {
  const updated = await db.items.update(id, { [column]: value });

  if (!updated) {
    console.error("could not update item " + id);
  }

  return updated;
};

/**
 * @param {number} id - The id of the item to delete
 */
export const deleteItem = async (id) => {
  try {
    await db.items.delete(id);
  } catch (error) {
    console.error("could not delete item " + id);
  }
};
