const total_input = document.querySelector('.total_input');
const confirm_input = document.querySelector('.confirm_input');
const recover_input = document.querySelector('.recover_input');

const ctx = document.getElementById('covidChart').getContext('2d');
let covidChart = new Chart(ctx,{
    type: 'pie',
    data:{
        labels: ['Total Cases','Confirmed Cases','Recovered'],
        datasets: [
            {
                label: '# of Votes',
                data: [158,1,20],
                backgroundColor: ['#ffff00', '#f32013', '#4BB543'],
                borderWidth:1
            }
        ]
    }
});

const updateChartValue = (input, dataOrder) => {
    input.addEventListener('change', e=>{
        covidChart.data.datasets[0].data[dataOrder] = e.target.value;
        covidChart.update();
    })
}

updateChartValue(total_input,0);
updateChartValue(confirm_input,1);
updateChartValue(recover_input,2);
