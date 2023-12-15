import React, { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"


export default function Splash({navigation}) {

    useEffect(() => {

        setTimeout(() => {

            navigation.navigate("MainHome");

        }, 3000);

    }, []);

    return (
        <>

            <View style={styles.container}>

                <Text style={styles.txt}>
                    Welcome To APP
                </Text>

            </View>

        </>
    )
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"

    },

    txt: {

        color: "black",
        fontSize: 20,

    }


});