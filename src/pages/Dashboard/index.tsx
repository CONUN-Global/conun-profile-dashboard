import DashboardLogo from '../../assets/dashboard/dashboard_logo.svg?react'
import RequestsLogo from '../../assets/dashboard/requests_logo.svg?react'
import PasswordManagerLogo from '../../assets/dashboard/password_manager_logo.svg?react'
import React from 'react'
import { useState } from 'react'
import TabSection from '../../components/TabSection'
import MainContent from '../../components/MainContent'
import Header from '../../components/Header'
export interface DashboardChild {
  childText: string
}
export interface DashboardTab {
  Logo: React.ReactNode
  text: string
  children?: DashboardChild[]
}

const dashboardTabs: DashboardTab[] = [
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

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<number | null>(0)
  const [selectedChild, setSelectedChild] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>('ENG')

  const handleParentClick = (index: number) => {
    setSelectedTab(index)
    setSelectedChild(null)
  }

  const handleChildClick = (childText: string) => {
    setSelectedChild(childText)
  }

  const handleLanguage = (lang: string) => setSelectedLanguage(lang)

  const tabData = {
    dashboardTabs,
    selectedTab,
    selectedChild,
    selectedLanguage,
    handleParentClick,
    handleChildClick,
    handleLanguage
  }
  return (
    <div className='w-screen h-screen'>
      <Header />
      <TabSection {...tabData} />
      <MainContent />
    </div>
  )
}

export default Dashboard