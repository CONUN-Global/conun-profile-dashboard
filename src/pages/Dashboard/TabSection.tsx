import React from 'react'
import { DashboardTab } from '.'
import DropdownLogo from '../../assets/dashboard/dropdown.svg?react'

interface TabData {
  dashboardTabs: DashboardTab[]
  selectedTab: number | null
  selectedChild: string | null
  handleParentClick: (index: number) => void
  handleChildClick: (childText: string) => void
  selectedLanguage: string | null
  handleLanguage: (lang: string) => void
}

const TabSection = ({
  dashboardTabs,
  selectedTab,
  selectedChild,
  handleParentClick,
  handleChildClick,
  selectedLanguage,
  handleLanguage
}: TabData) => {
  return (
    <section className='w-[248px] h-full absolute top-0 left-0 flex flex-col items-center pt-[30px] shrink-0'>
      <div className='w-[55px] h-[55px] bg-[#0b8e00] rounded-full flex justify-center items-center relative'>
        <p className='font-medium text-4xl text-[#ffffff] leading-[54px]'>D</p>
        <img
          src='/src/assets/dashboard/img_edit.svg'
          alt='edit-icon'
          className='absolute bottom-0 right-[-7px] cursor-pointer'
        />
      </div>
      <h2 className='mt-[5px] text-base font-medium text-custom-black'>Kang Dayeon</h2>
      <p className='font-bold text-[#9d9d9d] text-xs leading-[18px] mt-[7px] mb-[31px]'>
        dayeon@conun.io
      </p>

      <div className='flex flex-col w-full gap-0'>
        {dashboardTabs.map((item, index) => (
          <div>
            <div
              className={`flex relative px-[19px] py-[23px] cursor-pointer gap-[15px] items-center ${
                selectedTab === index && selectedChild === null
                  ? 'bg-secondary-blue'
                  : ''
              }`}
              onClick={() => handleParentClick(index)}
            >
              {React.cloneElement(item.Logo as React.ReactElement, {
                fill:
                  selectedTab === index && selectedChild === null
                    ? '#0001ae'
                    : '#9d9d9d'
              })}

              <div className='flex items-center gap-[3px] justify-center'>
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
                <div className='w-[4px] h-[13px] shrink-0 bg-custom-blue absolute left-0' />
              )}
            </div>

            {selectedTab === index &&
              item.children &&
              item.children.map((child) => (
                <div
                  className={`py-[12px] pl-[58px] text-sm cursor-pointer font-semibold ${
                    selectedChild === child.childText
                      ? 'text-custom-blue bg-secondary-blue'
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

      <div className='absolute bottom-0 left-0 h-[134px] w-full flex flex-col items-center'>
        <div className='flex px-[60px] gap-[8px] mb-[27px]'>
          <div
            className={`flex items-center justify-center cursor-pointer py-4 font-bold  rounded-[10px] w-[60px] h-[34px] ${
              selectedLanguage === 'ENG'
                ? 'bg-secondary-blue text-custom-black'
                : 'text-custom-grey'
            }`}
            onClick={() => handleLanguage('ENG')}
          >
            ENG
          </div>

          <div
            className={`flex items-center justify-center cursor-pointer py-4 font-bold rounded-[10px] w-[60px] h-[34px] ${
              selectedLanguage === 'KOR'
                ? 'bg-secondary-blue text-custom-black'
                : 'text-custom-grey'
            }`}
            onClick={() => handleLanguage('KOR')}
          >
            KOR
          </div>
        </div>
        <div className='flex w-full pl-[40px] pr-[30px] gap-[90px] pt-[23px] items-center justify-center border-[#dedede] border-t-2'>
          <p className='text-base font-semibold whitespace-nowrap text-custom-blue'>
            Log out
          </p>
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
