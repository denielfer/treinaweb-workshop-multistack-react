import { ThemeProvider } from "@material-ui/core";
import "ui/styles/globals.css";
import theme from "ui/themes/theme";
import Head from "next/head";
import Header from "ui/componentes/interface/Header/Header";
import Footer from "ui/componentes/interface/Footer/Footer";
import { AppContainer } from "ui/styles/pages/_app.style";

function MyApp({ Component, pageProps }) {
  // Cada elemento so pode retorna um unico elemento entao para retornamos varios usamos a tag vazia <></> ( essa tag vazia é chamada de react fragment )
  return (
    <>
      <Head>
        <title>E-Diaristas</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer></Footer>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;