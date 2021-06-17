import SafeEnvironment from "ui/componentes/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/componentes/data-display/PageTitle/PageTitle";
import UserInformation from "ui/componentes/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/componentes/inputs/TextFieldMask/TextFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

//para termos variaveis de pagina usamos o 'useState' ( do import { useState } from "react";) entao definimos: `const [variavel,setVarialvel]=userState(valorInicial)` para acessar o valor usamos variavel e para mudar o valor fazemos setVariavel(novoValor)
// uma forma de fazer melhor é usando hooks
// para fazer if pra elementos podemos fazer { condição && <elemento> } assim o <elemento> so sera exibido se a condição for verdade
// quando criando uma lista temos que botar um identificador unico para cada item dal ista ( usando o por exemplo key={})
export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={"Preencha seu endereço"}
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            variant={"outlined"}
            label={"Digite Sey CEP"}
            fullWidth
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {erro && <Typography color={"error"}>{erro}</Typography>}
          <Button
            variant={"contained"}
            color="secondary"
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>
        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={diarista.nome_completo}
                      picture={diarista.foto_usuario}
                      rating={diarista.reputacao}
                      description={diarista.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              {diaristasRestantes > 0 && (
                <Container sx={{ textAlign: "center" }}>
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu emdereço
                  </Typography>
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    sx={{ mt: 5 }}
                  >
                    Contratar um profissional
                  </Button>
                </Container>
              )}
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuuma diarista disponivel em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}
