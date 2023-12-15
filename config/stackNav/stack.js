import React from "react";
import Home from "../../components/Home/home";
import Splash from "../../components/splashScreen/splash";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Drawer from "../drawerNav/drawer";


export default function Stack() {

    const Stack = createStackNavigator();

    return (
        <>

            <NavigationContainer>

                <Stack.Navigator>

                    <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
                    <Stack.Screen name="Drawer" component={Drawer}/>
                    <Stack.Screen name="MainHome" component={Home}/>

                </Stack.Navigator>

            </NavigationContainer>

        </>
    );

}