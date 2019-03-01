import { TYPES } from '../types';

const initialState = {
  selected: null,
};

export const campaign = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_CAMPAIGN_SELECTED:
      return {
        ...state,
        selected: action.payload.selected
      };
    case TYPES.CLEAR_CAMPAIGN_SELECTED:
      return {
        ...state,
        selected: null
      };
    default:
      return state;
  }
};
