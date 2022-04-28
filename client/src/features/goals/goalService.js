import axios from "axios";

const API_URL = "/api/v1/goals/";

//create Goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "create", goalData, config);

  return response.data;
};

// get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "all", config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
};

export default goalService;
