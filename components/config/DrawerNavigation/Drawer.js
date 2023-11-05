import Home from "../../../screens/Home/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUp from "../../../screens/Signup/SignUp";
import SignIn from "../../../screens/Signin/SignIn";

export default function Drawers() {

    const Drawer = createDrawerNavigator()

    return (
        <>

            <Drawer.Navigator >

                <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
                <Drawer.Screen name="Signup" component={SignUp}></Drawer.Screen>
                <Drawer.Screen name="Signin" component={SignIn}></Drawer.Screen>

            </Drawer.Navigator>


        </>
    )

}