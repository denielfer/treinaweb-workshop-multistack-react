import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { APIService } from "data/services/APIService";
//useMemo é usado para que uma função so altere na alteração de dadas variaveis, entao passamos a função que sera execurada, lista de quais varaiveis devem ser observadas
export default function useIndex() {
  const [cep, setCep] = useState(""),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, SetDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);
  const cepValido = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);
  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");
    try {
      const { data } = await APIService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      SetDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (erro) {
      setErro("CEP não encontrado");
      setCarregando(false);
    }
  }
  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
//get:pega algo, post:envia algo, put:atualiza algo, delete:deleta algo
