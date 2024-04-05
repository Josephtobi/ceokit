<script setup>
import { ref, computed, onMounted } from 'vue'
import TreeTable from 'primevue/treetable'
import Column from 'primevue/column'
import SevenDayRoasChart from '@/pages/dashboards/adspend-SevenDayRoasChart.vue'
import MultiSelect from 'primevue/multiselect' // Import MultiSelect component
import { adspendtrackingoverview } from './profitdashboard-data'
import { useTheme } from 'vuetify'



const vuetifyTheme = useTheme()
const chartConfig = computed(() => getAreaChartSplineConfig(vuetifyTheme.current.value))


const columns = ref([
  { field: 'spend', header: 'Spend' },
  { field: 'revenue', header: 'Revenue' },
  { field: 'roas', header: 'ROAS' },
  { header: '7 Day ROAS' }, // Special column for the chart, handled separately without a field
  { field: 'profitloss', header: 'Profit / Loss' },
  { field: 'purchases', header: 'Purchases' },
  { field: 'cpa', header: 'CPA' },
  { field: 'cpm', header: 'CPM' },
  { field: 'views', header: 'Views' },
  { field: 'cpc', header: 'CPC' },
  { field: 'clicks', header: 'Clicks' },
  { field: 'ctr', header: 'CTR' },
])

const selectedColumns = computed(() => {
  return columns.value.map(col => ({ label: col.header, value: col.field }))
})


// Already existing computed property for selected columns
const filteredSelectedColumns = computed(() => {
  return selectedColumns.value.filter(col => col.field && col.field !== 'name')
})

const onColumnToggle = selectedValues => {
  const selectedFields = selectedValues.map(v => v.value)

  selectedColumns.value = columns.value.filter(col => selectedFields.includes(col.field))
}



const selectedHeaders = computed(() => selectedColumns.value.map(col => col.header))


