namespace lend_o_mat.Models
{
    public class Loan
    {
        public long Id { get; set; }
        public string borrowerName { get; set; }
        public double repaymentAmount { get; set; }
        // the amount given to borrower (i.e. less than repayment amount)
        public double fundingAmount { get; set; }

        public Loan()
        {
        }
    }
}
