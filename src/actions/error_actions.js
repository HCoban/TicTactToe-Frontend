export const ErrorConstants = {
  ADD_ERROR: 'ADD_ERROR',
  REMOVE_ERROR: 'REMOVE_ERROR'
};

export const addError = (error) => ({
  type: ErrorConstants.ADD_ERROR,
  error
});

export const removeError = () => ({
  type: ErrorConstants.REMOVE_ERROR
});