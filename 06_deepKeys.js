//Easier way to access this bigObject?

const bigObject = {
  level: 1,
  floors: {
    basement: {
      level: -1,
    },
    main: {
      level: 1,
      floors: {
        second: {
          level: 2,
        }
      }
    }
  },
}

const floorsOfMainKey = bigObject.floors.main.floors
const basementLevel = bigObject.floors.basement.level
console.log(basementLevel)