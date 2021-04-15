(function(window, undefined) {
  'use strict';

    var $primary = '#55A9FF',
    $success = '#28C76F',
    $danger = '#EA5455',
    $warning = '#FF9F43',
    $info = '#00cfe8',
    $label_color_light = '#dae1e7';

  var themeColors = [$primary, $success, $danger, $warning, $info];

  // RTL Support
  var yaxis_opposite = false;
  if($('html').data('textdirection') == 'rtl'){
    yaxis_opposite = true;
  }

  // Line Chart
  // ----------------------------------
  var lineChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    }],
   
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
      tickAmount: 5,
      opposite: yaxis_opposite
    }
  }
  var lineChart = new ApexCharts(
    document.querySelector("#line-chart"),
    lineChartOptions
  );
  lineChart.render();


   $('.data-list').DataTable({
   "bPaginate": false,
        "bFilter": false,
        "bInfo": false

   });


    $('select').niceSelect();

   $(".shipping-details li").click(function() {
    $(this).addClass('active');

    });
    $(".shipping-info-list li").click(function() {
    $(this).addClass('active');
     });
    $(".shipping-info-list .update").click(function() {
    $(this).addClass('active');
    $(".shipping-info-list .update-form").addClass('active');
    });

    var tbl;
$(document).ready(function (){
          tbl = $('.example').DataTable({
            columnDefs: [{
                targets: 0,
                data: 2,
                'checkboxes': {
                    'selectRow': true
                }
            },
            { "visible": true, "targets": 1 }],
            select: {
                style: 'multi'
            },
            order: [[1, 'asc']],
            iDisplayLength: 10,
            
        });
});
function getSelected(){
  var selectedIds = tbl.columns().checkboxes.selected()[0];
  console.log(selectedIds)
 
  selectedIds.forEach(function(selectedId) {
    alert(selectedId);
  });
}

})(window);