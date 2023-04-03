
export const addList = (base, list) => {
    return [...list, ...base]
}

export const popList = (base, list) => {
    const array = [...base]
    let index = 0;
    while (index < array.length) {
        for (let j = 0; j !== list.length; j++) {
            if (array[index].index === list[j].index) {
                array.splice(index, 1)
                --index;
                break
            }
        }
        ++index;
    }
    return array
}