import { useState } from 'react'

function MainDiv() {
    const [day, setDay] = useState('--')
    const [month, setMonth] = useState('--')
    const [years, setYears] = useState('--')

    const [isError, setError] = useState('')

    // calculate
    let calculate = (day, month, year) => {
        const curentTime = new Date()
        const curentDay = Number(curentTime.getDate())
        const curentMonth = Number(curentTime.getMonth()) + 1
        const curentYear = Number(curentTime.getFullYear())

        if (curentYear < year) {
            setError('invalid')
        }

        // calculate
        let resultYear = curentYear - year
        let resultMonth = curentMonth - month
        let resultDay = curentDay - day

        if (resultDay < 0) {
            let getMonthsDays = new Date(curentYear, curentMonth-1, 0).getDate()
            resultDay += getMonthsDays
            resultMonth--

        } if (resultMonth <= 0) {
            resultMonth += 12
            resultYear--
        }

        console.log(curentDay, resultDay)
        setDay(resultDay)
        setMonth(resultMonth)
        setYears(resultYear)
    }


    // error check
    let checkError = (e) => {
        let userDay = Number(e.target.day.value)
        let userMonth = Number(e.target.month.value)
        let userYear = Number(e.target.year.value)

        if (!userDay || !userMonth || !userYear) {
            setError('Must be full')
        } else {
            calculate(userDay, userMonth, userYear)
        }
    }
    
    return (
        <form className='bg-white max-w-[800px] w-[90%] min-h-[500px] rounded-[20px] p-[50px] flex flex-col gap-[50px] rounded-br-[30%]' onSubmit={(e) => {
            e.preventDefault()
            checkError(e)
        }}>

            {/* task 001 */}
            <div className='flex items-center justify-start gap-[30px]'>
                <div className='flex flex-col items-start gap-[10px]'>
                    <h1 className={`tracking-[3px] font-[800] font-Poppins ${!isError ? 'text-[hsl(0,1%,44%)]' : 'text-[hsl(0,100%,67%)]'} text-[14px]`}>DAY</h1>
                    <input type="number" className={`border border-[1px] ${!isError ? 'border-[hsl(0,0%,94%)]' : 'text-[hsl(0,100%,67%)]'} w-[160px] pl-[20px] py-[10px] outline-none rounded-[5px] text-[32px] font-[800]`} name='day' />
                    <span className={`${isError ? 'block' : 'hidden'} text-[hsl(0,100%,67%)]`}>{isError} day</span>
                </div>
                <div className='flex flex-col items-start gap-[10px]'>
                    <h1 className={`tracking-[3px] font-[800] font-Poppins ${!isError ? 'text-[hsl(0,1%,44%)]' : 'text-[hsl(0,100%,67%)]'} text-[14px]`}>MONTH</h1>
                    <input type="number" className={`border border-[1px] ${!isError ? 'border-[hsl(0,0%,94%)]' : 'text-[hsl(0,100%,67%)]'} w-[160px] pl-[20px] py-[10px] outline-none rounded-[5px] text-[32px] font-[800]`} name='month' />
                    <span className={`${isError ? 'block' : 'hidden'} text-[hsl(0,100%,67%)]`}>{isError} month</span>
                </div>
                <div className='flex flex-col items-start gap-[10px]'>
                    <h1 className={`tracking-[3px] font-[800] font-Poppins ${!isError ? 'text-[hsl(0,1%,44%)]' : 'text-[hsl(0,100%,67%)]'} text-[14px]`}>YEAR</h1>
                    <input type="number" className={`border border-[1px] ${!isError ? 'border-[hsl(0,0%,94%)]' : 'text-[hsl(0,100%,67%)]'} w-[160px] pl-[20px] py-[10px] outline-none rounded-[5px] text-[32px] font-[800]`} name='year' />
                    <span className={`${isError ? 'block' : 'hidden'} text-[hsl(0,100%,67%)]`}>{isError} year</span>
                </div>
            </div>

            {/* task 002 */}
            <div className='relative flex items-center'>
                <hr className='border-[hsl(0,0%,94%)] w-full' />
                <button className='bg-[#854DFD] h-[70px] w-[70px] rounded-[50%] flex items-center justify-center absolute right-0'>
                    <img src="/icon-arrow.svg" />
                </button>
            </div>

            {/* task 003  */}
            <div className='leading-[1.2]'>
                <h1 className='text-[62px] font-[900] font-Poppins italic flex items-center gap-[20px]'>
                    <span className='text-[#854DFD]'>
                        {years}
                    </span>
                    years
                </h1>
                <h1 className='text-[62px] font-[900] font-Poppins italic flex items-center gap-[20px]'>
                    <span className='text-[#854DFD]'>
                        {month}
                    </span>
                    months
                </h1>
                <h1 className='text-[62px] font-[900] font-Poppins italic flex items-center gap-[20px]'>
                    <span className='text-[#854DFD]'>
                        {day}
                    </span>
                    days
                </h1>
            </div>
        </form>
    )
}

export default MainDiv
