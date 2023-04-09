using Newtonsoft.Json;
using System.Diagnostics;

namespace Diet.Models
{
    public class RootObject
    {
        [JsonProperty("meals")]
        public List<Meal> Meals { get; set; }

        [JsonProperty("nutrients")]
        public Dictionary<string, double> Nutrients { get; set; }
    }
}
