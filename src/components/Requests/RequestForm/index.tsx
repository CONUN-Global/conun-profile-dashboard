import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'

const styles = {
  backBtn:
    'absolute left-[70px] top-[50px] flex items-center justify-center text-xl font-semibold text-custom-grey'
}

const RequestForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const approvers = [
    { value: 'Jamshid', label: 'Jamshid' },
    { value: 'Pyo Sejin', label: 'Pyo Sejin' }
  ]
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [selectedApprover, setSelectedApprover] = useState(null)

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <div>
      <button
        onClick={() => navigate('/main/requests')}
        className={styles.backBtn}
      >
        <img src='/src/assets/requests/icon_chevron_back.svg' /> back
      </button>

      <div className='flex flex-col items-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-[450px] flex-col items-center gap-[20px]'
        >
          <h2 className='mb-[13px] text-xl font-bold'>Request Form</h2>
          <div className='flex w-full flex-col gap-[7px]'>
            <label
              htmlFor='Title'
              className='text-[15px] font-semibold leading-[22.5px]'
            >
              Title
            </label>
            <input
              {...register('title')}
              placeholder='Title'
              className='rounded-[10px] bg-white px-[15px] py-[13px]'
            />
          </div>
          <div className='flex space-x-4'>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                if (date) {
                  setStartDate(date)
                }
              }}
              className='border p-2'
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                if (date) {
                  setEndDate(date)
                }
              }}
              className='border p-2'
            />
          </div>
          <input
            {...register('days')}
            placeholder='Days'
            className='border p-2'
          />
          <Select
            options={approvers}
            onChange={() => setSelectedApprover}
            placeholder='Approver'
          />
          <button type='submit' className='rounded bg-blue-500 p-2 text-white'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default RequestForm
