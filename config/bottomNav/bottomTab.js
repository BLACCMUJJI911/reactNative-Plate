import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NewHome from "../../components/Home/newHOME/newHome"

export default function BottomTabs() {

    const Tab = createBottomTabNavigator()

    return (
        <>
        
        <Tab.Navigator>
            <Tab.Screen options={{headerShown:false}} name="Home" component={NewHome}/>
        </Tab.Navigator>
        
        
        </>
    )
}