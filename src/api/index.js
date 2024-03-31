import axios from 'axios';

const BASE_URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
  },
  headers: {
    'X-RapidAPI-Key': '892df1a822mshdb310c421aef535p1ab4c7jsncb4cf475472a',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
    try {
        const response = await axios.request(BASE_URL, options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

