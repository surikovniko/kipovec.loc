@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}

                    <x-alert/>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Charts') }}</div>

                <div class="card-body">
                    <div id="container2" style="height: 1000px; min-width: 310px">
                    </div>
                    <script type="text/javascript">
                    Highcharts.chart('container2', {
                        chart: {
        type: 'bar'
    },
    title: {
        text: 'Диаграмма расхода мазута, котельная №38',
        align: 'left'
    },
    subtitle: {
        text: 'Источник: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">kipovec.com</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
         'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'М-100 (тонн)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' тонн'
    },
    plotOptions: {
        bar: {
            borderRadius: '30%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -20,
        y: 300,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFF0',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '2020 год.',
        data: [726, 731, 694, 600, 508, 261, 0, 75, 298, 547, 673, 658]
    }, {
        name: '2022 год.',
        data: [701, 651, 677, 543, 439, 220, 0, 28, 274, 384, 520, 649]
    }, {
        name: '2023 год',
        data: [625, 584, 663, 501, 371, 140, 0, 50, 254, 497, 652, 658]
    }, {
        name: '2024 год.',
        data: [676, 634, 608, 525, 398]
    
    }]
});
                    </script>
                    
                </div>
            </div>
        </div>
    </div>
</div>
<p>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Stock') }}</div>

                <div class="card-body">
                    <div id="container3" style="height: 400px; min-width: 310px">
                    </div>
                    <script type="text/javascript">
(async () => {

const data = await fetch(
    'https://demo-live-data.highcharts.com/aapl-c.json'
).then(response => response.json());

// Create the chart
Highcharts.stockChart('container3', {
    rangeSelector: {
        selected: 1
    },

    title: {
        text: 'AAPL Stock Price'
    },

    series: [{
        name: 'AAPL',
        data: data,
        tooltip: {
            valueDecimals: 2
        }
    }]
});
})();
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>

<p>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ __('Temperature') }}</div>
    
                    <div class="card-body">
                        <div id="container4" style="height: 600px; min-width: 310px">
                        </div>
                        <script type="text/javascript">
                        Highcharts.chart('container4', {
                            chart: {
        type: 'column'
    },

    title: {
        text: 'Olympic Games all-time medal table, grouped by continent',
        align: 'left'
    },

    xAxis: {
        categories: ['Gold', 'Silver', 'Bronze', 'Bronze2']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Count medals'
        }
    },

    tooltip: {
        format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
            'Total: {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Norway',
        data: [148, 133, 124, 50],
        stack: 'Europe'
    }, {
        name: 'Germany',
        data: [102, 98, 65, 20],
        stack: 'Europe'
    }, {
        name: 'United States',
        data: [113, 122, 95, 34],
        stack: 'North America'
    }, {
        name: 'Canada',
        data: [77, 72, 80, 40],
        stack: 'North America'
    }, {
        name: 'Canada',
        data: [10, 15, 20, 30],
        stack: 'North America'
    }]
});
                        </script>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
