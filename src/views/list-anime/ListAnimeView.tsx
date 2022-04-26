import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useAnimelist } from "../../hooks/requests/useAnimes";
import BasicCard from "../../componets/shared/card/BasicCard";
import ButtonPrimary from "../../componets/shared/button/ButtonPrimary";

const ListAnimeView = () => {
 const listAnime = useAnimelist(1, 10, "ova");
 console.log(listAnime.isLoading);
 return (
  <div>
   <Container maxWidth='lg'>
    <Grid container spacing={2} columns={12}>
     <Grid item xs={12} sm={6} lg={4}>
      <BasicCard />
     </Grid>
     <Grid item xs={12} sm={6} lg={4}>
      <BasicCard />
     </Grid>
     <Grid item xs={12} sm={6} lg={4}>
      <BasicCard />
     </Grid>
     <Grid item xs={12} sm={6} lg={4}>
      <BasicCard />
     </Grid>
    </Grid>
   </Container>
   <ButtonPrimary
    text='template'
    onClick={() => {
     console.log("template");
    }}
   />
  </div>
 );
};

export default ListAnimeView;
