var dom = document.getElementById("container-plantA");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = 'Assembly Line Dashboard';

option = {
    title: {
        text: 'PlantA - Number',
        subtext: 'Based on RESULT_STATE'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['1(Good Part)', '2(Scrap Part)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 2]
    },
    yAxis: {
        type: 'category',
        data: ['Line1','Total Product Number']
    },
    series: [
        {
            name: '1(Good Part)',
            type: 'bar',
            data: [11871,11871]
        },
        {
            name: '2(Scrap Part)',
            type: 'bar',
            data: [129,129]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var dom2 = document.getElementById("container-plantA-pie");
var myChart = echarts.init(dom2);
var app = {};
option = null;
option = {
    title : {
        text: 'PlantA - Rate',
        subtext: 'Based on RESULT_STATE',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['1(Good Part)','2(Scrap Part)']
    },
    series : [
        {
            name: 'Line1',
            type: 'pie',
            radius : '30%',
            center: ['30%', '50%'],
            data:[
                {value:11871, name:'1(Good Part)'},
                {value:129, name:'2(Scrap Part)'}

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },

    ]
    
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var dom3 = document.getElementById("container-plantC");
var myChart = echarts.init(dom3);
var app = {};
option = null;
app.title = 'Assembly Line Dashboard';

option = {
    title: {
        text: 'PlantC - Number',
        subtext: 'Based on RESULT_STATE'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['1(Good Part)', '2(Scrap Part)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.1]
    },
    yAxis: {
        type: 'category',
        data: ['Line2','Line1','Total Product Number']
    },
    series: [
        {
            name: '1(Good Part)',
            type: 'bar',
            data: [23440,11737,35177]
        },
        {
            name: '2(Scrap Part)',
            type: 'bar',
            data: [560,263,823]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var dom4 = document.getElementById("container-plantC-pie");
var myChart = echarts.init(dom4);
var app = {};
option = null;
option = {
    title : {
        text: 'PlantC - Rate',
        subtext: 'Based on RESULT_STATE',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['1(Good Part)','2(Scrap Part)']
    },
    series : [
        {
            name: 'Line1',
            type: 'pie',
            radius : '30%',
            center: ['30%', '50%'],
            data:[
                {value:11737, name:'1(Good Part)'},
                {value:263, name:'2(Scrap Part)'}

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
            name: 'Line2',
            type: 'pie',
            radius : '30%',
            center: ['75%', '50%'],
            data:[
                {value:23440, name:'1(Good Part)'},
                {value:560, name:'2(Scrap Part)'}
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
