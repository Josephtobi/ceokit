<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()
const { theme } = useThemeConfig()

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}



const options = controlledComputed(theme, () => {
  const currentTheme = ref(vuetifyTheme.current.value.colors)
  const variableTheme = ref(vuetifyTheme.current.value.variables)
  const secondaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['medium-emphasis-opacity'] })`
  const primaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['high-emphasis-opacity'] })`
  
  return {
    colors: [
      currentTheme.value.info,
      currentTheme.value.primary,
      `rgba(${ hexToRgb(currentTheme.value.primary) }, 0.7)`,
      `rgba(${ hexToRgb(currentTheme.value.primary) }, 0.5)`,
    ],
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    legend: {
      show: true,
      position: 'bottom',
      labels: { colors: secondaryTextColor },
    },
    labels: [
      'COGS',
      'Fees',
      'Ad spend',
    ],
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    plotOptions: {
      pie: {
        customScale: 0.9,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              color: secondaryTextColor,
            },
            value: {
              offsetY: -15,
              fontWeight: 600,
              color: primaryTextColor,
              formatter: value => formatCurrency(value),
            },
            total: {
              show: true,
              label: 'Total Costs',
              fontSize: '12px',
              color: secondaryTextColor,
              formatter: value => formatCurrency(value.globals.seriesTotals.reduce((total, num) => total + num)),
            },
          },
        },
      },
    },
  }
})

const series = [
  5000,
  697,
  2000,
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Costs Breakdown</VCardTitle>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="donut"
        :options="options"
        :series="series"
        :height="292"
      />
    </VCardText>
  </VCard>
</template>
