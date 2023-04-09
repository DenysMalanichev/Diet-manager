using Diet.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;

namespace Diet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RootObject>>> GetMeal()
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri($"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives"),
                Headers =
                        {
                            { "X-RapidAPI-Key", "191afd9e9fmsh756a2a18b2f1ee9p1b9d0djsn1d76b609e3d8" },
                            { "X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com" },
                        },
            };
            string jsonString;
            using (var response = await client.SendAsync(request))
            {
                Debug.WriteLine(response);
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                jsonString = await response.Content.ReadAsStringAsync();
            }



            Debug.WriteLine(jsonString);
            RootObject root = JsonConvert.DeserializeObject<RootObject>(jsonString);

            List<Meal> meals = root.Meals;

            return Ok(root);
        }

        [HttpGet("{calories}")]
        public async Task<ActionResult<IEnumerable<RootObject>>> GetMeal(int calories)
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri($"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories={calories}&diet=vegetarian&exclude=shellfish%2C%20olives"),
                Headers =
                        {
                            { "X-RapidAPI-Key", "191afd9e9fmsh756a2a18b2f1ee9p1b9d0djsn1d76b609e3d8" },
                            { "X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com" },
                        },
            };
            string jsonString;
            using (var response = await client.SendAsync(request))
            {
                Debug.WriteLine(response);
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                jsonString = await response.Content.ReadAsStringAsync();
            }



            Debug.WriteLine(jsonString);
            RootObject root = JsonConvert.DeserializeObject<RootObject>(jsonString);

            List<Meal> meals = root.Meals;

            return Ok(root);
        }


    }
}
