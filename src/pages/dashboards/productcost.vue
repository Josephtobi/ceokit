<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import { ref, computed, watch } from 'vue'
import data from '@/views/demos/forms/tables/data-table/cogsdatatable'


const formatCurrency = value => {
  return `$${value}`
}

const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}

const editDialog = ref(false)

const defaultItem = ref({
  id: -1,
  product_name: '',
  variant_name: '',
  selling_price: '',
  your_costs: '',
  profit: '',
})

const editedItem = ref(defaultItem.value)
const editedIndex = ref(-1)

const userList = ref([])

const calculateProfit = (sellingPrice, costs) => {
  return parseFloat((sellingPrice - costs).toFixed(2))
}



const headers = [
  {
    title: 'Product Name',
    key: 'product_name',
  },
  {
    title: 'Variant Name',
    key: 'variant_name',
  },
  {
    title: 'Selling Price',
    key: 'selling_price',
  },
  {
    title: 'Your Costs',
    key: 'your_costs',
  },
  {
    title: 'Profit',
    key: 'profit',
  },
  {
    title: 'Edit',
    key: 'edit',
  },
]



const editItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  editDialog.value = true
}


const close = () => {
  editDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}



const save = () => {
  // Create a new object with all properties except `profit`
  const itemToSave = {
    ...editedItem.value,
  }

  delete itemToSave.profit // Delete profit since it's computed

  if (editedIndex.value > -1) {
    // If we're editing an existing item, update it without the profit property.
    Object.assign(userList.value[editedIndex.value], itemToSave)
  } else {
    // If we're adding a new item, add it to the list without the profit property.
    userList.value.push(itemToSave)
  }
  close() // This should close the dialog.
}



onMounted(() => {
  userList.value = data.map(item => ({
    ...item,

    // Now each item has a profit calculated on the fly
    get profit() {
      return calculateProfit(item.selling_price, item.your_costs)
    },
  }))
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      style="
    background-color: #202020;
    border-radius: 20px !important;"
    >
      <!-- 👉 Row Editing via Dialog -->
      <VCol cols="12">
        <div
          class="d-flex justify-space-between align-center"
          style="margin-bottom: 20px;"
        >
          <!-- Text aligned to the left -->
          <p class="text-h5 my-0">
            Edit your Cost Of Goods (COGS)
          </p>
        
          <!-- Button aligned to the right -->
          <VBtn
            variant="outlined"
            rounded="pill"
            :loading="loadings[1]"
            :disabled="loadings[1]"
            color="primary"
            class="my-0"
            @click="load(1)"
          >
            <VIcon
              start
              icon="mdi-sync"
            />
            Sync new Products from Shopify
          </VBtn>
        </div>
        <VDataTable
          :headers="headers"
          :items="userList"
          :items-per-page="5"
        >
          <!-- product name -->
          <template #item.product_name="{ item }">
            <div class="d-flex align-center">
              <div class="d-flex flex-column ms-3">
                <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.raw.product_name }}</span>
                <small>{{ item.raw.post }}</small>
              </div>
            </div>
          </template>

          <!-- selling_price -->
          <template #item.selling_price="{ item }">
            <span>{{ formatCurrency(item.raw.selling_price) }}</span>
          </template>

          <!-- your_costs -->
          <template #item.your_costs="{ item }">
            <span>{{ formatCurrency(item.raw.your_costs) }}</span>
          </template>

          <!-- profit -->
          <template #item.profit="{ item }">
            <span>{{ formatCurrency(parseFloat(calculateProfit(item.raw.selling_price, item.raw.your_costs))) }}</span>
          </template>






          <!-- Actions -->
          <template #item.edit="{ item }">
            <div class="d-flex gap-1">
              <IconBtn @click="editItem(item.raw)">
                <VIcon icon="mdi-pencil-outline" />
              </IconBtn>
            </div>
          </template>
        </VDataTable>

        <!-- 👉 Edit Dialog  -->
        <VDialog
          v-model="editDialog"
          max-width="600px"
        >
          <VCard>
            <VCardTitle>
              <span class="headline">Edit Item</span>
            </VCardTitle>

            <VCardText>
              {{ editedItem?.product_name }}
              <VContainer>
                <VRow>
                  <!-- product_name -->
                  <VCol
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <VTextField
                      v-model="editedItem.product_name"
                      label="Product Name"
                    />
                  </VCol>

                  <!-- your_costs -->
                  <VCol
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <VTextField
                      v-model="editedItem.your_costs"
                      label="Your Costs"
                      prefix="$"
                      type="number"
                    />
                  </VCol>
                </VRow>
              </VContainer>
            </VCardText>

            <VCardActions>
              <VSpacer />

              <VBtn
                color="error"
                variant="outlined"
                @click="close"
              >
                Cancel
              </VBtn>

              <VBtn
                color="success"
                variant="elevated"
                @click="save"
              >
                Save
              </VBtn>
            </VCardActions>
          </VCard>
        </VDialog>
      </VCol>
    </Vcol>
  </VRow>
</template>
