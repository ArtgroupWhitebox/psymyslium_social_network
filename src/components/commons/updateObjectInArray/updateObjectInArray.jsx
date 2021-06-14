export const updateObjectInArray = (itemsArray, itemId, objPropId, newObjProps) => {

    return itemsArray.map( item => {
        if (item[objPropId] === itemId) {
            return { ...item, newObjProps }
        }
        return item
    })
}