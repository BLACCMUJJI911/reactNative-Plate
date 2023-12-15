import { View, Text, StyleSheet } from "react-native"

export default function NewHome(){
    return(
        <>
        
        <View style-={styles.container}>
            <Text style={styles.txt}>
            Home
            </Text>
        </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    container:{

        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff"

    },

    txt:{

        color:"black",
        fontSize:20,

    }

})