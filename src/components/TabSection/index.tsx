import React, { useEffect } from 'react'
import DropdownLogo from '../../assets/dashboard/dropdown.svg?react'
import { MainTab } from '../../pages/Main'
import { useLocation, useNavigate } from 'react-router-dom'

interface TabData {
  mainTabs: MainTab[]
  selectedTab: number | null
  setSelectedTab: (num: number | null) => void
  selectedChild: string | null
  handleParentClick: (index: number, text: string) => void
  handleChildClick: (childText: string) => void
  selectedLanguage: string | null
  handleLanguage: (lang: string) => void
}

const classes = {
  tabContainer:
    'w-[248px] h-full absolute top-0 left-0 flex flex-col items-center pt-[30px] shrink-0',
  imgContainer:
    'w-[55px] h-[55px] bg-[#0b8e00] rounded-full flex justify-center items-center relative',
  nameText: 'font-medium text-4xl text-[#ffffff] leading-[54px]',
  logoImg: 'absolute bottom-0 right-[-7px] cursor-pointer',
  nameTitle: 'mt-[5px] text-base font-medium text-custom-black',
  email: 'font-bold text-[#9d9d9d] text-xs leading-[18px] mt-[7px] mb-[31px]',
  bottomDiv: 'flex flex-col w-full gap-0',
  tab: 'flex relative px-[19px] py-[23px] cursor-pointer gap-[15px] items-center',
  selectedIcon: 'w-[4px] h-[13px] shrink-0 bg-custom-blue absolute left-0',
  childTab: 'flex items-center gap-[3px] justify-center',
  childTxt: 'py-[12px] pl-[58px] text-sm cursor-pointer font-semibold',
  bottomContainer:
    'absolute bottom-0 left-0 h-[134px] w-full flex flex-col items-center',
  langDiv: 'flex px-[60px] gap-[8px] mb-[27px]',
  lang: 'flex items-center justify-center cursor-pointer py-4 font-bold  rounded-[10px] w-[60px] h-[34px]',
  logoutDiv:
    'flex w-full pl-[40px] pr-[30px] gap-[90px] pt-[23px] items-center justify-center border-[#dedede] border-t-2',
  logoutTxt: 'text-base font-semibold whitespace-nowrap text-custom-blue'
}

const TabSection = ({
  mainTabs,
  selectedTab,
  setSelectedTab,
  selectedChild,
  handleParentClick,
  handleChildClick,
  selectedLanguage,
  handleLanguage
}: TabData) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (pathname === '/main') navigate('/main/dashboard')
    if (pathname === '/main/dashboard') setSelectedTab(0)
    if (pathname.includes('requests')) setSelectedTab(1)
    if (pathname === '/main/password-manager') setSelectedTab(2)
  }, [pathname])

  return (
    <section className={classes.tabContainer}>
      <div className={classes.imgContainer}>
        <p className={classes.nameText}>D</p>
        <img
          src='/src/assets/dashboard/img_edit.svg'
          alt='edit-icon'
          className={classes.logoImg}
        />
      </div>
      <h2 className={classes.nameTitle}>Kang Dayeon</h2>
      <p className={classes.email}>dayeon@conun.io</p>

      <div className={classes.bottomDiv}>
        {mainTabs.map((item, index) => (
          <div>
            <div
              className={`${classes.tab} ${
                selectedTab === index && selectedChild === null
                  ? 'bg-secondary-blue'
                  : ''
              }`}
              onClick={() => handleParentClick(index, item.text)}
            >
              {React.cloneElement(item.Logo as React.ReactElement, {
                fill:
                  selectedTab === index && selectedChild === null
                    ? '#0001ae'
                    : '#9d9d9d'
              })}

              <div className={classes.childTab}>
                <p
                  className={`text-sm font-semibold ${
                    selectedTab === index && selectedChild === null
                      ? 'text-custom-blue'
                      : 'text-custom-grey'
                  }`}
                >
                  {item.text}
                </p>
                {item.children && (
                  <DropdownLogo
                    fill={`${
                      selectedTab === index && selectedChild === null
                        ? '#0001ae'
                        : '#9d9d9d'
                    }`}
                  />
                )}
              </div>

              {selectedTab === index && (
                <div className={classes.selectedIcon} />
              )}
            </div>

            {selectedTab === index &&
              item.children &&
              item.children.map((child) => (
                <div
                  className={`${classes.childTxt} ${
                    selectedChild === child.childText
                      ? 'bg-secondary-blue text-custom-blue'
                      : 'text-custom-grey'
                  }`}
                  onClick={() => handleChildClick(child.childText)}
                >
                  {child.childText}
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className={classes.bottomContainer}>
        <div className={classes.langDiv}>
          <div
            className={`${classes.lang} ${
              selectedLanguage === 'ENG'
                ? 'bg-secondary-blue text-custom-black'
                : 'text-custom-grey'
            }`}
            onClick={() => handleLanguage('ENG')}
          >
            ENG
          </div>

          <div
            className={`${classes.lang} ${
              selectedLanguage === 'KOR'
                ? 'bg-secondary-blue text-custom-black'
                : 'text-custom-grey'
            }`}
            onClick={() => handleLanguage('KOR')}
          >
            KOR
          </div>
        </div>
        <div className={classes.logoutDiv}>
          <p className={classes.logoutTxt}>Log out</p>
          <img
            src='/src/assets/dashboard/logout.svg'
            alt=''
            className='cursor-pointer'
          />
        </div>
      </div>
    </section>
  )
}

export default TabSection
