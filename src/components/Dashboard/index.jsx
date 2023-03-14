import { useParams } from 'react-router-dom'
import { 
  getMainData, 
  getActivity, 
  getSessions, 
  getPerformance 
} from '../../services/calls'
import AverageSession from './AverageSession'
import DailyActivity from './DailyActivity'
import KeyData from './KeyData'
import Performance from './Performance'
import Score from './Score'
import '../../styles/dashboard/dashboard.scss';

/**
 * Display the dashboard for a user
 * @returns {JSX}
 */
export default function Dashboard() {

  const {id} = useParams()
  const userData = getMainData(id)
  const userActivity = getActivity(id)
  const userSessions = getSessions(id)
  const userPerformance = getPerformance(id)

  return (
    <>
    <div>
      <h1>Bonjour <span>{userData.userInfos.firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
      <DailyActivity userActivity={userActivity} />
      <AverageSession userSessions={userSessions} />
      <Performance userPerformance={userPerformance} />
      <Score userData={userData} />
      <KeyData keyData={userData.keyData} />
    </>
  )
}
