using Diet.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Diet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DietDbContext _context;

        public UserController(DietDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            Debug.WriteLine("inside");

            var temp = _context.User.Where(x => x.UserName == user.UserName && x.Email == user.Email)
                .FirstOrDefault();

            if (temp == null)
            {
                _context.User.Add(user);
                await _context.SaveChangesAsync();
            }
            else
                user = temp;
            return Ok(user);

        }
    }
}
