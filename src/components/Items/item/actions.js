import { db } from "../../../database/db";

export const createItem = async (item) => {
  const created = await db.items.add(item);

  if (!created) {
    console.error("could not create item " + item);
  }

  return created;
};

export const updateItem = async (id, column, value) => {
  const updated = await db.items.update(id, { [column]: value });

  if (!updated) {
    console.error("could not update item " + id);
  }

  return updated;
};

export const deleteItem = async (id) => {
  try {
    await db.items.delete(id);
  } catch (error) {
    console.error("could not delete item " + id);
  }
};
