import { ADD_CUSTOM_EVENT, REMOVE_CUSTOM_EVENT, EDIT_CUSTOM_EVENT } from "../actions/actionTypes";

const defaultState = [];

// a sample event object:
/*
{
  event_name: "cse",
  start_time: 700,
  end_time: 830,
  days: "T",
}
 */

const customEventsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOM_EVENT:
      return [...state, action.payload]; // payload should be an event object
    case EDIT_CUSTOM_EVENT:
      const index = state.findIndex((customEvent) => {
        return (
          customEvent.event_name === action.editEvent.event_name &&
          customEvent.start_time === action.editEvent.start_time &&
          customEvent.end_time === action.editEvent.end_time &&
          customEvent.days === action.editEvent.days
        );
      });
      const updatedObject = action.payload;
      return [
        ...state.slice(0, index), // everything before current event we are editing
        updatedObject,
        ...state.slice(index + 1) // everything after
      ];
    case REMOVE_CUSTOM_EVENT:
      return state.filter((customEvent) => {
        return !(
          customEvent.event_name === action.payload.event_name &&
          customEvent.start_time === action.payload.start_time &&
          customEvent.end_time === action.payload.end_time &&
          customEvent.days === action.payload.days
        );
      });
    default:
      return state;
  }
};

export default customEventsReducer;
