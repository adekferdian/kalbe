import { Typography } from '@material-ui/core';

export const tabMenu = [
    {name: 'Januari'},
    {name: 'Februari'},
    {name: 'Maret'},
];

export const dataY = [
    '750000','1500000','2500000',
];

export const options = {
    grid: { top: 35, right: 20, bottom: 60, left: 80 },
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
      max: 3000000,
    },
    series: [
      {
        data: dataY,
        type: 'line',
        lineWidth: '50%',
        color: '#49ea6e',
        animationEasing: 'linear',
        animationDuration: 1200,
      },
    ],
};

export const columns = [
    {
        label: "KPI Incentive Monthly",
        options: {
            customBodyRender: (val) => {
                return (
                    <Typography style={{fontSize: 10}}>{val}</Typography>
                )
            }
        }
    },
    {
        label: "KALKULATOR",
        options: {
            filter: false,
            customHeadRender: (val, tableMeta) => {
                console.log(val);
                return (
                    <div style={{ display: 'inline', justifyContent: 'center',}}>
                        <Typography style={{fontFamily: 'Poppins', fontSize: 8, border: '1px solid white', textAlign: 'center', height: 17, paddingTop: 4, borderTopRightRadius: 3, borderBottomRightRadius: 3 }}>KALKULATOR</Typography>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: 150 }}>
                            <Typography style={{fontFamily: 'Poppins', fontSize: 8, width: 60, paddingTop: 4, borderLeft: '1px solid white', borderRight: '1px solid white', textAlign: 'center' }}>Achieve</Typography>
                            <Typography style={{fontFamily: 'Poppins', fontSize: 8, width: 60, paddingTop: 4, borderRight: '1px solid white', textAlign: 'center' }}>Gradasi</Typography>
                            <Typography style={{fontFamily: 'Poppins', fontSize: 8, width: 60, paddingTop: 4, textAlign: 'center', borderTopRightRadius: 3, borderBottomRightRadius: 3 }}>Intensif</Typography>
                        </div>
                    </div>
                )
            },
            customBodyRender: (val, {rowData}) => {
                console.log(val, rowData);
                return (
                    <div>
                        <div style={{display: 'flex'}}>
                            <Typography style={{position: 'absolute', right: 0, left: '-1em', bottom: 0, top: -10, fontSize: 12}}>{rowData[1][0]}</Typography>
                            <Typography style={{position: 'absolute', right: 0, left: '3.2em', bottom: 0, top: -10, fontSize: 12}}>{rowData[1][1]}</Typography>
                            <Typography style={{position: 'absolute', right: 0, left: '6.6em', bottom: 0, top: -10, fontSize: 12}}>{rowData[1][2]}</Typography>
                        </div>
                    </div>
                )
            }
        },
    },
];

export const dataTable = [
    ['Sales', [ '', '', '921.500']],
    ['Target Sales In Value', [ '90%', '50%', '343.750']],
    ['Target Sales All Product Non Dot in Value', [ '110%', '110%', '302.500']],
    ['Target Sales Product NBC In Value', [ '70%', '0%', '']],
    ['Target Growth Retail in %', [ '100%', '100%', '275.000']],
    ['Operation Excellent', [ '', '', '550.000']]
];