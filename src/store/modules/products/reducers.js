import galaxyS21 from '../../../assets/galaxyS21.png'
import galaxyS20 from '../../../assets/galaxyS20.webp'
import motoE7 from '../../../assets/motoE7.jpg'
import galaxyS22 from '../../../assets/galaxyS22.jpg'
import iphone11 from '../../../assets/iphone11.jpg'
import iphone13 from '../../../assets/iphone13.jpg'

const initialState = [
    {
      name: 'Smartphone Samsung Galaxy S21 128GB',
      price: 2799.99,
      src: galaxyS21,
      id: 1
    },
    {
      name: 'Smartphone Samsung Galaxy S20 FE 128GB Cloud Navy',
      price: 1889.99,
      src: galaxyS20,
      id: 2
    },
    {
      name: 'Smartphone Motorola Moto E7, 32GB',
      price: 699.99,
      src: motoE7,
      id: 3
    },
    {
      name: 'Smartphone Samsung Galaxy S22, 128GB',
      price: 5399.99,
      src: galaxyS22,
      id: 4
    },
    {
      name: 'Iphone 11 64GB',
      price: 3799,
      src: iphone11,
      id: 5
    },
    {
      name: 'Iphone 13 128GB',
      price: 7399,
      src: iphone13,
      id: 6
    }
  ]

const productsReducer = (state = initialState, action) =>{
  return state
    
}

export default productsReducer