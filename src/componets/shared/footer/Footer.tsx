import Container from "@mui/material/Container";
import logo from "../../../assets/img/svg/grayLogo.svg";
const Footer = (props: { className?: string }) => {
 return (
  <footer className={"footer " + props.className}>
   <Container maxWidth='lg'>
    <img height={50} src={logo} alt='Logo Houm' />
   </Container>
  </footer>
 );
};

export default Footer;
