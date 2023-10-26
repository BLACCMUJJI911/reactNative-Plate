import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App(){
  return(
    <>
  <SafeAreaProvider style={styles.container}>

    <Text onPress={e => console.log("Text Pressed")} style={{color:"white"}}>
      App Test
    </Text>

  </SafeAreaProvider>



    
    </>
  )
}

const styles = StyleSheet.create({

  container:{

    display:"flex",
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    background:"black"

  }

})