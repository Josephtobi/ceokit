<script setup>
import { ref, computed, onMounted } from 'vue'
import TreeTable from 'primevue/treetable'
import Column from 'primevue/column'
import SevenDayRoasChart from '@/pages/dashboards/adspend-SevenDayRoasChart.vue'
import MultiSelect from 'primevue/multiselect' 
import { adspendtrackingoverview } from './profitdashboard-data'
import Sortable from 'sortablejs'



const columns = ref([
  { field: 'spend', header: 'Spend' },
  { field: 'revenue', header: 'Revenue' },
  { field: 'roas', header: 'ROAS' }, 
  { field: 'roasChart', header: 'ROAS Chart' },
  { field: 'profitloss', header: 'Profit/Loss' },
  { field: 'purchases', header: 'Purchases' },
  { field: 'cpa', header: 'CPA' },
  { field: 'cpm', header: 'CPM' },
  { field: 'views', header: 'Views' },
  { field: 'cpc', header: 'CPC' },
  { field: 'clicks', header: 'Clicks' },
  { field: 'ctr', header: 'CTR' },
])

const headersContainer = ref(null)


// Function to calculate ROAS
const calculateRoas = (revenue, spend) => {
  const revenueNum = parseFloat(revenue.replace(/[$,]/g, ''))
  const spendNum = parseFloat(spend.replace(/[$,]/g, ''))
  
  return (revenueNum / spendNum).toFixed(2) // Returns the value as a string with two decimal places
}

// Function to add ROAS to campaign data
const addRoasToData = data => {
  data.roas = calculateRoas(data.revenue, data.spend) // No "$" sign added here
  if (data.children) {
    data.children.forEach(child => addRoasToData(child.data))
  }
}

// Method to return the status class based on the status value
const statusClass = status => {
  return status === 1 ? 'green-circle' : 'gray-circle'
}


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
  
])

const createFooterData = () => {
  return {
    key: "footer",
    data: {
      name: '',
      spend: `$${totalSpend.value}`,
      revenue: `$${totalRevenue.value}`,
      roas: totalROAS.value,
      profitloss: `$${totalProfitLoss.value}`,
      purchases: totalPurchases.value.toString(),
      cpa: `$${totalCPA.value}`,
      cpm: `$${totalCPM.value}`,
      views: totalViews.value,
      cpc: `$${totalCPC.value}`,
      clicks: totalClicks.value.toString(),
      ctr: `${totalCTR.value}`,

      // Include any other totals you want to display
    },
  }
}

const reorderableHeaders = ref(false) // This will be used to toggle the header rendering



onMounted(() => {
  campaigndata.value.push(createFooterData())

  // Make sure headersContainer is pointing to the actual DOM element.
  if(headersContainer.value instanceof HTMLElement) {
    Sortable.create(headersContainer.value, {
      animation: 150,
      onEnd: evt => {
        const { oldIndex, newIndex } = evt
        if (oldIndex !== newIndex) {
          const movedItem = columns.value.splice(oldIndex, 1)[0]

          columns.value.splice(newIndex, 0, movedItem)
        }
      },
    })
    reorderableHeaders.value = true
  } else {
    console.error('headersContainer ref is not an HTMLElement', headersContainer.value)
  }
})


const onColumnReorder = (oldIndex, newIndex) => {
  const movedItem = columns.value.splice(oldIndex, 1)[0]

  columns.value.splice(newIndex, 0, movedItem)

  // Make sure to update the orderedColumns here or via a watch effect
  orderedColumns.value = [...columns.value]
}

// Computed property to get the columns in the order that matches the reordered headers
const orderedColumns = computed(() => {
  return [...columns.value] // Return a copy of the columns array
})

// Watch for changes in the columns array and reorder the dataset accordingly
watch(orderedColumns, newOrder => {
  // Apply the reordering to your dataset here
  // This is an example and needs to be adapted based on your data structure
  reorderDataset(newOrder)
})

// Example function to reorder the dataset (not implemented)
const reorderDataset = newOrder => {
  // Implement logic to reorder your campaigndata based on new column order
}


const parseCurrency = value => parseFloat(value.replace(/[$,]/g, ''))

// Sum up the values from the first layer of data
const sumColumn = columnName => {
  return campaigndata.value.reduce((total, campaign) => {
    return total + parseCurrency(campaign.data[columnName])
  }, 0)
}

const totalSpend = computed(() => sumColumn('spend').toFixed(2))
const totalRevenue = computed(() => sumColumn('revenue').toFixed(2))
const totalProfitLoss = computed(() => sumColumn('profitloss').toFixed(2))
const totalPurchases = computed(() => sumColumn('purchases'))
const totalViews = computed(() => sumColumn('views').toLocaleString())
const totalClicks = computed(() => sumColumn('clicks'))

const totalROAS = computed(() => (totalRevenue.value / totalSpend.value).toFixed(2))
const totalCPA = computed(() => (totalSpend.value / totalPurchases.value).toFixed(2))

const totalCPM = computed(() => {
  const viewsPerThousand = totalViews.value.replace(/,/g, '') / 1000
  
  return (totalSpend.value / viewsPerThousand).toFixed(2)
})

const totalCPC = computed(() => (totalSpend.value / totalClicks.value).toFixed(2))

const totalCTR = computed(() => {
  const ctr = (totalClicks.value / totalViews.value.replace(/,/g, '')) * 100
  
  return ctr.toFixed(2) + '%'
})

