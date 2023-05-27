import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Calender = () => {
   return (
      <div className='mx-auto md:w-4/5'>
         <DateRange
            rangeColors={['#262626']}
            date={new Date()}
            direction='vertical'
            showDateDisplay={false}
            minDate={new Date()}
         />
      </div>
   )
}

export default Calender
