import { TYPES } from '../types';

export const CampaignsActions = {
  setCampaignSelected: selected => ({
    type: TYPES.CHANGE_CAMPAIGN_SELECTED,
    payload: {
      selected
    }
  }),
  clearCampaignSelected: () => ({
    type: TYPES.CLEAR_CAMPAIGN_SELECTED,
  }),
};