const footerCells = computed(() => {
  const cells = {
    spend: totalSpend.value,
    revenue: totalRevenue.value,
    roas: totalROAS.value,
    profitloss: totalProfitLoss.value,
    purchases: totalPurchases.value,
    cpa: totalCPA.value,
    cpm: totalCPM.value,
    views: totalViews.value,
    cpc: totalCPC.value,
    clicks: totalClicks.value,
    ctr: totalCTR.value,
  }

  return selectedColumns.value.map(col => cells[col.field] || '')
})



campaigndata.value.forEach(campaign => addRoasToData(campaign.data))

const selectedColumns = ref(columns.value)

const onToggle = val => {
  selectedColumns.value = columns.value.filter(col => val.includes(col))
}


// Computed property to filter out the 'name' column
const filteredColumns = computed(() => {
  return selectedColumns.value.filter(col => col.field !== 'name')
})

const displayColumns = computed(() => {
  return orderedColumns.value.filter(col => selectedColumns.value.includes(col.field))
})
</script>


<template>
  <VCard>
    <div class="outertablewrapper">
      <TreeTable
        :value="campaigndata"
        scrollable
        scroll-direction="both"
        scroll-height="600px"
        resizable-columns
        column-resize-mode="fit"
        show-gridlines
      >
        <!-- Header customization -->
        <template #header>
          <tr>
            <!-- Fixed "name" column header -->
            <th style="min-width: 250px;">
              Name
            </th>
            <!-- Draggable headers for other columns -->
            <th
              v-for="col in filteredColumns"
              :key="col.field"
              :style="{ minWidth: col.field === 'roasChart' ? '300px' : '150px' }"
            >
              <div
                v-show="reorderableHeaders"
                ref="headersContainer"
                class="header-item"
              >
                {{ col.header }}
              </div>
            </th>
          </tr>
        </template>

        <!-- Body customization -->
        <Column
          field="name"
          header="Name"
          expander
          frozen
          style="min-width: 250px;"
        >
          <template #body="slotProps">
            <!-- Status circle and name display -->
            <span
              v-if="slotProps.node.key !== 'footer'"
              class="status-circle"
              :class="[statusClass(slotProps.node.data.status)]"
            />
            {{ slotProps.node.data.name }}
          </template>
        </Column>

        <!-- Dynamic columns rendered from orderedColumns -->
        <Column
          v-for="col in displayColumns"
          :key="col.field"
          :field="col.field"
          :header="col.header"
          :style="{ minWidth: col.field === 'roasChart' ? '300px' : '150px' }"
        >
          <!-- Conditional rendering for ROAS Chart -->
          <template
            v-if="col.field === 'roasChart'"
            #body="slotProps"
          >
            <SevenDayRoasChart :series="slotProps.node.data.series" />
          </template>
          <template
            v-else
            #body="slotProps"
          >
            {{ slotProps.node.data[col.field] }}
          </template>
        </Column>
      </TreeTable>
    </div>
    <!-- MultiSelect for column toggling -->
    <MultiSelect
      v-model="selectedColumns"
      :options="columns"
      option-label="header"
      placeholder="Select Columns"
      class="column-toggle-select"
      @update:modelValue="onToggle"
    />
  </VCard>
</template>




<style>
/* Wrapper around the table */
.outertablewrapper {
    padding: 20px;
}

/* Text color for table */
.p-treetable-wrapper {
    color: #f8f8f8;
}


/* Status Circle Campaign Active or not */
.status-circle {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
    margin-left: 8px;
}
.green-circle {
    background-color: #23d892;
}
.gray-circle {
    border: 1px solid #23d892;
}


/* Make footer & header text bold and add green border */
.p-treetable-tbody > tr:last-child {
    font-weight: bold;
    border-top: 2px solid #23d892;
}
thead.p-treetable-thead {
    height: 50px;
}
tr[role="row"][data-pc-section="headerrow"] {
border-bottom: 2px solid #23d892;
}


/* Center align header, footer and column text */
.p-treetable .p-treetable-thead > tr > th,
.p-treetable .p-treetable-tfoot > tr > td {
    justify-content: center;
}
.p-treetable .p-treetable-tbody > tr > td:not(:first-child) {
    justify-content: center;
}
th.p-resizable-column.p-frozen-column {
    height: 50px;
    border-right: 1px solid #585858;
}
tr[aria-posinset="1"] {
    margin-top: 2px;
}

    


/* Grid lines */
td {
    border-right: 1px solid #585858;
}

th.p-resizable-column{
    border-right: 1px solid #585858;
}


/* Color the background of rows in different colors */
.p-treetable tbody tr:nth-child(even) {
    background-color: #171717;
}
.p-treetable tbody tr:nth-child(odd) {
    background-color: #1f1f1f;
}


/* Give expanded rows a different color at different levels */
.p-treetable-tbody > tr[aria-level="2"] {
    background-color: #1a1a1a !important; 
}
.p-treetable-tbody > tr[aria-level="3"] {
    background-color: #111111 !important; 
}



.headers-container {
  display: flex;
}

.header-item {
  flex: 0 0 auto;
  padding: 10px;
  background-color: #eee;
  border: 1px solid #ccc;
  cursor: move;
}





/* Column Resize Line Color */
.p-treetable .p-column-resizer-helper {
    background: #23d892 !important;
}



.p-treetable.p-component.p-treetable-resizable.p-treetable-resizable-fit.p-treetable-gridlines.p-treetable-scrollable.p-treetable-scrollable-both {
    overflow: auto;
}

.p-treetable-scrollable .p-treetable-wrapper {
    overflow: visible;
}
</style>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
@import 'primevue/resources/primevue.min.css';   
</style>
