import React from 'react';
import {Chart} from 'react-google-charts';

class Histogram extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        title: 'Sum of Rolls',
        hAxis: {title: 'Sum'},
        vAxis: {title:'Occurrences'},
        // histogram: {
        //   bucketSize: 1,
        //   maxNumBuckets: 11,
        //   minValue: 2,
        //   maxValue: 12
        // },

        legend: 'none'

      }
    }
  }

  render() {

    return(
      <div className="chart">
        <Chart
          chartType="Histogram"
          data={this.props.rollData}
          options={this.state.options}
          graph_id="Histogram"
          width="80%"
          height="400px"
          legend_toggle
        />
      </div>
    )
  }
}


export default Histogram;
