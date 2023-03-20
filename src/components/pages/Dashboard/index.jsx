import { useParams } from 'react-router-dom'
import { 
  // getMainData, 
  // getActivity, 
  // getSessions, 
  // getPerformance,
  getDataFromAPI,

} from '../../../services/calls'
import AverageSession from './AverageSession'
import DailyActivity from './DailyActivity'
import KeyData from './KeyData'
import Performance from './Performance'
import Score from './Score'
import NotFound from '../NotFound'
import '../../../styles/dashboard/dashboard.scss';
import { useState, useEffect } from 'react'
import ErrorAPI from '../ErrorAPI'

/**
 * Display the dashboard for a user
 * @returns {JSX}
 */
export default function Dashboard() {

  const {id} = useParams()

  /** Use mocked data by :
   * uncommenting below and uncommenting the import of the functions
   * commenting the useState, useEffect, and return use now
   */
  // const userData = getMainData(id)
  // const userActivity = getActivity(id)
  // const userSessions = getSessions(id)
  // const userPerformance = getPerformance(id)

  // return (
  //   <div className='wrapper dashboard'>
  //     <div>
  //       <h1>Bonjour <span>{userData.firstname}</span></h1>
  //       <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
  //     </div>
  //     <DailyActivity userActivity={userActivity} />
  //     <AverageSession userSessions={userSessions} />
  //     <Performance userPerformance={userPerformance} />
  //     <Score score={userData.score} color={"#FF0000"} />
  //     <KeyData keyData={userData.keyData} />
  //   </div>
  // )

  const [userDataState, setUserDataState] = useState(null);
  const [userActivityState, setUserActivityState] = useState(null);
  const [userAverageSessionsState, setUserAverageSessionsState] = useState(null);
  const [userPerformanceState, setUserPerformanceState] = useState(null);
  const [errorAPI, setErrorAPI] = useState(false)

  useEffect(() => {
    getDataFromAPI(id).then(
      ({ userDataParsed, userActivityParsed, userAverageSessionsParsed, userPerformanceParsed }) => {
        setUserDataState(userDataParsed);
        setUserActivityState(userActivityParsed);
        setUserPerformanceState(userPerformanceParsed);
        setUserAverageSessionsState(userAverageSessionsParsed);
      },
      (error) => {
        console.log('data error : ', error);
        setErrorAPI(true);
      }
    );
  }, [id]);

  if(errorAPI){
    return(
      <ErrorAPI />
    )
  }else{
    return (
      <div className='wrapper dashboard'>
        <div>
          <h1>Bonjour <span>{userDataState?.firstname}</span></h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <DailyActivity userActivity={userActivityState} />
        <AverageSession userSessions={userAverageSessionsState} />
        <Performance userPerformance={userPerformanceState} />
        <Score score={userDataState?.score} color={"#FF0000"} />
        <KeyData keyData={userDataState?.keyData} />
      </div>
    )
  }

  
}
