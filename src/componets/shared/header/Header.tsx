import logo from "../../../assets/img/svg/houmLogo.svg";
import Container from "@mui/material/Container";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";

interface Props {
 window?: () => Window;
 children: React.ReactElement;
}

function ElevationScroll(props: Props) {
 const { children, window } = props;
 const trigger = useScrollTrigger({
  disableHysteresis: true,
  threshold: 0,
  target: window ? window() : undefined,
 });

 return React.cloneElement(children, {
  elevation: trigger ? 4 : 0,
 });
}
const Header = (props: Props) => {
 return (
  <React.Fragment>
   <CssBaseline />
   <ElevationScroll {...props}>
    <AppBar>
     <header className='header'>
      <Container maxWidth='lg'>
       <img src={logo} alt='Logo Houm' />
      </Container>
     </header>
    </AppBar>
   </ElevationScroll>
   <Toolbar />
   <Container>
    <Box sx={{ my: 2 }}>{props.children}</Box>
   </Container>
  </React.Fragment>
 );
};

export default Header;
