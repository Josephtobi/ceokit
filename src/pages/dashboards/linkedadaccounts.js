import { ref } from 'vue'

export const linkedAccounts = ref({
  tiktok: ["TikTokUser1", "TikTokUser2", "TikTokUser3", "TikTokUser4"],
  facebook: ["FBPage1"],
  google: ["GoogleAdsAccount1", "GoogleAdsAccount2"],
  snapchat: ["SnapchatUser1"],
  pinterest: ["PinterestUser1", "PinterestUser2", "PinterestUser3"],
})

export const addAccount = (platform, account) => {
  linkedAccounts.value[platform].push(account)
}

export const removeAccount = (platform, account) => {
  const index = linkedAccounts.value[platform].indexOf(account)
  if (index > -1) {
    linkedAccounts.value[platform].splice(index, 1)
  }
}
