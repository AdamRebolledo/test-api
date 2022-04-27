import Grid from "@mui/material/Grid";
import { IItem } from "../../../models/IAnime";

const Information = (props: { information: any[]; subtitle: string }) => {
 return (
  <>
   {props.information.length > 0 && (
    <Grid item xs={12} sm={12} lg={12}>
     <p className='body1'>{props.subtitle}:</p>
     {props.information.map((i: IItem, index: number) => {
      return (
       <span key={index} className='microscopy'>
        {index === 0 ? "" : ", "}
        {i.name}
       </span>
      );
     })}
    </Grid>
   )}
  </>
 );
};

export default Information;
