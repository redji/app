<script setup lang="ts">
import { computed, watch, ref, onMounted } from 'vue'
import { BaseCardCrypto, BaseLoader } from '@/app.organizer'
import { useCrypto } from '@/composables/useCrypto'
import { useI18n } from 'vue-i18n'
import { TCryptoData } from '@/stores/crypto.types'
import { useRouter } from 'vue-router'
import { ROUTE_CRYPTO_OVERVIEW } from '@/app.routes'
const router = useRouter()

const id = router.currentRoute.value.params.id as string

const item = ref<TCryptoData>()

const cryptoStore = useCrypto()

const {
  fetchCryptosInfos
} = cryptoStore

const {
  currencyActive,
  cryptoList,
  isReadyCategories,
  isReadyCurrencies,
  isReadyCryptoList
} = cryptoStore

const isReadyCryptoStore = computed(
  () => isReadyCategories && isReadyCurrencies && isReadyCryptoList
)

const { t: print } = useI18n()

watch(isReadyCryptoStore, (newState) => {
  if (newState && id && registerItem()) fetchItemInfos()
})
const registerItem = () => {
  const storeItem = cryptoList.get(id as string)
  if (storeItem) {
    item.value = storeItem
    return true
  } else {
    router.push({ name: ROUTE_CRYPTO_OVERVIEW.name })
    return false
  }
}
const fetchItemInfos = () => {
  if (item.value) fetchCryptosInfos([item.value])
}

onMounted(() => {
  if (isReadyCryptoStore.value) {
    registerItem()
    fetchItemInfos()
  }
})

</script>

<template>
  <div
    v-if="!isReadyCryptoStore || !item"
    class="flex flex-1 relative"
  >
    <BaseLoader :text="print('loading_data')" />
    {{ isReadyCryptoStore ?'tru' :'false' }}
  </div>
  <div
    v-else-if="isReadyCryptoStore && item"
    class="flex flex-1 relative"
  >
    <BaseCardCrypto
      :data="item"
      :item-id="item.id"
    />
  </div>
</template>

<style lang="scss"></style>
