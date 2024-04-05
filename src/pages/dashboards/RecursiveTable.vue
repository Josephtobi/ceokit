<script>
import { defineComponent } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

// Import other necessary components

export default defineComponent({
  components: {
    VDataTable,

    // Other components
  },
  props: {
    headers: Array,
    items: Array,
  },
})
</script>

<template>
  <VDataTable
    :headers="headers"
    :items="items"
    :items-per-page="5"
    expand-on-click
  >
    <!-- Expanded Row Data -->
    <template #expanded-row="{ item }">
      <tr>
        <td :colspan="headers.length">
          <RecursiveTable
            :headers="headers"
            :items="items"
          />
        </td>
      </tr>
    </template>

    <!-- Other slots for full_name, status, etc. -->
  </VDataTable>
</template>

