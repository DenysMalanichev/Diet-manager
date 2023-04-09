using Microsoft.EntityFrameworkCore;

namespace Diet.Models
{
    public class DietDbContext: DbContext
    {
        public DietDbContext(DbContextOptions<DietDbContext> options) : base(options)
        {

        }

        public DbSet<Meal> Meal { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<MealPlan> MealPlan { get; set; }
    }
}
