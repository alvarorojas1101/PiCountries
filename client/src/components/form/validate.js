export const validateField = (fieldName, value) => {
  let error = "";

  switch (fieldName) {
    case "name":
      if (/\d/.test(value)) {
        error = "Name cannot contain numbers";
      }
      break;
    case "difficulty":
      if (value < 1 || value > 5) {
        error = "Difficulty must be a number between 1 and 5";
      }
      break;
    case "duration":
      if (value < 0) {
        error = "Duration must be a positive number";
      }
      break;
    default:
      break;
  }

  return error;
};
