import { SET_SELECTED_TERM, DO_NOTHING } from "./actionTypes";

const TERM_OPTIONS = [
  { key: 'Fall 2021', value: '202130', text: 'Fall 2021' },
];

// ADD SELECTED COURSE
export const setSelectedTerm = (text, value) => {
  // format for term is: { text: 'Term', value: 201810 }
  let found = false;
  for (let i = 0; i < TERM_OPTIONS.length; i++) {
    if (text === TERM_OPTIONS[i].text) {
      found = true;
    }
  }
  if (found) {
    return {
      type: SET_SELECTED_TERM,
      payload: { text: text, value: value },
    };
  }
  return { type: DO_NOTHING };

};

