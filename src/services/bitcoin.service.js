import axios from 'axios'
import { storageService } from './async-storage.service'

const STORAGE_KEY = 'rateDB'

export const bitcoinService = {
    getRate,
}

async function getRate() {
    let bitcoinRate = await storageService.query(STORAGE_KEY)
    
    if (!bitcoinRate) {
        const url = `https://blockchain.info/tobtc?currency=USD&value=1`
        bitcoinRate = await (await axios.get(url)).data
        console.log('the bitcoin',bitcoinRate);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bitcoinRate))
    }
    return bitcoinRate
}


