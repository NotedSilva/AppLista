import { Text, SafeAreaView, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Melhores filmes de animação lançado no ano de 2004!
      </Text>
        <FlatList
          data = {arrayDados}
          renderItem={({item})=>
          <SafeAreaView style={styles.containerfilme}>
              <Text style={styles.textofilme}>
               {item.filme} 
               </Text>        
           </SafeAreaView> 
           }
          />
    </SafeAreaView>
  );
}

const largura = Dimensions.get('screen').width;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#5b2930',
    padding: 8,
  },
    paragraph: {
    margin: 30,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffd588',
  },
  textofilme:{
    fontSize: 22,
    margin: 10,
    textAlign: 'center', 
    backgroundColor: '#af5b4b',
    borderRadius: 30,
    padding: 10,
    color: '#ffd588',
    overflow: 'hidden',
  },
  containerfilme:{ 
  }
});

const arrayDados = [
  {filme: 'Os Incríveis'},
  {filme: 'O Castelo Animado'},
  {filme: 'Shrek 2'},
  {filme: 'A Noiva-Cadáver'},
  {filme: 'O Expresso Polar'},
  {filme: 'O Rei Leão 3: Hakuna Matata'},
  {filme: 'Bob Esponja - O Filme'},
  {filme: 'Mulan 2 - A Lenda Continua'},
  {filme: 'O Espanta Tubarões'},
  {filme: 'Nem Que a Vaca Tussa'},
];
