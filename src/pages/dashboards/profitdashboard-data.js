export const currencyToNumber = currencyString => {
  return parseFloat(currencyString.replace(/[^0-9.-]+/g, ""))
}

import tiktokads from '@images/logos/tiktokads.png'
import facebookads from '@images/logos/facebookads.png'
import googleads from '@images/logos/googleads.png'
import snapchatads from '@images/logos/snapchatads.png'
import pinterestads from '@images/logos/pinterestads.png'
import roas from '@images/logos/roas.png'


// SECTION MAIN PROFIT DASHBOARD DATA

// 👉 Data for Revenue - Costs - Net Profit - Net Margin
export const profitdashboardheader = [
  {
    title: 'Revenue',
    color: 'primary',
    icon: 'mdi-currency-usd',
    stats: '$24,465',
  },
  {
    title: 'Costs',
    color: 'primary',
    icon: 'mdi-briefcase-variant-outline',
    stats: '$9,697',
  },
  {
    title: 'Net Profit',
    color: 'primary',
    icon: 'mdi-cash-multiple',
    stats: '$14,768',
  },
  {
    title: 'ROAS',
    color: 'primary',
    icon: 'mdi-cash-sync',
    stats: '4.71',
  },
  {
    title: 'Net Margin',
    color: 'primary',
    icon: 'mdi-trending-up',
    stats: '60.36%',
  },
  {
    title: 'AOV',
    color: 'primary',
    icon: 'mdi-account-cash-outline',
    stats: '$37.90',
  },
  {
    title: 'Orders',
    color: 'primary',
    icon: 'mdi-cart-outline',
    stats: '645',
  },
  
]






// 👉 Data for Performance Timeline
export const performancetimeline = [
  {
    name: 'Revenue',
    color: '#23d892',
    data: [
      100,
      120,
      90,
      170,
      130,
      160,
      140,
      240,
      220,
      180,
      270,
      280,
      375,
      321,
    ],
  },
  {
    name: 'Net Profit',
    color: '#169adc',
    data: [
      20,
      40,
      30,
      70,
      40,
      60,
      50,
      140,
      120,
      100,
      140,
      180,
      220,
      184,
    ],
  },
]





// 👉 Data for Costs Breakdown - summized
export const totalCosts = '$7,697'

// 👉 Data for Costs Breakdown - single costs
export const totalEarnings = [
  {
    icon: 'mdi-truck-outline',
    color: 'primary',
    title: 'Product Costs',
    amount: '$3,284',
    progress: 'primary',
  },
  {
    icon: 'mdi-chart-donut',
    color: 'primary',
    title: 'Processing Fees',
    amount: '$721.20',
    progress: 'primary',
  },
  {
    icon: 'mdi-bullhorn-outline',
    color: 'primary',
    title: 'Ad Spend',
    amount: '$5,691.80',
    progress: 'primary',
  },
  {
    icon: 'mdi-cash-plus',
    color: 'primary',
    title: 'Taxes Paid',
    amount: '$0.00',
    progress: 'primary',
  },
  
]

// Convert totalCosts to a number
export const totalCostsNumber = currencyToNumber(totalCosts)

// Calculate the percentage each earning represents of the total
totalEarnings.forEach(earning => {
  earning.percentage = (currencyToNumber(earning.amount) / totalCostsNumber) * 100
})




// 👉 Total Adspend Chart

// Data for Total Adspend. Sorted like this: Facebook Ads, TikTok Ads, Google Ads, Snapchat Ads, Pinterest Ads
export const customBarChartDataValues = {
  dataset2: [6835, 9546, 3854, 2867, 1363], // Revenue
  dataset1: [1784, 2570, 536.80, 517, 284], // Spend
}

// Labels for your datasets
export let labels = ['Facebook Ads', 'TikTok Ads', 'Google Ads', 'Snapchat Ads', 'Pinterest Ads']