const campaigndata = ref([
  {
    key: "0",
    data: {
      name: 'Campaign 1',
      spend: '$60.00',
      revenue: '$120.00',
      cpa: '$30.00',
      profitloss: '$60.00',
      purchases: '2',
      cpm: '$10.00',
      views: '6,000',
      cpc: '$1.00',
      clicks: '60',
      ctr: '1.00',
      status: 1,
      series: [
        { 
          name: 'ROAS',
          data: [
            1.5,
            2.8,
            4.2,
            3.0,
            2.7,
            3.8,
            2.3,
          ],
        },
      ],
    },
    children: [
      {
        key: "0-0",
        data: {
          name: 'Adgroup 1',
          spend: '$60.00',
          revenue: '$120.00',
          cpa: '$30.00',
          profitloss: '$60.00',
          purchases: '2',
          cpm: '$10.00',
          views: '6,000',
          cpc: '$1.00',
          clicks: '60',
          ctr: '1.00',
          status: 1,
          series: [
            { 
              name: 'ROAS',
              data: [
                1.2,
                2.6,
                3.5,
                2.0,
                2.6,
                3.5,
                2.0,
              ],
            },
          ],
        },
        
        children: [
          {
            key: "0-0-0",
            data: {
              name: 'Ad 1',
              spend: '$60.00',
              revenue: '$120.00',
              cpa: '$30.00',
              profitloss: '$60.00',
              purchases: '2',
              cpm: '$10.00',
              views: '6,000',
              cpc: '$1.00',
              clicks: '60',
              ctr: '1.00',
              status: 1,
              series: [
                { 
                  name: 'ROAS',
                  data: [
                    1.2,
                    2.6,
                    3.5,
                    2.0,
                    2.6,
                    3.5,
                    2.0,
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        key: "0-1",
        data: {
          name: 'Adgroup 2',
          spend: '$60.00',
          revenue: '$120.00',
          cpa: '$30.00',
          profitloss: '$60.00',
          purchases: '2',
          cpm: '$10.00',
          views: '6,000',
          cpc: '$1.00',
          clicks: '60',
          ctr: '1.00',
          status: 1,
          series: [
            { 
              name: 'ROAS',
              data: [
                1.2,
                2.6,
                3.5,
                2.0,
                2.6,
                3.5,
                2.0,
              ],
            },
          ],
        },
        
        children: [
          {
            key: "0-0-1",
            data: {
              name: 'Ad 2',
              spend: '$60.00',
              revenue: '$120.00',
              cpa: '$30.00',
              profitloss: '$60.00',
              purchases: '2',
              cpm: '$10.00',
              views: '6,000',
              cpc: '$1.00',
              clicks: '60',
              ctr: '1.00',
              status: 1,
              series: [
                { 
                  name: 'ROAS',
                  data: [
                    1.2,
                    2.6,
                    3.5,
                    2.0,
                    2.6,
                    3.5,
                    2.0,
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },

  {
    key: "1",
    data: {
      name: 'Campaign 2',
      spend: '$150.00',
      revenue: '$450.00',
      cpa: '$50.00',
      profitloss: '$300.00',
      purchases: '3',
      cpm: '$5.00',
      views: '30,000',
      cpc: '$0.50',
      clicks: '900',
      ctr: '3',
      status: 0,
      series: [
        { 
          name: 'ROAS',
          data: [
            3.5,
            2.1,
            4.5,
            2.6,
            3.2,
            4.0,
            1.8,
          ],
        },
      ],
    },
    children: [
      {
        key: "1-0",
        data: {
          name: 'Adgroup 2',
          spend: '$150.00',
          revenue: '$450.00',
          cpa: '$50.00',
          profitloss: '$300.00',
          purchases: '3',
          cpm: '$5.00',
          views: '30,000',
          cpc: '$0.50',
          clicks: '900',
          ctr: '3',
          status: 1,
          series: [
            { 
              name: 'ROAS',
              data: [
                1.2,
                2.6,
                3.5,
                2.0,
                2.6,
                3.5,
                2.0,
              ],
            },
          ],
        },
        children: [
          {
            key: "1-0-0",
            data: {
              name: 'Ad 3',
              spend: '$150.00',
              revenue: '$450.00',
              cpa: '$50.00',
              profitloss: '$300.00',
              purchases: '3',
              cpm: '$5.00',
              views: '30,000',
              cpc: '$0.50',
              clicks: '900',
              ctr: '3',
              status: 1,
              series: [
                { 
                  name: 'ROAS',
                  data: [
                    1.2,
                    2.6,
                    3.5,
                    2.0,
                    2.6,
                    3.5,
                    2.0,
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },

  {
    key: "2",
    data: {
      name: 'Campaign 3',
      spend: '$140.00',
      revenue: '$120.00',
      cpa: '$30.00',
      profitloss: '-$20.00',
      purchases: '2',
      cpm: '$10.00',
      views: '6,000',
      cpc: '$1.00',
      clicks: '60',
      ctr: '1.00',
      status: 1,
      series: [
        { 
          name: 'ROAS',
          data: [
            2.2,
            3.6,
            4.1,
            1.9,
            2.4,
            3.3,
            2.5,
          ],
        },
      ],
    },
    children: [
      {
        key: "2-0",
        data: {
          name: 'Adgroup 3',
          spend: '$60.00',
          revenue: '$120.00',
          cpa: '$30.00',
          profitloss: '$60.00',
          purchases: '2',
          cpm: '$10.00',
          views: '6,000',
          cpc: '$1.00',
          clicks: '60',
          ctr: '1.00',
          status: 1,
          series: [
            { 
              name: 'ROAS',
              data: [
                1.2,
                2.6,
                3.5,
                2.0,
                2.6,
                3.5,
                2.0,
              ],
            },
          ],
        },
        children: [
          {
            key: "3-0-0",
            data: {
              name: 'Ad 2',
              spend: '$60.00',
              revenue: '$120.00',
              cpa: '$30.00',
              profitloss: '$60.00',
              purchases: '2',
              cpm: '$10.00',
              views: '6,000',
              cpc: '$1.00',
              clicks: '60',
              ctr: '1.00',
              status: 1,
              series: [
                { 
                  name: 'ROAS',
                  data: [
                    1.2,
                    2.6,
                    3.5,
                    2.0,
                    2.6,
                    3.5,
                    2.0,
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },

  {
    key: "3",
    data: {
      name: 'Campaign 4',
      spend: '$60.00',
      revenue: '$120.00',
      cpa: '$30.00',
      profitloss: '$60.00',
      purchases: '2',
      cpm: '$10.00',
      views: '6,000',
      cpc: '$1.00',
      clicks: '60',
      ctr: '1.00',
      status: 1,
      series: [
        { 
          name: 'ROAS',
          data: [
            2.9,
            4.3,
            3.7,
            2.2,
            3.1,
            1.5,
            3.4,
          ],
        },
      ],
    },
    children: [
      {
        key: "3-0",
        data: {
          name: 'Adgroup 4',
          spend: '$60.00',
          revenue: '$120.00',
          cpa: '$30.00',
          profitloss: '$60.00',
          purchases: '2',
          cpm: '$10.00',
          views: '6,000',
          cpc: '$1.00',
          clicks: '60',
          ctr: '1.00',
          status: 1,
          series: [
            { 
              name: 'ROAS',
              data: [
                1.2,
                2.6,
                3.5,
                2.0,
                2.6,
                3.5,
                2.0,
              ],
            },
          ],
        },
        children: [
          {
            key: "3-0-0",
            data: {
              name: 'Ad 4',
              spend: '$60.00',
              revenue: '$120.00',
              cpa: '$30.00',
              profitloss: '$60.00',
              purchases: '2',
              cpm: '$10.00',
              views: '6,000',
              cpc: '$1.00',
              clicks: '60',
              ctr: '1.00',
              status: 1,
              series: [
                { 
                  name: 'ROAS',
                  data: [
                    1.2,
                    2.6,
                    3.5,
                    2.0,
                    2.6,
                    3.5,
                    2.0,
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },

  {
    key: "4",
    data: {
      name: 'Campaign 5',
      spend: '$60.00',
      revenue: '$120.00',
      cpa: '$30.00',
      profitloss: '$60.00',
      purchases: '2',
      cpm: '$10.00',
      views: '6,000',
      cpc: '$1.00',
      clicks: '60',
      ctr: '1.00',
      status: 1,
      series: [
        { 
          name: 'ROAS',
          data: [
            4.0,
            2.7,
            3.4,
            2.8,
            4.5,
            1.6,
            3.2,
          ],
        },
      ],
    },
    children: [
      {
        key: "4-0",
        data: {
          name: 'Adgroup 5',
          spend: '$60.00',
          revenue: '$120.00',
          cpa: '$30.00',
          profitloss: '$60.00',
          purchases: '2',
          cpm: '$10.00',
          views: '6,000',
          cpc: '$1.00',
          clicks: '60',
          ctr: '1.00',
          status: 1,
          series: [
            { 
              name: 'ROAS',
              data: [
                1.2,
                2.6,
                3.5,
                2.0,
                2.6,
                3.5,
                2.0,
              ],
            },
          ],
        },
        children: [
          {
            key: "4-0-0",
            data: {
              name: 'Ad 5',
              spend: '$60.00',
              revenue: '$120.00',
              cpa: '$30.00',
              profitloss: '$60.00',
              purchases: '2',
              cpm: '$10.00',
              views: '6,000',
              cpc: '$1.00',
              clicks: '60',
              ctr: '1.00',
              status: 1,
              series: [
                { 
                  name: 'ROAS',
                  data: [
                    1.2,
                    2.6,
                    3.5,
                    2.0,
                    2.6,
                    3.5,
                    2.0,
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },
  
])





const statusTemplate = node => {
  const statusInfo = resolveStatusVariant(node.data.status)
  
  return h('span', { style: `color: ${statusInfo.color}` }, statusInfo.text)
}

const chartTemplate = node => {
  return h(CardStatisticsTotalRevenueLineCharts, { series: node.data.series })
}

// Add a method to format numbers as currency
const formatCurrency = value => {
  // Assuming value is a number, not a string with a currency sign
  return `$${parseFloat(value).toFixed(2)}`
}

const parseCurrency = value => parseFloat(value.replace(/[$,]/g, ''))


const computedCampaigndata = computed(() => {
  return campaigndata.value.map(campaign => {
    let spend = parseCurrency(campaign.data.spend)
    let revenue = parseCurrency(campaign.data.revenue)
    let roas = spend !== 0 ? (revenue / spend).toFixed(2) : '0.00'

    return {
      ...campaign,
      data: {
        ...campaign.data,
        roas: roas,
      },
    }
  })
})

const sumField = field => {
  return campaigndata.value.reduce((sum, node) => {
    const value = typeof node.data[field] === 'string' ? parseCurrency(node.data[field]) : node.data[field]
    
    return sum + (isNaN(value) ? 0 : value)
  }, 0)
}


const calculateCpa = () => {
  const totalSpend = sumField('spend')
  const totalPurchases = sumField('purchases')
  
  return totalPurchases > 0 ? formatCurrency(totalSpend / totalPurchases) : '$0.00'
}

const calculateCpm = () => {
  const totalSpend = sumField('spend')
  const totalViews = sumField('views')
  
  return totalViews > 0 ? formatCurrency((totalSpend / (totalViews / 1000))) : '$0.00'
}


const calculateCpc = () => {
  const totalSpend = sumField('spend')
  const totalClicks = sumField('clicks')
  
  return totalClicks > 0 ? formatCurrency(totalSpend / totalClicks) : '$0.00'
}

const calculateCtr = () => {
  const totalViews = sumField('views')
  const totalClicks = sumField('clicks')

  // Ensure totalViews is not zero to avoid division by zero error
  return totalViews !== 0 ? `${((totalClicks / totalViews) * 100).toFixed(2)}%` : '0%'
}


const calculateRoas = () => {
  const totalRevenue = sumField('revenue')
  const totalSpend = sumField('spend')
  
  return totalSpend > 0 ? (totalRevenue / totalSpend).toFixed(2) : '0.00'
}


// Computed properties for each total
const totalSpend = computed(() => sumField('spend'))
const totalRevenue = computed(() => sumField('revenue'))
const totalProfitloss = computed(() => sumField('profitloss'))
const totalPurchases = computed(() => sumField('purchases').toString())
const totalViews = computed(() => sumField('views').toString())
const totalClicks = computed(() => sumField('clicks').toString())

// Add a computed property for the footer row
// ... other imports and setup code ...

const footerRow = {
  data: {
    name: 'Totals',
    spend: formatCurrency(sumField('spend')),
    revenue: formatCurrency(sumField('revenue')),
    roas: calculateRoas(),
    profitloss: formatCurrency(sumField('profitloss')),
    purchases: sumField('purchases').toString(),
    cpa: calculateCpa(),
    cpm: calculateCpm(),
    views: sumField('views').toString(),
    cpc: calculateCpc(),
    clicks: sumField('clicks').toString(),
    ctr: calculateCtr(),
    status: '',
    series: [],
  },
}


const profitLossColor = value => {
  const number = parseCurrency(value)
  
  return number >= 0 ? 'green' : 'red'
}



// Add the footer row to your campaigndata
campaigndata.value.push(footerRow)
</script>

<template>
  <div class="card">
    <!-- Column selector UI -->
    <MultiSelect
      v-model="selectedColumns"
      :options="columns"
      option-label="label"
      option-value="value"
      placeholder="Select Columns"
      display="chip"
      @update:modelValue="onColumnToggle"
    />







    <TreeTable
      :value="computedCampaigndata"
      scrollable
      scroll-direction="both"
      scroll-height="600px"
    >
      <!-- Name column with status circle -->
      <Column
        field="name"
        header="Name"
        expander
        style="min-width: 250px"
      >
        <template #body="slotProps">
          <div style="display: flex; align-items: center;">
            <!-- Status circle -->
            <div
              class="status-circle"
              :class="slotProps.node.data.status === 1 ? 'green-circle' : 'gray-circle'"
            />
            {{ slotProps.node.data.name }}
          </div>
        </template>
      </Column>

      <!-- Render other columns based on selection -->
      <Column
        v-for="col in filteredSelectedColumns"
        :key="col.header"
        :field="col.field"
        :header="col.header"
        style="min-width: 150px;"
      />

      <!-- Special '7 Day ROAS' column for the chart -->
      <Column
        v-if="selectedColumns.some(col => col.header === '7 Day ROAS')"
        header="7 Day ROAS"
        style="min-width: 250px;"
      >
        <template #body="slotProps">
          <SevenDayRoasChart :series="slotProps.node.data.series" />
        </template>
      </Column>

      <!-- Special formatting for 'Profit / Loss' column -->
      <Column
        v-if="selectedColumns.some(col => col.field === 'profitloss')"
        field="profitloss"
        header="Profit / Loss"
        style="min-width: 150px;"
      >
        <template #body="slotProps">
          <span :style="{ color: profitLossColor(slotProps.node.data.profitloss) }">
            {{ slotProps.node.data.profitloss }}
          </span>
        </template>
      </Column>

      <!-- ... other columns ... -->
    </TreeTable>
  </div>
</template>




<style>
.status-circle {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  margin-left: 8px;
}

/* Target every second row in the TreeTable */
.p-treetable tbody tr:nth-child(even) {
  background-color: #1f1f1f;
}

/* Style for first-level expanded rows */
.p-treetable-tbody > tr[aria-level="2"] {
  background-color: #1a1a1a !important; 
}

/* Style for second-level expanded rows */
.p-treetable-tbody > tr[aria-level="3"] {
  background-color: #111111 !important; 
}

tbody.p-treetable-tbody {
    margin-bottom: 6px;
}

.green-circle {
  background-color: #23d892;
}

.gray-circle {
  border: 1px solid #23d892;
}

.p-treetable tbody tr:last-child .status-circle {
  display: none;
}

td {
  border: 1px solid #3a3a3a !important;
}

th:first-child {
  justify-content: start !important;
  padding-left: 15px;
}

td:first-child {
  justify-content: start !important;
  padding-left: 15px;
}

.p-treetable thead tr th:not(:first-child) {
  justify-content: center;
}

.p-treetable tbody tr td:not(:first-child) {
  justify-content: center; 
}

.p-treetable tbody tr:last-child {
  background-color: #202020 !important; 
  border-top: 2px solid #23d892;

}



tr[aria-posinset="1"] > * {
    border-top: none !important;
}






.treetable-outer-wrapper {
  overflow: hidden; 
  color: #f8f8f8;
}

/* Scrollbar track */
::-webkit-scrollbar-track {
  background: #303030; 
  border-radius: 20px;
}

/* Scrollbar handle */
::-webkit-scrollbar-thumb {
  background: #404040; 
  border-radius: 20px;
}

/* Scrollbar width and height */
::-webkit-scrollbar {
  width: 12px; /* Width of the vertical scrollbar */
  height: 12px; /* Height of the horizontal scrollbar */
  
}

::-webkit-scrollbar-corner {
   background: #202020;
}

/* Firefox scrollbar styling */
* {
  scrollbar-width: thin;
  scrollbar-color: #303030 #404040;
}

.p-treetable thead th {
  border-top: 1px solid #3a3a3a !important;
  border-right: 1px solid #3a3a3a !important;
  border-left: 1px solid #3a3a3a !important;
  height: 55px;
  line-height: 55px; 
  padding-top: 0;
  padding-bottom: 0;
}

thead.p-treetable-thead {
  height: 55px;
  background-color: #202020;
  margin-bottom: 2px;
}


tr[role="row"][data-pc-section="headerrow"] {
  border-bottom: 2px solid #23d892;
}





.apexcharts-tooltip.apexcharts-theme-dark {
  background-color: #202020 !important;
}

.apexcharts-xaxistooltip.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark {
  display: none !important;
}
</style>



<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
@import 'primevue/resources/primevue.min.css';            /* core css */
</style>
