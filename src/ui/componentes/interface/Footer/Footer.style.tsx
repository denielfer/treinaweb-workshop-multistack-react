import { experimentalStyled as styled } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  // tambem podemos fazer apartir do theme.palette.getCrontrastText(); passando a cor como parametro se a cor for escura retorna uma cor clara e se for clara retorna uma escura
  padding: ${({ theme }) => theme.spacing(4) + " " + 0};
  margin-top: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;
// quando exportamos nosso componente para fazer ele atuar como um outro usamos o component={'component que quermos'} porem se ele passa no styled ao invez do component chamamos o as={'component que queremos'}
export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;

export const AppList = styled("ul")`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing()};
  img {
    width: 122px;
  }
`;
