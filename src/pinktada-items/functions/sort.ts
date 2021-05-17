export const setSortOptions = (query) => {
    const sort = JSON.parse(query)
    const sortUpPrice = {"pricingQuote.rate.amount": 1}
    const sortDownPrice = {"pricingQuote.rate.amount": -1}
    const sortUpRate = {"listing.avgRating": 1}
    let sortOptions = {}

    if (sort.upPrice) {
        sortOptions = {...sortOptions, ...sortUpPrice}
    }

    if (sort.downPrice) {
        sortOptions = {...sortOptions, ...sortDownPrice}
    }

    if (sort.upRate) {
        sortOptions = {...sortOptions, ...sortUpRate}
    }

    return sortOptions
}


export const isEmpty = (obj) => {
    if (Object.keys(obj).length == 0) {
        return true
    } else return false
}