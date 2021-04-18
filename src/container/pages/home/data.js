import calls from '../../assets/calls.PNG';
import store from '../../assets/store_invis.PNG';
import noo from '../../assets/Noo.PNG';
import sales_target from '../../assets/sales_target.PNG';

export const dataX = [2.00, 6.00, 12.00,];

export const options = {
    grid: { top: 35, right: 12, bottom: 60, left: 40 },
    xAxis: {
      type: 'category',
      data: ['Jan 2020', 'Feb 2020', 'Mar 2020'],
      axisTick: {
        alignWithLabel: true
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {       
          type: 'shadow'
      }
    },
    yAxis: {
      type: 'value',
      max: 15,
    },
    series: [
      {
        data: dataX,
        type: 'line',
        lineWidth: '50%',
        color: '#49ea6e'
      },
    ],
};

export const dataTarget = [
    {
      name: 'Call',
      rating: '12',
      maxValue: 48,
      image: calls,
      value: '25'
    },
    {
      name: 'Store Visibility',
      rating: '8',
      maxValue: '10',
      image: store,
      value: '80'
    },
    {
      name: 'NOO',
      rating: '8',
      maxValue: '10',
      image: noo,
      value: '80'
    },
    {
      name: 'Sales Target',
      rating: 'Rp.100,000,000',
      maxValue: 'Rp.200,000,000',
      image: sales_target,
      value: '50'
    },
];