import { Stack } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import { db } from "../../database/db";
import ListControl from "./ListControl";
import Item from "./item/Item";

export default function Items() {
  const [reverseOrder, setReverseOrder] = useState(false);
  const [orderBy, setOrderBy] = useState("name");

  const switchReverseOrder = () => {
    setReverseOrder((previous) => setReverseOrder(!previous));
  };

  const switchOrderBy = (_, newOrder) => {
    setOrderBy(newOrder);
  };

  const items = useLiveQuery(async () => {
    const dbItems = await db.items.orderBy(orderBy);

    if (reverseOrder) {
      dbItems.reverse();
    }

    return dbItems.toArray();
  }, [reverseOrder, orderBy]);

  return (
    <Stack direction={"column"} gap={2} maxWidth={"50%"}>
      <ListControl
        orderBy={orderBy}
        switchOrderBy={switchOrderBy}
        reverseOrder={reverseOrder}
        switchReverseOrder={switchReverseOrder}
      />
      <Stack
        direction={"column"}
        gap={2}
        height={"80vh"}
        padding={2}
        overflow={"auto"}
      >
        {items?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Stack>
    </Stack>
  );
}
