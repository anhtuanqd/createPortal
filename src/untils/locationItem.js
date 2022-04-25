import {  NUMBER_FIFTY, NUMBER_ONEHUNDERD, PROTAL_LOCATION } from './constants'

const locationItem = (location, bounding, boundItem) => {
    return location === PROTAL_LOCATION.TOP
    ? {
        top: bounding.top - boundItem.height - NUMBER_FIFTY,
        left: bounding.left + (bounding.width - boundItem.width) / 2,
        position: 'relative',
      }
    : location === PROTAL_LOCATION.BOTTOM
    ? {
        top: bounding.top + bounding.height + NUMBER_FIFTY,
        left: bounding.left + (bounding.width - boundItem.width) / 2,
        position: 'relative',
      }
    : location === PROTAL_LOCATION.RIGHT
    ? {
        top: bounding.top,
        right: -bounding.right - NUMBER_ONEHUNDERD,
        position: 'relative',
      }
    : location === PROTAL_LOCATION.LEFT
    ? {
        top: bounding.top,
        left: bounding.left - boundItem.width - NUMBER_ONEHUNDERD,
        position: 'relative',
      }
    : null
}
export default locationItem