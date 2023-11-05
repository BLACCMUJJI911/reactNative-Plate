import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../../screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../splash_screen/splash";
import SignIn from "../../../screens/Signin/SignIn";
import SignUp from "../../../screens/Signup/SignUp";
import MainHome from "../../../screens/Home/MainHome/mainhome";
import Drawers from "../../config/DrawerNavigation/Drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Search from "../../../screens/Search/Search"

export default function Stack() {

    const Tab = createStackNavigator()
    const Bottom = createBottomTabNavigator()

    return (
        <>
            <NavigationContainer>
                <Tab.Navigator >
                    <Tab.Screen name="Splash" component={Splash} options={{ headerShown: false }}></Tab.Screen>
                    <Tab.Screen name="Drawer" component={Drawers}></Tab.Screen>
                    <Tab.Screen name="Home" component={Home}></Tab.Screen>
                    <Tab.Screen name="mainHome" component={MainHome} options={{ headerShown: false }}></Tab.Screen>
                    <Tab.Screen name="Signup" component={SignUp}></Tab.Screen>
                    <Tab.Screen name="Signin" component={SignIn}></Tab.Screen>
                </Tab.Navigator>

            </NavigationContainer>


{/* Bottom Navigation  */}



           

        </>
    )

}