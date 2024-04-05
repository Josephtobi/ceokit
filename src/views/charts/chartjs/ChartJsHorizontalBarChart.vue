<script setup>
import { useTheme } from 'vuetify'
import { getHorizontalBarChartConfig } from '@core/libs/chartjs/chartjsConfig'
import BarChart from '@core/libs/chartjs/components/BarChart'

const props = defineProps({
  colors: {
    type: Object,
    required: true,
  },
  chartData: {
    type: Object,
    required: true,
  },
})

const vuetifyTheme = useTheme()

const chartOptions = computed(() => {
  let options = getHorizontalBarChartConfig(vuetifyTheme.current.value)

  // Ensure scales option exists for axis labels
  options.scales = options.scales || {}

  // Modify x-axis label color
  options.scales.x = options.scales.x || {}
  options.scales.x.ticks = {
    ...options.scales.x.ticks,
    color: "#f8f8f8",
  }

  // Modify y-axis label color
  options.scales.y = options.scales.y || {}
  options.scales.y.ticks = {
    ...options.scales.y.ticks,
    color: "#f8f8f8",
  }

  // Ensure plugins option exists for legend labels
  options.plugins = options.plugins || {}

  // Modify legend label color
  options.plugins.legend = {
    ...options.plugins.legend,
    labels: {
      ...options.plugins.legend?.labels,
      color: "#f8f8f8",
    },
  }
  

  return options
})
</script>

<template>
  <BarChart
    :height="375"
    :chart-data="props.chartData"
    :chart-options="chartOptions"
  />
</template>
