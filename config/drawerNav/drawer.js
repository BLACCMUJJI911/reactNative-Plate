import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../../components/Home/home"



export default function Drawer() {

    const Drawer = createDrawerNavigator()

    return (
        <>

            <Drawer.Navigator>

                <Drawer.Screen name="Home" component={Home} />
                {/* <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Settings" component={AppSetting} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Help" component={Help} /> */}

            </Drawer.Navigator>

        </>
    )
}