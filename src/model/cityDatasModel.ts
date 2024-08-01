interface Place {
    name: string,
    check: boolean,
    coord: {
        latitude: number,
        longitude: number
    }
}

interface PlaceCategory {
    sea: Place[] | null,
    nature: Place[] | null,
    city: Place[] | null,
    camp: Place[] | null,
    ski: Place[] | null
}

interface City {
    name: string,
    coord: {
        latitude: number
        longitude: number
    },
    placeCategory: PlaceCategory
}

interface CityDatasModel {
    countryName: string,
    city: City[]
}