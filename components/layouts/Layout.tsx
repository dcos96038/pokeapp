import {Container} from "@mui/material";
import Head from "next/head";

import Navbar from "../ui/Navbar";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || "Poke APP"}</title>
        <meta content="Diego Coscolla" name="author" />
        <meta content={`Informacion del Pokemon ${title}`} name="description" />
        <meta content={`${title}, pokemon, pokedex`} name="keywords" />
      </Head>

      <Navbar />
      <Container sx={{paddingY: "30px", minHeight: "90vh"}}>{children}</Container>
    </>
  );
};

export default Layout;
