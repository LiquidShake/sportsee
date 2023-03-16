import mainData from '../mock/user_data.json'
import activity from '../mock/user_activity.json'
import performance from '../mock/user_performance.json'
import sessions from '../mock/user_session.json'
import {
  parseUserData,
  parseUserActivity,
  parseUserAverageSessions,
  parseUserPerformance
} from './modelisation'

export function getMainData(userId){
  const currentUser = mainData.find(user => user.id === Number(userId));
  return currentUser;
}

export function getActivity(userId){
  const currentUser = activity.find(user => user.userId === Number(userId));
  return currentUser;
}

export function getPerformance(userId){
  const currentUser = performance.find(user => user.userId === Number(userId));
  return currentUser;
}

export function getSessions(userId){
  const currentUser = sessions.find(user => user.userId === Number(userId));
  return currentUser;
}

export const getDataFromAPI = async (userId) => {
  const userData = await (await fetch(`http://localhost:3000/user/${userId}`)).json();
  const userActivity = await (await fetch(`http://localhost:3000/user/${userId}/activity`)).json();
  const userAverageSessions = await (await fetch(`http://localhost:3000/user/${userId}/average-sessions`)).json();
  const userPerformance = await (await fetch(`http://localhost:3000/user/${userId}/performance`)).json();

  const userDataParsed = parseUserData(userData.data)
  const userActivityParsed = parseUserActivity(userActivity.data)
  const userAverageSessionsParsed = parseUserAverageSessions(userAverageSessions.data)
  const userPerformanceParsed = parseUserPerformance(userPerformance.data)

  return ({
    userDataParsed,
    userActivityParsed,
    userAverageSessionsParsed,
    userPerformanceParsed
  });
};