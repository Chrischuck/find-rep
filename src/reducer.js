
const initialState = {
  officials: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SEARCH':
      return { officials: payload };

    default:
      return state;
  }
}
