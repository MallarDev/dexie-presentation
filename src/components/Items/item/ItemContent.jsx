import { Stack, Typography } from "@mui/material";

export default function ItemContent({ item }) {
  const boughtText = item.isBought ? "comprou" : "precisa comprar";

  const valueText = parseFloat(item.value).toFixed(2);

  return (
    <Stack gap={1}>
      <Typography variant={"body1"}>
        Você {boughtText} {item.quantity}
        <Typography
          variant={"body1"}
          component={"span"}
          sx={{ textTransform: "capitalize" }}
        >
          {` ${item.name} `}
        </Typography>
        <Typography variant={"body1"} component={"span"}>
          que custa R$: {valueText} cada!
        </Typography>
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography>Quantidade: {item.quantity}</Typography>
        <Typography>Valor: {valueText}</Typography>
        <Typography>
          Total: {(item.value * item.quantity).toFixed(2)}
        </Typography>
      </Stack>
    </Stack>
  );
}
