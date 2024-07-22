import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#008B8B', 
  },
  
  page: {
    width: '100%',
    padding: 20,
  },
  title: {
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Times New Roman, Times, serif',
   
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    backgroundColor: 'white',
  
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily:'Lucida Console, Courier New, monospace',
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
    alignItems: 'center'
  },
  cardImage: {
    width: 30,
    height: 30,
    marginBottom: 5,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardPrice: {
    fontSize: 16,
    color: '#888',
    marginTop: 4
  },
  buttonSpacing: {
    marginVertical: 10,
  },
  imageBackground:{
         width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item:{
      padding: 10,
    fontSize: 18,
    height: 44,
  },

  header:{
    fontSize: 24,
    backgroundColor: '#fff',
  },
  
  switch:{
     marginTop: 20,
  },
});
export default styles;