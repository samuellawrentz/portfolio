var frontEndSkillCategories = [['HTML5', 8], ['CSS3/SCSS', 8], ['Javascript', 9], ['TypeScript', 9], ['Highcharts', 7], ['Kendo UI', 7]]
var backEndCategories = [['C#', 7], ['Python', 6], ['C++', 7], ['C', 6], ['.NET', 5], ['NodeJS', 6]];
var toolsCategories = [['Visual Studio', 8], ['Visual Studio Code', 8], ['GIT', 9], ['Photoshop', 7], ['IIS', 6], ['Fiddler', 8]]

$('#myModal').modal('toggle')
$("#sliderFrontEnd").roundSlider({
  radius: 70,
  width: 9,
  handleSize: "+8",
  sliderType: "min-range",
  value: 90,
  readOnly: true
});
$("#sliderBackEnd").roundSlider({
  radius: 70,
  width: 9,
  handleSize: "+8",
  sliderType: "min-range",
  value: 70,
  readOnly: true
});
$("#sliderTools").roundSlider({
  radius: 70,
  width: 9,
  handleSize: "+8",
  sliderType: "min-range",
  value: 75,
  readOnly: true
});

function drawChart(id, data){
  var skillChart = Highcharts.chart(id, {
    chart: {
      type: 'bar',
      spacingLeft: 30,
    },
    title: false,
    subtitle: false,
    xAxis: {
      type: 'category',
      title: {
        text: null
      },
      labels: {
        style: {
          fontSize: '22px'
        }
      }
    },
    yAxis: {
      visible: true,
      gridLineColor: '#fff',
      gridZIndex:10,
      tickInterval: 2,
      min: 0,
      max: 10,
      labels: {
        overflow: 'justify'
      },
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      bar: {
        pointWidth: 10,
        dataLabels: {
          enabled: false
        },
        color: '#444'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Skill',
      data: [].concat(data)
    }]
  });
}

drawChart('frontEndSkillsChart', frontEndSkillCategories);
drawChart('backEndChart', backEndCategories);
drawChart('toolsChart', toolsCategories);

document.onkeydown = checkKey;
var angle = 0;
var Xangle = 0;
var prism = document.querySelector(".rec-prism");
function checkKey(e) {

    e = e || window.event;
    if (e.keyCode == '38') {
      Xangle +=90;
      prism.style.transform = 'rotateX(' +Xangle +'deg)';
      e.preventDefault();
        // up arrow
    }
    else if (e.keyCode == '40') {
      Xangle -=90;
      prism.style.transform = 'rotateX(' +Xangle +'deg)';
      e.preventDefault();
        // down arrow
    }
    else if (e.keyCode == '37') {
       angle -=90;
       prism.style.transform = 'rotateY(' +angle +'deg)';
       e.preventDefault();
    }
    else if (e.keyCode == '39') {
      angle +=90;
      prism.style.transform = 'rotateY(' +angle +'deg)';
      e.preventDefault();
    }

}



var rotateFunctions = [function Skills(){
  prism.style.transform = "rotateY( -90deg)";
},
function Experience(){
  prism.style.transform = "rotateY( -180deg)";
},

function Follow(){
  prism.style.transform = "rotateY( -270deg)";
},

function Projects(){
  prism.style.transform = "rotateX( -90deg)";
},

function showThankYou(){
  prism.style.transform = "rotateX( 90deg)";
},
function Home(){
  prism.style.transform = "none";
},]


function rotate(){
rotateFunctions[ind].call();
ind++;
ind = ind>5? 0 : ind;
}