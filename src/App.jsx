import { Divider, Grid } from "@mui/material";
import "./App.css";
import FormItem from "./components/FormItem";
import Items from "./components/Items";

function App() {
  return (
    <Grid container columns={2} justifyContent={"space-evenly"} padding={2}>
      <FormItem />
      <Divider orientation="vertical" flexItem />
      <Items />
    </Grid>
  );
}

export default App;
