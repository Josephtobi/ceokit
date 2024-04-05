<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { defineProps, computed } from 'vue'


const props = defineProps({
  series: Array,
})


const vuetifyTheme = useTheme()



const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  
  const lastDataPointIndex = props.series && props.series[0] ? props.series[0].data.length - 1 : 0


  return {
    grid: {
      show: false,
      padding: {
        left: -2,
        top: -10,
      },
    },
    chart: {
      parentHeightOffset: 0,
      type: 'line',
      offsetX: -8,
      dropShadow: {
        enabled: true,
        top: 10,
        blur: 4,
        color: currentTheme.primary,
        opacity: 0.09,
      },
      toolbar: { show: false },
    },
    markers: {
      size: 6,
      colors: 'transparent',
      strokeColors: 'transparent',
      strokeWidth: 4,
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: lastDataPointIndex,
        fillColor: currentTheme.surface,
        strokeColor: currentTheme.primary,
        size: 6,
      }],
      hover: { size: 7 },
    },
    stroke: {
      width: 5,
      curve: 'smooth',
      lineCap: 'round',
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
    yaxis: { labels: { show: false } },
    tooltip: { enabled: false },
    colors: [currentTheme.primary],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h6 class="text-h6">
        $35.4k
      </h6>
      <VueApexCharts
        :options="chartOptions"
        :series="props.series"
        :height="116"
      />

      <h6 class="text-sm text-center font-weight-medium">
        Total Revenue
      </h6>
    </VCardText>
  </VCard>
</template>
