import { Delete } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControlLabel,
  IconButton,
  Switch,
} from "@mui/material";
import { useEffect, useState } from "react";
import { deleteItem, updateItem } from "../../../database/actions";
import ItemContent from "./ItemContent";

export default function Item({ item }) {
  const [isBoughtLabel, setIsBoughtLabel] = useState("");

  useEffect(() => {
    const switchLabel = item.isBought ? "Comprado" : "Comprar";

    setIsBoughtLabel(switchLabel);
  }, [item.isBought]);

  const callDeletion = () => {
    deleteItem(item.id);
  };

  const switchBought = () => {
    updateItem(item.id, "isBought", !item.isBought);
  };

  return (
    <Card sx={{ minHeight: "225px" }}>
      <CardHeader
        action={
          <IconButton color={"error"} onClick={callDeletion}>
            <Delete />
          </IconButton>
        }
        title={item.name}
        sx={{ textTransform: "capitalize" }}
      />
      <CardContent>
        <ItemContent item={item} />
      </CardContent>
      <CardActions dir={"rtl"}>
        <FormControlLabel
          control={<Switch checked={item.isBought} onChange={switchBought} />}
          label={isBoughtLabel}
        />
      </CardActions>
    </Card>
  );
}
