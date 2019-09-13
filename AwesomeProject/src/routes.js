import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './pages/Home';
import Projeto from './pages/Projeto';

export default createAppContainer(
  createSwitchNavigator({
    Home,
    Projeto,
  }),
);
