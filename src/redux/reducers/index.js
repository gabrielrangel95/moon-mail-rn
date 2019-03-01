import { combineReducers } from 'redux';
import { campaign } from './campaigns';


export const reducers = combineReducers({
  campaignState: campaign,
});
