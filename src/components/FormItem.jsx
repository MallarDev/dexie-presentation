import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { createItem } from "./Items/item/actions";

const initialState = {
  name: "",
  quantity: 0,
  value: 0.0,
  isBought: false,
};

export default function FormItem() {
  const [item, setItem] = useState(initialState);

  const [isBoughtLabel, setIsBoughtLabel] = useState("Comprar");

  useEffect(() => {
    const switchLabel = item.isBought ? "Comprado" : "Comprar";

    setIsBoughtLabel(switchLabel);
  }, [item.isBought]);

  const updateItem = ({ target: { id, value } }) => {
    setItem((prevState) => ({ ...prevState, [id]: value }));
  };

  const setBought = () => {
    setItem((prevState) => ({ ...prevState, isBought: !prevState.isBought }));
  };

  const clearForm = () => setItem(initialState);

  const newItem = async () => {
    await createItem(item);

    clearForm();
  };

  return (
    <FormControl component={"fieldset"} variant={"standard"}>
      <Stack gap={2}>
        <FormLabel component={"legend"}>Adicionar item</FormLabel>
        <FormGroup>
          <Stack gap={1}>
            <TextField
              id="name"
              label="Nome"
              value={item.name}
              onChange={updateItem}
            />
            <TextField
              id="quantity"
              label="Quantidade"
              type="number"
              value={item.quantity}
              onChange={updateItem}
            />
            <TextField
              id="value"
              label="Valor"
              type="number"
              value={item.value}
              onChange={updateItem}
            />
          </Stack>
          <FormControlLabel
            control={
              <Switch
                id="isBought"
                checked={item.isBought}
                onChange={setBought}
              />
            }
            label={isBoughtLabel}
            sx={{ width: "fit-content" }}
          />
        </FormGroup>
        <FormGroup>
          <Stack direction={"row"} gap={1}>
            <Button
              variant={"outlined"}
              color={"error"}
              endIcon={<ClearIcon />}
              onClick={clearForm}
            >
              Limpar
            </Button>
            <Button
              variant={"contained"}
              color={"success"}
              endIcon={<AddIcon />}
              onClick={newItem}
            >
              Criar item
            </Button>
          </Stack>
        </FormGroup>
      </Stack>
    </FormControl>
  );
}
