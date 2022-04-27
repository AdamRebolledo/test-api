import Grid from "@mui/material/Grid";

const InformationBlock = (props: { subtitle: string; information: string | number }) => {
 return (
  <Grid item xs={12} sm={12} lg={12}>
   <p className='body1'>{props.subtitle}:</p>
   <span className='microscopy'>{props.information}</span>
  </Grid>
 );
};

export default InformationBlock;
