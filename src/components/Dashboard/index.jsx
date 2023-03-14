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
      <DailyActivity userInfos={userActivity} />
      <AverageSession userInfos={userSessions} />
      <Performance userInfos={userPerformance} />
      <Score userInfos={userData} />
      <KeyData userInfos={userData.keyData} />
    </>
  )
}
