using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Diet.Models
{
    public class MealPlan
    {
        [Key]
        public int MealPlanId { get; set; }
        public int UserId { get; set; }
        public int Meal1Id { get; set; }
        public int Meal2Id { get; set; }
        public int Meal3Id { get; set; }

        public int? Calories { get; set; }
    }
}
