<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { defineProps, computed } from 'vue'
import { format, subDays } from 'date-fns'


const props = defineProps({
  series: Array,
})


const vuetifyTheme = useTheme()

const lastSevenDays = Array.from({ length: 7 }).map((_, i) => {
  const date = subDays(new Date(), i)
  
  return format(date, 'dd/MM') // Formats the date as 'day/month'
}).reverse() // Reverse to get the oldest date first

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  
  const lastDataPointIndex = props.series && props.series[0] ? props.series[0].data.length - 1 : 0


  return {
    grid: {
      show: false,
      padding: {
        left: 5,
        top: -20,
      },
    },
    chart: {
      
      parentHeightOffset: 0,
      type: 'line',
      offsetX: -5,
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: true,
      theme: 'dark', 
    },
    stroke: {
      width: 4,
      curve: 'smooth',
      lineCap: 'round',
    },
    
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
      tooltip: { enabled: true },
      categories: lastSevenDays,
    },
    yaxis: { labels: { show: false } },
    colors: [currentTheme.secondary],
  }
})
</script>

<template>
  <VueApexCharts
    :options="chartOptions"
    :series="props.series"
    :height="50"
  />
</template>
