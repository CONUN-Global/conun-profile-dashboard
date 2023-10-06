import DashboardLogo from '../../assets/dashboard/dashboard_logo.svg?react'
import RequestsLogo from '../../assets/dashboard/requests_logo.svg?react'
import PasswordManagerLogo from '../../assets/dashboard/password_manager_logo.svg?react'
import React from 'react'
import { useState } from 'react'
import TabSection from '../../components/TabSection'
import MainContent from '../../components/MainContent'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'
export interface DashboardChild {
  childText: string
}
export interface MainTab {
  Logo: React.ReactNode
  text: string
  children?: DashboardChild[]
}

const mainTabs: MainTab[] = [
  {
    Logo: <DashboardLogo />,
    text: 'Dashboard'
  },
  {
    Logo: <RequestsLogo />,
    text: 'Requests'
  },
  {
    Logo: <PasswordManagerLogo />,
    text: 'Password Manager',
    children: [{ childText: 'Password list' }, { childText: 'Logs' }]
  }
]

const Main = () => {
  const [selectedTab, setSelectedTab] = useState<number | null>(null)
  const [selectedChild, setSelectedChild] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>('ENG')
  const navigate = useNavigate()

  const handleParentClick = (index: number, text: string) => {
    setSelectedTab(index)
    setSelectedChild(null)
    if (text === 'Dashboard') {
      navigate('/main/dashboard')
    } else if (text === 'Requests') {
      navigate('/main/requests')
    } else if (text === 'Password Manager') {
      navigate('/main/password-manager')
    }
  }

  const handleChildClick = (childText: string) => {
    setSelectedChild(childText)
  }

  const handleLanguage = (lang: string) => setSelectedLanguage(lang)

  const tabData = {
    mainTabs,
    selectedTab,
    setSelectedTab,
    selectedChild,
    selectedLanguage,
    handleParentClick,
    handleChildClick,
    handleLanguage
  }
  return (
    <div className='h-screen w-screen'>
      <Header />
      <TabSection {...tabData} />
      <MainContent />
    </div>
  )
}

export default Main
