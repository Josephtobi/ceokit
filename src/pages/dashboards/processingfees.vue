<script setup>
import { ref } from 'vue'

const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}

//👉 Fees Amount - Shopify Payments
const shopifypaymentspercentagefee = ref(2.9)
const shopifypaymentsfixedfee = ref(0.3)

//👉 Fees Amount - PayPal
const paypalpercentagefee = ref(2.9)
const paypalfixedfee = ref(0.3)

//👉 Fees Amount - Stripe
const stripepercentagefee = ref(2.9)
const stripefixedfee = ref(0.3)

//👉 Fees Amount - Shopify External Gateway
const shopifyexternalpercentagefee = ref(2.0)
</script>




<template>
  <VRow class="match-height">
    <!-- 👉 Processing Fees Header -->
    <VCol cols="12">
      <p class="text-h5 mb-3">
        Processing Fee Settings
      </p>
      <p
        class="text-h7"
        style="color: #f8f8f8;"
      >
        Change your payment gateway fees (used to calculate your Profit)
      </p>
    </VCol>

    <!-- 👉 Code Shopify Payments Fees -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard
        style="
        padding: 16px;"
      >
        <p class="text-h6 mb-8">
          Shopify Payments Gateway
        </p>

        <VTextField
          v-model="shopifypaymentspercentagefee"
          style="margin-bottom: 26px;"
          label="Percentage"
          prefix="%"
          type="number"
        />
        <VTextField
          v-model="shopifypaymentsfixedfee"
          style="margin-bottom: 14px;"
          label="Fixed Fee"
          prefix="$"
          type="number"
        />
      </VCard>
    </VCol>

    <!-- 👉 Code PayPal Fees -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard
        style="
        padding: 16px;"
      >
        <p class="text-h6 mb-8">
          PayPal Gateway
        </p>

        <VTextField
          v-model="paypalpercentagefee"
          style="margin-bottom: 26px;"
          label="Percentage"
          prefix="%"
          type="number"
        />
        <VTextField
          v-model="paypalfixedfee"
          style="margin-bottom: 14px;"
          label="Fixed Fee"
          prefix="$"
          type="number"
        />
      </VCard>
    </VCol>

    <!-- 👉 Code Stripe Fees -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard
        style="
        padding: 16px;"
      >
        <p class="text-h6 mb-8">
          Stripe Gateway
        </p>

        <VTextField
          v-model="stripepercentagefee"
          style="margin-bottom: 26px;"
          label="Percentage"
          prefix="%"
          type="number"
        />
        <VTextField
          v-model="stripefixedfee"
          style="margin-bottom: 14px;"
          label="Fixed Fee"
          prefix="$"
          type="number"
        />
      </VCard>
    </VCol>

    <!-- 👉 Code External Gateway Fees -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard
        style="
        padding: 16px;"
      >
        <p class="text-h6 mb-8">
          Shopify External Gateways
        </p>

        <VTextField
          v-model="shopifyexternalpercentagefee"
          style="margin-bottom: 14px;"
          label="Percentage"
          prefix="%"
          type="number"
        />
      </VCard>
    </VCol>

    <!-- 👉 Save and update button -->
    <VCol>
      <VBtn
        variant="outlined"
        rounded="rounded"
        :loading="loadings[1]"
        :disabled="loadings[1]"
        color="primary"
        @click="load(1)"
      >
        <VIcon
          start
          icon="mdi-check"
        />
        Save &amp; update all Fees
      </VBtn>
    </VCol>
  </VRow>
</template>





<style>
input {
    color: #f8f8f8 !important;
}
</style>
