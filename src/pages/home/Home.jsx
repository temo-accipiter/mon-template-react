import { useTranslation } from 'react-i18next'
import './Home.scss'

function Home() {
  const { t } = useTranslation()
  return <h1>{t('welcome')}</h1>
}

export default Home
