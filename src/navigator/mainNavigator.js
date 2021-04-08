import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings222719Navigator from '../features/Settings222719/navigator';
import Settings222717Navigator from '../features/Settings222717/navigator';
import SignIn2222715Navigator from '../features/SignIn2222715/navigator';
import BlankScreen0222712Navigator from '../features/BlankScreen0222712/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings222719: { screen: Settings222719Navigator },
Settings222717: { screen: Settings222717Navigator },
SignIn2222715: { screen: SignIn2222715Navigator },
BlankScreen0222712: { screen: BlankScreen0222712Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
