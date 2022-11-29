import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'


// Charts: Temp, Pressure, Humidity
const Charts = () => {
  return (
    <div className="charts">

      <Sparklines data={sampleData}>
        <SparklinesReferenceLine type="mean" />
      </Sparklines>

    </div>
  )
}

export default Charts






// {/* // You must be able to ender a city, click search and see 3 charts show up.

// // There will be a chart for "temperature" (in F), Pressure and Humidity.

// // Each of the charts will be populated with data from the 5 day forecast as well as a reference line which will show the average (of that particular data point). */}