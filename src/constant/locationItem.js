import {  PROTAL_LOCATION } from './constants'

const locationItem = (location, bounding, boundItem) => {
    return location === PROTAL_LOCATION.TOP
    ? {
        top: bounding.top - boundItem.height ,
        left: bounding.left + (bounding.width - boundItem.width) / 2,
        position: 'relative',
      }
    : location === PROTAL_LOCATION.BOTTOM
    ? {
        top: bounding.top + bounding.height,
        left: bounding.left + (bounding.width - boundItem.width) / 2,
        position: 'relative',
      }
    : location === PROTAL_LOCATION.RIGHT
    ? {
        top: bounding.top,
        right: -bounding.right,
        position: 'relative',
      }
    : location === PROTAL_LOCATION.LEFT
    ? {
        top: bounding.top,
        left: bounding.left - boundItem.width,
        position: 'relative',
      }
    : null
}
export default locationItem