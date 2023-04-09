using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace Diet.Models
{
    public class Meal
    {
        public int ReadyInMinutes { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string SourceUrl { get; set; }

        public int Servings { get; set; }

        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Title { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string ImageType { get; set; }
    }
}
