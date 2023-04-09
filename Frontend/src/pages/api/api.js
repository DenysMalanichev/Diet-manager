import axios from 'axios';
export class API {
    static async getMeal(calories) {
        try {
            const response = await axios.get(`http://localhost:5237/api/Meal/${calories}`);
            console.log(response.data)
            return response.data;
            // setMeals(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    static async getMeals() {
        try {
            const response = await axios.get('http://localhost:5237/api/Meals');
            console.log(response.data)
            return response.data;
            // setMeals(response.data);
        } catch (error) {
            console.error(error);
        }
    }

}