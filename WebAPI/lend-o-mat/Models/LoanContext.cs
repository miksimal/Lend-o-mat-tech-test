using Microsoft.EntityFrameworkCore;

namespace lend_o_mat.Models
{
    public class LoanContext : DbContext
    {
        public LoanContext(DbContextOptions<LoanContext> options)
            : base(options)
        {
        }

        public DbSet<Loan> Loans { get; set; }
        public LoanContext()
        {
        }
    }
}
