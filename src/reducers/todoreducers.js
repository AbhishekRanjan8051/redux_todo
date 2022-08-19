const initialData = {
  list: [],
};

const todoreducers = (state = initialData, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return state;
  }
};
export default todoreducers;
