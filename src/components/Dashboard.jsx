import { useParams } from 'react-router-dom'
import { getMainData } from '../services/calls'
import DailyActivity from './DailyActivity';


export default function Dashboard() {
  const {id} = useParams()
  const userData = getMainData(id);

  return (
    <>
      <h1>Bonjour {userData.userInfos.firstName}</h1>
      <h2>hey</h2>
      <DailyActivity />
    </>
  )
}
