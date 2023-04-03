export const productMetrics = [
    "AVC", "AvP", "LTV", "Retention Rate",
    "APC", "AVP_CAT",
    "ARPPU", "ARPU", "LT", "UA", "CAC", "CM"
]
export const countStartProductMetrics = 1
export const productMetricsSize = ["руб.", "%"]

const getList = ({start = 0, end}) => {
    const data = [];
    for (let i = start; i < end; i++) {
        data.push({
            index: i,
            title: productMetrics[i],
            size: productMetricsSize[0],
            digit: '',
            sizes: productMetricsSize,
        })
    }
    return data
}

export const getStartProductMetrics = () => {
    return getList({end: countStartProductMetrics})
}

export const getAllProductMetrics = () => {
    return getList({start: countStartProductMetrics, end: productMetrics.length})
}

export const timeDevList = ["День", "Неделя", "Месяц", "Год"]