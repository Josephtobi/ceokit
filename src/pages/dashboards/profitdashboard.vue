<script setup>
import {
  currencyToNumber,
  profitdashboardheader,
  performancetimeline,
  totalCosts,
  totalEarnings,
  customBarChartDataValues,
  combined,
  labels,
  sortedDataset1,
  sortedDataset2,
  barChartData,
  adspendtimeline,
  othermetrics,
} from './profitdashboard-data'
import AnalyticsTotalEarning from '@/views/dashboards/analytics/AnalyticsTotalEarning.vue'
import ChartJsHorizontalBarChart from '@/views/charts/chartjs/ChartJsHorizontalBarChart.vue'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { getAreaChartSplineConfig } from '@core/libs/apex-chart/apexCharConfig'

const vuetifyTheme = useTheme()
const chartConfig = computed(() => getAreaChartSplineConfig(vuetifyTheme.current.value))
</script>





<!-- 👉 Code Start -->

<template>
  <VRow class="match-height">
    <!-- 👉 Code for Revenue - Costs - Net Profit - Net Margin -->
    <VCol
      v-for="statistics in profitdashboardheader"
      :key="statistics.title"
      cols="3"
      sm="6"
      md="3"
    >
      <CardStatisticsHorizontal v-bind="statistics" />
    </VCol>


    <!-- 👉 Code for Performance Timeline -->
    <VCol
      cols="12"
      md="8"
    >
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Performance Timeline</VCardTitle>
        </VCardItem>
        <VCardText>
          <VueApexCharts
            type="area"
            height="400"
            :options="chartConfig"
            :series="performancetimeline"
          />
        </VCardText>
      </VCard>
    </VCol>


    
    <VCol
      cols="12"
      md="4"
    >
      <VRow>
        <VCol cols="12">
          <!-- 👉 Code for Costs Breakdown -->
          <AnalyticsTotalEarning
            :earnings="totalEarnings"
            :total-costs="totalCosts"
          />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Balance Horizontal Bar Chart -->
    <VCol
      cols="12"
      md="4"
    >
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Total Adspend</VCardTitle>
          <VCardSubtitle :style="{ color: '#f8f8f8'}">
            $5,691.80
          </VCardSubtitle>
        </VCardItem>
        <VCardText>
          <ChartJsHorizontalBarChart
            :colors="chartJsCustomColors"
            :chart-data="barChartData"
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Code for Ad Spend Timeline -->
    <VCol
      cols="12"
      md="8"
    >
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Ad Spend Timeline</VCardTitle>
        </VCardItem>
        <VCardText>
          <VueApexCharts
            type="area"
            height="400"
            :options="chartConfig"
            :series="adspendtimeline"
          />
        </VCardText>
      </VCard>
    </VCol>


    <!-- 👉 Code for Other Metrics -->
    <VCol
      v-for="statistics in othermetrics"
      :key="statistics.title"
      cols="6"
      sm="6"
      md="2"
    >
      <CardStatisticsHorizontal v-bind="statistics" />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>