// Combine the labels with dataset1 (Spend) and dataset2 (Revenue) for sorting
export let combined = labels.map((label, index) => {
  return { 
    label: label, 
    spend: customBarChartDataValues.dataset1[index],
    revenue: customBarChartDataValues.dataset2[index],
  }
})

// Sort combined array by revenue in descending order
combined.sort((a, b) => b.revenue - a.revenue)

labels = combined.map(el => el.label)

export const sortedDataset1 = combined.map(el => el.spend)
export const sortedDataset2 = combined.map(el => el.revenue)

export const barChartData = {
  labels: labels,
  datasets: [
    {
      maxBarThickness: 15,
      label: 'Revenue',
      backgroundColor: '#169adc',
      borderColor: 'transparent',
      data: sortedDataset2,
    },
    {
      maxBarThickness: 15,
      label: 'Spend',
      backgroundColor: '#23d892',
      borderColor: 'transparent',
      data: sortedDataset1,
    },

  ],
}


// 👉 Data for Performance Timeline
export const adspendtimeline = [
  {
    name: 'Facebook Ads',
    color: '#1773ea',
    data: [
      128,
      100,
      136,
      96,
      116,
      105,
      172,
      142,
      225,
      189,
      199,
      122,
      172,
      132,
    ],
  },
  {
    name: 'TikTok Ads',
    color: '#08f2eb',
    data: [
      200,
      150,
      190,
      140,
      170,
      155,
      255,
      210,
      185,
      280,
      295,
      180,
      150,
      190,
    ],
  },
  {
    name: 'Google Ads',
    color: '#31a952',
    data: [
      15.6,
      60.2,
      33.5,
      48.9,
      61.7,
      57.3,
      19.4,
      52.1,
      26.8,
      44.6,
      39.2,
      41.5,
      68.4,
      27.1,
    ],
  },
  {
    name: 'Snapchat Ads',
    color: '#efe419',
    data: [
      52,
      29,
      55,
      53,
      18,
      26,
      51,
      80,
      37,
      39,
      42,
      31,
      34,
      41,
    ],
  },
  {
    name: 'Pinterest Ads',
    color: '#d83b38',
    data: [
      15,
      19,
      22,
      18,
      21,
      20,
      23,
      17,
      24,
      16,
      25,
      19,
      24,
      21,
    ],
  },
]



// 👉 Data for other Metrics
export const othermetrics = [
  {
    title: 'Orders',
    color: 'primary',
    icon: 'mdi-cart-outline',
    stats: '645',
  },
  {
    title: 'Visitors',
    color: 'primary',
    icon: 'mdi-account-group-outline',
    stats: '12,456',
  },
  {
    title: 'CVR',
    color: 'primary',
    icon: 'mdi-account-filter-outline',
    stats: '4.65%',
  },
  {
    title: 'AOV',
    color: 'primary',
    icon: 'mdi-account-cash-outline',
    stats: '$37.90',
  },
  {
    title: 'Refunds',
    color: 'primary',
    icon: 'mdi-cash-minus',
    stats: '$74.56',
  },
  {
    title: 'B.E ROAS',
    color: 'primary',
    icon: 'mdi-plus-minus-variant',
    stats: '1.35',
  },
]

// !SECTION






// SECTION  AD SPEND TRACKING DATA


// 👉 Data for Revenue - Costs - Net Profit - Net Margin
export const adspendtrackingoverview = [
  {
    title: 'Facebook',
    image: facebookads,
    stats: '$24,465',
  },
  {
    title: 'TikTok',
    image: tiktokads,
    stats: '$9,697',
  },
  {
    title: 'Google',
    image: googleads,
    stats: '$14,768',
  },
  {
    title: 'Snapchat',
    image: snapchatads,
    stats: '$215',
  },
  {
    title: 'Pinterest',
    image: pinterestads,
    stats: '$2,546',
  },
  {
    title: 'ROAS',
    image: roas,
    stats: '2.5',
  },
]

