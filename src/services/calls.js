import mainData from '../mock/user_data.json'
import activity from '../mock/user_activity.json'
import performance from '../mock/user_performance.json'
import sessions from '../mock/user_session.json'

export function getMainData(userId){
  const currentUser = mainData.find(user => user.id === Number(userId));
  return currentUser;
}

export function getActivity(userId){
  const currentUser = activity.find(user => user.userId === Number(userId));
  return currentUser;
}

export function getPerformance(userId){
  const currentUser = performance.find(user => user.id === Number(userId));
  return currentUser;
}

export function getSessions(userId){
  const currentUser = sessions.find(user => user.id === Number(userId));
  return currentUser;
}

// export async function getUserMainData(userId, setStatistics) {
//     try{
//       const response = await fetch (`http://localhost:3000/user/${userId}`);
//       const results = await response.json();
//       setStatistics(results.data);
//     }
//     catch(err){
//       console.log(err);
//     }
//     finally{
//       console.log("Fetch completed");
//     }
// }

// export async function getUserActivity(userId, setStatistics) {
//     try{
//       const response = await fetch (`http://localhost:3000/user/${userId}/activity`);
//       const results = await response.json();
//       setStatistics(results.data.sessions);
//     }
//     catch(err){
//       console.log(err);
//     }
//     finally{
//       console.log("Fetch completed");
//     }
// }

// export async function getUserPerformance(userId, setStatistics) {
//     try{
//       const response = await fetch (`http://localhost:3000/user/${userId}/performance`);
//       const results = await response.json();
//       setStatistics(results.data.data);
//     }
//     catch(err){
//       console.log(err);
//     }
//     finally{
//       console.log("Fetch completed");
//     }
// }

// export async function getUserSessions(userId, setStatistics) {
//     try{
//       const response = await fetch (`http://localhost:3000/user/${userId}/average-sessions`);
//       const results = await response.json();
//       setStatistics(results.data.sessions);
//     }
//     catch(err){
//       console.log(err);
//     }
//     finally{
//       console.log("Fetch completed");
//     }
// }