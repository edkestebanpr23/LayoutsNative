import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

const App = () => {
  return (
    <>

      <ScrollView>
        {/* Al View ponerle que el flex será en row (->) entonces su hijo podrá crecer todo su tamaño con flex: 1  */}
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>

        <View style={styles.contenedor} >
          <Text style={styles.titulo}>¿Qué hacer en París?</Text>
          <ScrollView horizontal={true}  >
            <View>
              <Image style={styles.ciudad} source={require('./assets/img/actividad1.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/img/actividad2.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/img/actividad3.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/img/actividad4.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./assets/img/actividad5.jpg')} />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Los mejores alojamientos</Text>
          <View>
            <View>
              <Image style={styles.mejores} source={require('./assets/img/mejores1.jpg')} />
            </View>
            <View>
              <Image style={styles.mejores} source={require('./assets/img/mejores2.jpg')} />
            </View>
            <View>
              <Image style={styles.mejores} source={require('./assets/img/mejores3.jpg')} />
            </View>
          </View>

          <Text style={styles.titulo}>Hospedajes en LA</Text>
          <View style={styles.listado}>
            <View style={styles.listadoItem}>
              <Image style={styles.mejores} source={require('./assets/img/hospedaje1.jpg')} />
            </View>
            <View style={styles.listadoItem}>
              <Image style={styles.mejores} source={require('./assets/img/hospedaje2.jpg')} />
            </View>
            <View style={styles.listadoItem}>
              <Image style={styles.mejores} source={require('./assets/img/hospedaje3.jpg')} />
            </View>
            <View style={styles.listadoItem}>
              <Image style={styles.mejores} source={require('./assets/img/hospedaje4.jpg')} />
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Codigo de flexbox - Tutorial... */}
      {/* <View style={styles.contenedor}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 200
    ,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 5
  },
  mejores: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  listado: {
    /**
     * El flex afecta únicamente a los elementos de primer nivel...
     * Por eso creo el flex en un View y dentro de el le pongo otros estilos teniendo en cuenta el flex
     */
    flexDirection: 'row', // Dice que quiero organizar la lista de manera horizontal
    flexWrap: 'wrap', // Esto es para decirle que si se pasan del limite horizontal de la pantalla me los mande a otro renglon...
    justifyContent: 'space-between', // Ya que mis imagenes ocupan cada una el 48% y no tienen margenes... Si las
    // Justifico entonces las centraría y las esparciría por todo el dom que tengan disponible, separandolas unas de las otras de manera bonita...
  },
  listadoItem: {
    flexBasis: '48%', // Equivalente a un Width pero de flexbox
  }
  /**
   * Código css de tutorial Flexbox XD
   */
  // contenedor: {
  //   backgroundColor: 'cornflowerblue',
  //   flex: 1,
  //   justifyContent: 'space-around',
  //   flexDirection: 'row',
  //   alignItems: 'center'
  // },
  // caja1: {
  //   padding: 20,
  //   backgroundColor: '#2156B8',
  //   borderRadius: 50
  // },
  // caja2: {
  //   padding: 20,
  //   backgroundColor: '#4077DB',
  //   borderRadius: 50
  // },
  // caja3: {
  //   padding: 20,
  //   backgroundColor: '#8EB3F7',
  //   borderRadius: 50
  // },
  // caja4: {
  //   padding: 20,
  //   backgroundColor: '#C6D9FD',
  //   borderRadius: 50
  // }
});

export default App;
