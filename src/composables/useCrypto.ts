import { useCryptoStore } from '@/stores/crypto'
import { TCryptoData } from '@/stores/crypto.types'

export function useCrypto () {
  const cryptoStore = useCryptoStore()

  const fetchCurrenciesList = () => {
    cryptoStore.fetchCategoriesList()
  }
  const fetchCategoriesList = () => {
    cryptoStore.fetchCategoriesList()
  }
  const fetchCryptoList = () => {
    cryptoStore.fetchCryptoList()
  }
  const fetchCryptosInfos = (optimizedList: TCryptoData[]) => {
    cryptoStore.fetchCryptosInfos(optimizedList)
  }
  const setCurrencyActive = (currency: string) => {
    cryptoStore.setCurrencyActive(currency)
  }
  const addFavorite = (crypto: TCryptoData) => {
    cryptoStore.addFavorite(crypto)
  }
  const removeFavorite = (crypto: TCryptoData) => {
    cryptoStore.removeFavorite(crypto)
  }

  return {
    cryptoList: cryptoStore.cryptoList,
    currenciesList: cryptoStore.currenciesList,
    categoriesList: cryptoStore.categoriesList,
    currencyActive: cryptoStore.currencyActive,
    categoryActive: cryptoStore.categoryActive,
    cryptoFavorites: cryptoStore.cryptoFavorites,
    isReadyCategories: cryptoStore.isReadyCategories,
    isReadyCurrencies: cryptoStore.isReadyCurrencies,
    isReadyCryptoList: cryptoStore.isReadyCryptoList,
    fetchCurrenciesList,
    fetchCategoriesList,
    fetchCryptoList,
    fetchCryptosInfos,
    setCurrencyActive,
    addFavorite,
    removeFavorite
  }
}
