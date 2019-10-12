import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Routes from './src/routes';
import Home from './src/containers/Home';
import Pokedex from './src/containers/Pokedex';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Pokedex: { screen: Pokedex },
}, {
  initialRouteName: Routes.HOME.routeName,
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
    headerVisible: false,
  },
}
);

const App = createAppContainer(MainNavigator);

export default App;