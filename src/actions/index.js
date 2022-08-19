export const addItems = (data) => {
  return {
    type: "ADD",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteItems = () => {
  return {
    type: "DELETE",
  };
};
export const removeItems = () => {
  return {
    type: "REMOVE",
  };
};
