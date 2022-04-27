import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { IAnime, IItem } from "../../../models/IAnime";

const BasicCard = (props: { content: IAnime }) => {
 return (
  <div className='underline-none'>
   <Link to={`/detail/${props.content.mal_id}`}>
    <Card sx={{ minWidth: 280 }}>
     <img src={props.content.images.webp.image_url} height={280} width={"100%"} alt='Anime portada' />
     <CardContent>
      <Grid container spacing={1} columns={12}>
       <Grid item xs={12} sm={12} lg={12}></Grid>
       <Grid item xs={12} sm={12} lg={12}>
        <span className='microscopy'>{props.content.title}</span>
       </Grid>
       <Grid item xs={6} sm={6} lg={6}>
        <p className='body1'>Tipo</p>
       </Grid>
       <Grid item xs={6} sm={6} lg={6}>
        <p className='body1'>{props.content.type}</p>
       </Grid>
       <Grid item xs={6} sm={6} lg={6}>
        <span className='microscopy'>Episodios</span>
       </Grid>
       <Grid item xs={6} sm={6} lg={6}>
        <p className='body1'>{props.content.episodes}</p>
       </Grid>
       <Grid item xs={12} sm={12} lg={12}>
        <div className='divider'></div>
        {props.content.studios.map((i: IItem, index: number) => {
         return (
          <span key={index} className='microscopy'>
           {index === 0 ? "" : ", "}
           {i.name}
          </span>
         );
        })}
       </Grid>
      </Grid>
     </CardContent>
    </Card>
   </Link>
  </div>
 );
};

export default BasicCard;
