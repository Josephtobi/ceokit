<script setup>
import { useTheme } from 'vuetify'
import { getLineChartConfig } from '@core/libs/chartjs/chartjsConfig'
import LineChart from '@core/libs/chartjs/components/LineChart'

const props = defineProps({
  colors: {
    type: null,
    required: true,
  },
})

const vuetifyTheme = useTheme()

const data = {
  labels: [
    '01/10',
    '02/10',
    '03/10',
    '04/10',
    '05/10',
    '06/10',
    '07/10',
    '08/10',
    '09/10',
    '10/10',
    '11/10',
    '12/10',
    '13/10',
    '14/10',
    '15/10',
  ],
  datasets: [
    {
      fill: false,
      tension: 0.5,
      pointRadius: 3,
      label: 'Revenue',
      pointHoverRadius: 5,
      pointStyle: 'circle',
      borderColor: props.colors.primary,
      backgroundColor: props.colors.primary,
      pointHoverBorderWidth: 5,
      pointHoverBorderColor: props.colors.white,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: props.colors.primary,
      data: [
        80,
        150,
        180,
        270,
        210,
        160,
        160,
        202,
        265,
        210,
        270,
        255,
        290,
        360,
        375,
      ],
    },
    {
      fill: false,
      tension: 0.5,
      pointRadius: 1,
      label: 'Profit',
      pointHoverRadius: 5,
      pointStyle: 'circle',
      borderColor: props.colors.yellow,
      backgroundColor: props.colors.yellow,
      pointHoverBorderWidth: 5,
      pointHoverBorderColor: props.colors.white,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: props.colors.yellow,
      data: [
        23,
        99,
        82,
        90,
        115,
        115,
        74,
        75,
        130,
        155,
        125,
        90,
        140,
        130,
        180,
      ],
    },
  ],
}

const chartConfig = computed(() => getLineChartConfig(vuetifyTheme.current.value))
</script>

<template>
  <LineChart
    :chart-options="chartConfig"
    :height="400"
    :chart-data="data"
  />
</template>
