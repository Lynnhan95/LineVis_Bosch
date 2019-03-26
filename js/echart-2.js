var domA = document.getElementById("container-line1");
var myChart = echarts.init(domA);
var app = {};
option = null;
app.title = 'Assembly Line Dashboard';

option = {
    title: {
        text: 'Line1 - Number',
        subtext: 'Based on RESULT_STATE'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['0(Processed Once)', '1(Processed Twice)','2(Processed Third)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['PlantC','PlantA','Total Number']
    },
    series: [
        {
            name: '0(Processed Once)',
            type: 'bar',
            data: [11453,12000,23453]
        },
        {
            name: '1(Processed Twice)',
            type: 'bar',
            data: [520,0,520]
        },
        {
            name: '2(Processed Third)',
            type: 'bar',
            data: [27,0,27]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var domB = document.getElementById("container-line1Rate");
var myChart = echarts.init(domB);
var app = {};
option = null;
option = {
    title : {
        text: 'Line1 - Rate',
        subtext: 'Based on WORK_CYCLE_LOSSES',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['0(Processed Once)','1(Processed Twice)','2(Processed Third)']

    },
    series : [
        {
            name: 'PlantA',
            type: 'pie',
            radius : '30%',
            center: ['30%', '50%'],
            data:[
                {value:12000, name:'0(Processed Once)'},
                {value:0, name:'1(Processed Twice)'},
                {value:0, name:'2(Processed Third)'}

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: 'PlantC',
            type: 'pie',
            radius : '30%',
            center: ['75%', '50%'],
            data:[
                {value:23453, name:'0(Processed Once)'},
                {value:520, name:'1(Processed Twice)'},
                {value:27, name:'2(Processed Third)'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
    
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var domC = document.getElementById("container-line2");
var myChart = echarts.init(domC);
var app = {};
option = null;
app.title = 'Assembly Line Dashboard';

option = {
    title: {
        text: 'Line2 - Number',
        subtext: 'Based on RESULT_STATE'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['0(Processed Once)', '1(Processed Twice)','2(Processed Third)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['PlantC','Total Number']
    },
    series: [
        {
            name: '0(Processed Once)',
            type: 'bar',
            data: [22956,22956]
        },
        {
            name: '1(Processed Twice)',
            type: 'bar',
            data: [994,994]
        },
        {
            name: '2(Processed Third)',
            type: 'bar',
            data: [50,50]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var domD = document.getElementById("container-line2Rate");
var myChart = echarts.init(domD);
var app = {};
option = null;
option = {
    title : {
        text: 'Line2 - Rate',
        subtext: 'Based on WORK_CYCLE_LOSSES',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['0(Processed Once)','1(Processed Twice)','2(Processed Third)']
    },
    series : [
        {
            name: 'PlantC',
            type: 'pie',
            radius : '30%',
            center: ['30%', '50%'],
            data:[
                {value:22956, name:'0(Processed Once)'},{value:994, name:'1(Processed Twice)'},{value:50, name:'2(Processed Third)'}

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }

    ]
    
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}