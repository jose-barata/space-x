import axios from "axios";
import CONSTANTS from "../../constants/Config";

const baseURL = CONSTANTS.SPACE_X_API;

// Change below function to API call
export const GetLaunchesAPI = async (setLoading, setError) => {
  setLoading(true);
  setError(undefined);

  return await axios
    .get(baseURL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
};
