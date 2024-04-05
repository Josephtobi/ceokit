<script setup>
import { computed } from 'vue'

const props = defineProps({
  earnings: {
    type: Array,
    required: true,
  },
  totalCosts: {
    type: String,
    required: true,
  },
})

// Convert currency string to float for sorting
const currencyToNumber = currencyString => {
  return parseFloat(currencyString.replace(/[^0-9.-]+/g, ""))
}

// Sorted earnings array
const sortedEarnings = computed(() => {
  return [...props.earnings].sort((a, b) => {
    return currencyToNumber(b.amount) - currencyToNumber(a.amount)
  })
})
</script>

<template>
  <VCard style="padding-bottom: 20px;">
    <VCardItem>
      <VCardTitle>Costs Breakdown</VCardTitle>
    </VCardItem>

    <VCardText class="pt-4">
      <div class="d-flex align-center">
        <h4 class="text-h4 me-2">
          {{ totalCosts }}
        </h4>
      </div>

      <VList class="card-list mt-9">
        <VListItem
          v-for="earning in sortedEarnings"
          :key="earning.title"
        >
          <template #prepend>
            <VAvatar
              rounded
              class="elevation-2"
              style="background-color: rgb(35 216 146 / 7%);"
            >
              <VIcon
                :color="earning.color"
                :icon="earning.icon"
                size="24"
              />
            </VAvatar>
          </template>

          <VListItemTitle
            class="text-sm font-weight-medium mb-1"
            style="margin-bottom: 0px !important;"
          >
            {{ earning.title }}
          </VListItemTitle>

          <template #append>
            <div>
              <h6
                class="text-sm font-weight-medium mb-2"
                style="width: 90px; text-align: center;"
              >
                {{ earning.amount }}
              </h6>
              <VProgressLinear
                :color="earning.progress"
                :model-value="earning.percentage"
              />
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 2.7rem !important;
}
</style>
