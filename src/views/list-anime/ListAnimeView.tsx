import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useAnimelist } from "../../hooks/requests/useAnimes";
import BasicCard from "../../componets/shared/card/BasicCard";
import ButtonPrimary from "../../componets/shared/button/ButtonPrimary";
import Header from "../../componets/shared/header/Header";
import SelectFilter from "../../componets/shared/select-filter/SelectFilter";
import Footer from "../../componets/shared/footer/Footer";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { IAnime } from "../../models/IAnime";

const ContentList = () => {
 const [order, setOrder] = useState("");
 const [type, setType] = useState("");
 const [page, setPage] = useState(1);
 const limit = 10;
 const listAnime = useAnimelist(page, limit, type, order);

 const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
 };

 const optionsOrder = [
  { text: "Título", value: "title" },
  { text: "Episodios", value: "episodes" },
  { text: "Popularidad", value: "popularity" },
  { text: "Clasificación", value: "rating" },
 ];

 const optionsType = [
  { text: "Tv", value: "tv" },
  { text: "Película", value: "movie" },
  { text: "OVA", value: "ova" },
  { text: "ONA", value: "ona" },
  { text: "Especiales", value: "special" },
  { text: "Música", value: "music" },
 ];

 useEffect(() => {
  listAnime.refetch();
 }, [page]);

 return (
  <>
   <Container maxWidth='lg' className='pt-3'>
    <Grid container spacing={2} columns={12}>
     <Grid item xs={12} sm={2} lg={2}>
      <SelectFilter options={optionsType} submit={(value: string) => setType(value)} filterType='Tipo' />
     </Grid>
     <Grid item xs={12} sm={10} lg={10}>
      <ButtonPrimary text='Filtrar' onClick={() => listAnime.refetch()} />
     </Grid>
     <Grid item xs={12} sm={2} lg={2}>
      <SelectFilter options={optionsOrder} submit={(value: string) => setOrder(value)} filterType='Ordenar' />
     </Grid>
     <Grid item xs={12} sm={10} lg={10}>
      <ButtonPrimary text='Ordenar' onClick={() => listAnime.refetch()} />
     </Grid>
    </Grid>
    <h3>Lista de animes de tu interes:</h3>
    <Grid container spacing={6} columns={12}>
     {listAnime.isSuccess &&
      listAnime?.data?.data.map((i: IAnime, index: number) => {
       return (
        <Grid key={index} item xs={12} sm={6} lg={4}>
         <BasicCard content={i} />
        </Grid>
       );
      })}
    </Grid>
   </Container>
   <Container maxWidth='xs' className='pt-3'>
    <Grid container spacing={0} columns={12}>
     {listAnime.isSuccess && (
      <Grid item xs={12} sm={12} lg={12}>
       <Stack spacing={1}>
        <Pagination
         size='small'
         count={Math.ceil(listAnime.data.pagination.items.total / limit)}
         page={page}
         onChange={handleChange}
        />
       </Stack>
      </Grid>
     )}
    </Grid>
   </Container>
  </>
 );
};

const ListAnimeView = () => {
 return (
  <>
   <div className='orange-background'>
    <Header
     children={
      <>
       <ContentList />
      </>
     }
    />
   </div>
   <Footer className='mt-3 relative' />
  </>
 );
};

export default ListAnimeView;
