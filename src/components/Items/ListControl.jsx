import {
  FormControlLabel,
  Stack,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export default function ListControl({
  orderBy,
  switchOrderBy,
  reverseOrder,
  switchReverseOrder,
}) {
  return (
    <Stack direction={"row"} gap={1} justifyContent={"space-between"}>
      <ToggleButtonGroup exclusive value={orderBy} onChange={switchOrderBy}>
        <ToggleButton value="name">Nome</ToggleButton>
        <ToggleButton value="quantity">Quantidade</ToggleButton>
        <ToggleButton value="value">Valor</ToggleButton>
      </ToggleButtonGroup>
      <FormControlLabel
        sx={{ minWidth: "fit-content" }}
        control={
          <Switch checked={!reverseOrder} onChange={switchReverseOrder} />
        }
        label="a-z / 0-9"
      />
    </Stack>
  );
}
