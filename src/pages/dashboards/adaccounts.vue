<script setup>
import { ref } from 'vue'
import { linkedAccounts, addAccount, removeAccount } from './linkedadaccounts'
import tiktokads from '@images/logos/tiktokads.png'
import facebookads from '@images/logos/facebookads.png'
import googleads from '@images/logos/googleads.png'
import snapchatads from '@images/logos/snapchatads.png'
import pinterestads from '@images/logos/pinterestads.png'

const redirectToUrl = url => {
  window.location.href = url
}

const isDialogVisible = ref(false)
const selectedAccount = ref({ platform: '', name: '' })

// Function to show dialog
const showRemoveDialog = (platform, account) => {
  selectedAccount.value = { platform, name: account }
  isDialogVisible.value = true
}

// Function to confirm removal
const confirmRemove = () => {
  removeAccount(selectedAccount.value.platform, selectedAccount.value.name)
  isDialogVisible.value = false
}
</script>




<template>
  <VRow class="match-height">
    <VRow class="match-height">
      <!-- 👉 Ad Spend Tracking  Header -->
      <VCol cols="12">
        <p class="text-h5 mb-3">
          Ad Spend Tracking
        </p>
        <p
          class="text-h7 mb-8"
          style="color: #f8f8f8;"
        >
          Link your Ad Accounts below to get real time ad spend data to your profit dashboard
        </p>
      </VCol>
    </VRow>


    <VRow class="match-height">
      <!-- 👉 Code for TikTok Ad Account Linking -->
      <VCol cols="12">
        <div class="account-container">
          <img
            :src="tiktokads"
            alt="TikTok Ads"
            class="ad-logo"
          >
          <p class="text-h6">
            TikTok Ads
          </p>
        </div>
        <div class="flex-container">
          <!-- Main Card for Account Linking -->
          <VCard
            class="account-linking-card"
            @click="redirectToUrl('https://google.com')"
          >
            <div class="d-flex flex-column align-center">
              <div class="dashed-circle">
                <VIcon :size="46">
                  mdi-plus
                </VIcon>
              </div>
              <p class="text-h7">
                Add<br>TikTok Account
              </p>
            </div>
          </VCard>

          <!-- Cards for Linked TikTok Accounts -->
          <VCard
            v-for="(account, index) in linkedAccounts.tiktok" 
            :key="index" 
            class="linked-account-card d-flex flex-column align-center justify-center"
          >
            <div class="dashed-circle-added-account">
              <VIcon
                :size="46"
                color="primary"
              >
                mdi-account-outline
              </VIcon>
            </div>
            <p class="text-h7">
              {{ account }}
            </p>

            <VBtn
              rounded="pill"
              class="unlink-button"
              variant="outlined"
              color="primary"
              @click="showRemoveDialog('tiktok', account)"
            >
              <VIcon
                start
                icon="mdi-link-variant-off"
              />Unlink
            </VBtn>
          </VCard>
        </div>
      </VCol>
    </VRow>


    <VRow class="match-height">
      <!-- 👉 Code for Facebook Ad Account Linking -->
      <VCol cols="12">
        <div class="account-container">
          <img
            :src="facebookads"
            alt="Facebook Ads"
            class="ad-logo"
          >
          <p class="text-h6">
            Facebook Ads
          </p>
        </div>
        <div class="flex-container">
          <!-- Main Card for Account Linking -->
          <VCard
            class="account-linking-card"
            @click="redirectToUrl('https://google.com')"
          >
            <div class="d-flex flex-column align-center">
              <div class="dashed-circle">
                <VIcon :size="46">
                  mdi-plus
                </VIcon>
              </div>
              <p class="text-h7">
                Add<br>Facebook Account
              </p>
            </div>
          </VCard>

          <!-- Cards for Linked Facebook Accounts -->
          <VCard
            v-for="(account, index) in linkedAccounts.facebook" 
            :key="index" 
            class="linked-account-card d-flex flex-column align-center justify-center"
          >
            <div class="dashed-circle-added-account">
              <VIcon
                :size="46"
                color="primary"
              >
                mdi-account-outline
              </VIcon>
            </div>
            <p class="text-h7">
              {{ account }}
            </p>

            <VBtn
              rounded="pill"
              class="unlink-button"
              variant="outlined"
              color="primary"
              @click="showRemoveDialog('facebook', account)"
            >
              <VIcon
                start
                icon="mdi-link-variant-off"
              />Unlink
            </VBtn>
          </VCard>
        </div>
      </VCol>
    </VRow>

    <VRow class="match-height">
      <!-- 👉 Code for Google Ad Account Linking -->
      <VCol cols="12">
        <div class="account-container">
          <img
            :src="googleads"
            alt="Google Ads"
            class="ad-logo"
          >
          <p class="text-h6">
            Google Ads
          </p>
        </div>
        <div class="flex-container">
          <!-- Main Card for Account Linking -->
          <VCard
            class="account-linking-card"
            @click="redirectToUrl('https://google.com')"
          >
            <div class="d-flex flex-column align-center">
              <div class="dashed-circle">
                <VIcon :size="46">
                  mdi-plus
                </VIcon>
              </div>
              <p class="text-h7">
                Add<br>Google Account
              </p>
            </div>
          </VCard>

          <!-- Cards for Linked TikTok Accounts -->
          <VCard
            v-for="(account, index) in linkedAccounts.google" 
            :key="index" 
            class="linked-account-card d-flex flex-column align-center justify-center"
          >
            <div class="dashed-circle-added-account">
              <VIcon
                :size="46"
                color="primary"
              >
                mdi-account-outline
              </VIcon>
            </div>
            <p class="text-h7">
              {{ account }}
            </p>

            <VBtn
              rounded="pill"
              class="unlink-button"
              variant="outlined"
              color="primary"
              @click="showRemoveDialog('google', account)"
            >
              <VIcon
                start
                icon="mdi-link-variant-off"
              />Unlink
            </VBtn>
          </VCard>
        </div>
      </VCol>
    </VRow>


    <VRow class="match-height">
      <!-- 👉 Code for Snapchat Ad Account Linking -->
      <VCol cols="12">
        <div class="account-container">
          <img
            :src="snapchatads"
            alt="Snapchat Ads"
            class="ad-logo"
          >
          <p class="text-h6">
            Snapchat Ads
          </p>
        </div>
        <div class="flex-container">
          <!-- Main Card for Account Linking -->
          <VCard
            class="account-linking-card"
            @click="redirectToUrl('https://google.com')"
          >
            <div class="d-flex flex-column align-center">
              <div class="dashed-circle">
                <VIcon :size="46">
                  mdi-plus
                </VIcon>
              </div>
              <p class="text-h7">
                Add<br>Snapchat Account
              </p>
            </div>
          </VCard>

          <!-- Cards for Linked TikTok Accounts -->
          <VCard
            v-for="(account, index) in linkedAccounts.snapchat" 
            :key="index" 
            class="linked-account-card d-flex flex-column align-center justify-center"
          >
            <div class="dashed-circle-added-account">
              <VIcon
                :size="46"
                color="primary"
              >
                mdi-account-outline
              </VIcon>
            </div>
            <p class="text-h7">
              {{ account }}
            </p>

            <VBtn
              rounded="pill"
              class="unlink-button"
              variant="outlined"
              color="primary"
              @click="showRemoveDialog('snapchat', account)"
            >
              <VIcon
                start
                icon="mdi-link-variant-off"
              />Unlink
            </VBtn>
          </VCard>
        </div>
      </VCol>
    </VRow>


    <VRow class="match-height">
      <!-- 👉 Code for Pinterest Ad Account Linking -->
      <VCol cols="12">
        <div class="account-container">
          <img
            :src="pinterestads"
            alt="Pinterest Ads"
            class="ad-logo"
          >
          <p class="text-h6">
            Pinterest Ads
          </p>
        </div>
        <div class="flex-container">
          <!-- Main Card for Account Linking -->
          <VCard
            class="account-linking-card"
            @click="redirectToUrl('https://google.com')"
          >
            <div class="d-flex flex-column align-center">
              <div class="dashed-circle">
                <VIcon :size="46">
                  mdi-plus
                </VIcon>
              </div>
              <p class="text-h7">
                Add<br>Pinterest Account
              </p>
            </div>
          </VCard>

          <!-- Cards for Linked TikTok Accounts -->
          <VCard
            v-for="(account, index) in linkedAccounts.pinterest" 
            :key="index" 
            class="linked-account-card d-flex flex-column align-center justify-center"
          >
            <div class="dashed-circle-added-account">
              <VIcon
                :size="46"
                color="primary"
              >
                mdi-account-outline
              </VIcon>
            </div>
            <p class="text-h7">
              {{ account }}
            </p>

            <VBtn
              rounded="pill"
              class="unlink-button"
              variant="outlined"
              color="primary"
              @click="showRemoveDialog('pinterest', account)"
            >
              <VIcon
                start
                icon="mdi-link-variant-off"
              />Unlink
            </VBtn>
          </VCard>
        </div>
      </VCol>
    </VRow>
    <VDialog
      v-model="isDialogVisible"
      persistent
      class="v-dialog-sm"
    >
      <VCard title="Confirm Unlink">
        <VCardText>
          Are you sure you want to unlink {{ selectedAccount.name }} ?
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn
            color="error"
            @click="isDialogVisible = false"
          >
            Cancel
          </VBtn>
          <VBtn
            color="primary"
            @click="confirmRemove"
          >
            Confirm
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VRow>
</template>



<style scoped>
.v-row {
    width: 100%;
}

.flex-container {
  display: flex;
  align-items: start;
  overflow-x: auto; /* Enable horizontal scrolling */
  margin-bottom: 44px;
  height: 240px;
  white-space: nowrap; /* Prevent cards from wrapping to the next line */
}

.account-linking-card, .linked-account-card {
  flex: 0 0 200px; /* Prevent cards from shrinking */
  margin-right: 16px;
  padding: 26px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centering contents vertically */
  text-align: center;
}

.account-linking-card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* Evenly distribute space around items */
  height: 100%;
}

.unlink-button {
  margin-top: auto;
}

.dashed-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed grey;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin-bottom: 16px;
}

.dashed-circle-added-account {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #23d892;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin-bottom: 16px;
}



.ad-logo {
  width: 25px; 
  height: auto; 
  margin-right: 14px;
  display: block;
}

.account-container {
  display: flex;
  align-items: center;
  margin-bottom: 16px; 
}

.text-h6, .text-h7 {
  margin-bottom: 0;
}
</style>