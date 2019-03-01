import { createStackNavigator, createAppContainer } from 'react-navigation';
import { CampaignsList, CampaignDetail, CampaignMetrics } from '../screens';

const Navigator = createStackNavigator({
  CampaignsList,
  CampaignDetail,
  CampaignMetrics
});

const AppNavigator = createAppContainer(Navigator);

export { AppNavigator };
