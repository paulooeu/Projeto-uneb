import React from 'react';
import {Text} from 'react-native';
import Background from '../../components/Background';
import {Container, Title, List} from './styles';
import ItemList from '../../components/Lista/Item';

const data = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <Background>
      <Container>
        <Title>Projetos</Title>
        {/* <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <ItemList data={item} />}
        /> */}
      </Container>
    </Background>
  );
}
