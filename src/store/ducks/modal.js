export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

const initialState = {
  visible: false,
  coordinates: {},
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW: {
      const { latitude, longitude } = action.payload;

      return { visible: true, coordinates: { latitude, longitude } };
    }
    case Types.HIDE:
      return { visible: false };
    default:
      return state;
  }
}

// Actions
export const Creators = {
  showModal: (latitude, longitude) => ({
    type: Types.SHOW,
    payload: { latitude, longitude },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};
