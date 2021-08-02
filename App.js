
import React, {useState} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Tela = styled.View`
flex: 1;

`;
const Titulo = styled.View`
  background-color: #C4C4C4;
  height: 65px;
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top:30px;

`;

const Busca = styled.TextInput`
color : #000000;
font-size: 20px;

`;
const Botao = styled.TouchableOpacity`

`;
const BuscaImagem = styled.Image`
  width: 30px;
  height: 30px;
`;
const DivImagen = styled.View`
  background-color: black;
  align-items: center;
  height: 402;
  width:402
`;
const Poster = styled.Image`
  align-items: center;
  height: 425
  width: 300;
`;
const DivInfo = styled.View`
  background-color: #FFFFFF;
  align-items: center;
  flex:1;

`;
const Info = styled.Text`
 background-color: #FFFFFF;
 font-size: 20px;
 margin: 0 auto;
`;
const Linha = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 10;
`;
const Texto = styled.Text`
font-size: 12;
`;


export default function App() {
  const [nome, alteranome] = useState('')
  const [filme, alterafilme] = useState({});
  const buscarFilme =  async () => {
    const requisicao =  await fetch(`https://www.omdbapi.com/?apikey=5ec45300&t= ${nome}`)
    const resposta = await requisicao.json();
    alterafilme(resposta);
  }  
  return (
    <Tela>
      <Titulo>
        <Busca placeholder="Digite o nome do filme" values={nome} onChangeText={(filme) => {alteranome(filme)}}/>
        <Botao activeOpacity={0.3} onPress={buscarFilme}>
          <BuscaImagem source={require('./assets/icons8-pesquisar-48.png')}/>
        </Botao>
      </Titulo> 
      <DivImagen>
        <Poster source={{uri:filme.Poster}}/>
      </DivImagen> 
      <DivInfo>
        <Info>{filme.Title}</Info>
        <Linha>
          <Texto>Ano: {filme.Year}</Texto>
          <Texto>Duração: {filme.Runtime}</Texto>
          <Texto>Gênero: {filme.Genre}</Texto>
        </Linha>
        <Linha>
          <Texto>País:{filme.Country}</Texto>
          <Text>Direção:{filme.Director}</Text>
        </Linha>
        <Linha>
          <Texto>Elenco:</Texto>
        </Linha>
        <Linha>
          <Texto>{filme.Actors}</Texto>
        </Linha>
      </DivInfo>
    </Tela>
  );
}