import Footer from "../../componets/shared/footer/Footer";
import Header from "../../componets/shared/header/Header";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useAnimeDetail } from "../../hooks/requests/useAnimes";
import { useParams } from "react-router-dom";
import Information from "../../componets/shared/information-anime/Information";
import InformationBlock from "../../componets/shared/information-anime/InformationBlock";
import { Link } from "react-router-dom";
import { IAnime } from "../../models/IAnime";

const ContentDetail = () => {
 const { id } = useParams();
 const detail = useAnimeDetail(Number(id));
 const anime: IAnime = detail.isSuccess && detail.data.data;
 return (
  <>
   <Container maxWidth='lg'>
    {detail.isSuccess && (
     <>
      <h3 className='mt-0'>{anime.title}</h3>
      <Grid container spacing={2} columns={12}>
       <Grid item xs={12} sm={12} lg={8}>
        <Card sx={{ minWidth: 280 }}>
         <CardContent>
          <Grid container spacing={1} columns={12}>
           <Grid item xs={6} sm={6} lg={6}>
            <InformationBlock subtitle='Valoración' information={anime.score} />
           </Grid>
           <Grid item xs={6} sm={6} lg={6}>
            <InformationBlock subtitle='Episodios' information={anime.episodes} />
           </Grid>
           <Information subtitle='Productoras' information={anime.producers} />
           <InformationBlock subtitle='Sinopsis' information={anime.synopsis} />
          </Grid>
         </CardContent>
        </Card>
       </Grid>
       <Grid item xs={12} sm={12} lg={4}>
        <Card sx={{ minWidth: 280 }}>
         <img src={anime.images.webp.large_image_url} width={"100%"} alt='Anime portada' />
         <CardContent>
          <Grid container spacing={1} columns={12}>
           <Information subtitle='Generos' information={anime.genres} />
           <Grid item xs={6} sm={6} lg={6}>
            <InformationBlock subtitle='Duración' information={anime.duration} />
           </Grid>
           <Grid item xs={6} sm={6} lg={6}>
            <InformationBlock subtitle='Tipo' information={anime.type} />
           </Grid>
          </Grid>
         </CardContent>
        </Card>
       </Grid>
      </Grid>
     </>
    )}
   </Container>
  </>
 );
};

const DetailAnimeView = () => {
 return (
  <>
   <Header
    children={
     <>
      <Link to='/'>
       <svg className={"rotateHorizontal"} height={24} width={24} focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
        <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
       </svg>
      </Link>
      <ContentDetail />
     </>
    }
   />
   <Footer className='mt-3' />
  </>
 );
};

export default DetailAnimeView;
