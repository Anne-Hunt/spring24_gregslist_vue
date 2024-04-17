import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class HousesService {

    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('Getting houses', response.data)
        AppState.houses = response.data.map(house => new House(house))
    }

    async trashHouse(houseId) {
        const response = await api.delete(`api/houses/${houseId}`)
        logger.log('trashed that house, man', response.data)
        const houses = AppState.houses
        const houseIndex = houses.findIndex(house => house.id == houseId)
        if (houseIndex == -1) throw new Error('something is wrong with the index')

        houses.splice(houseIndex, 1)
    }
}

export const housesService = new HousesService()