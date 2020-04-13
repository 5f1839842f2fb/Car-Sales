import { createStore } from 'redux'

// initial state
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

// ACTION_TYPES 
const ADD_FEATURE = "ADD_FEATURE"
const REMOVE_FEATURE = "REMOVE_FEATURE"

// action creators
export const addFeature = payload => {
  return {
    type: ADD_FEATURE,
    payload: payload
  }
}
export const removeFeature = payload => {
  return {
    type: REMOVE_FEATURE,
    payload: payload
  }
}

// reducer
const rootReducer = (state = initialState, action) => {
  console.log('Dispatched action:', action, 'State when action was dispatched: ', state)
  let newPrice;

  switch(action.type) {
    case ADD_FEATURE:
      const newAdditionalFeatures = state.additionalFeatures.filter(element => element.id !== action.payload)
      newPrice = state.additionalPrice += state.additionalFeatures.find(element => element.id === action.payload).price
      return {
        ...state, 
        additionalPrice: newPrice,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            state.additionalFeatures.find(element => element.id === action.payload)
          ]
        },
        additionalFeatures: newAdditionalFeatures
      }
    case REMOVE_FEATURE:
      const newFeatures = state.car.features.filter(element => element.id !== action.payload)
      newPrice = state.additionalPrice -= state.car.features.find(element => element.id === action.payload).price
      return {
        ...state,
        additionalPrice: newPrice,
        car: {
          ...state.car,
          features: newFeatures
        },
        additionalFeatures: [
          ...state.additionalFeatures,
          state.car.features.find(element => element.id === action.payload)
        ]
      }
    default:
      return {...state}
  }
}

// store
export const store = createStore(rootReducer)