using api_final_19.Dto;
using final_api_19.MainModels;
using System.Text;

namespace api_final_19.Reposetory
{
    public class QuestionExRepo : IQuestionExRepo
    {
        public QuestionEx PostQueEx(FinalProject2Context context, QuestionExDto d)
        {          
            List<QuestionEx> q = new List<QuestionEx>();
            QuestionEx qq = new QuestionEx();
            q = context.QuestionExes.ToList();
      
            string guid = Guid.NewGuid().ToString();
            qq.Id = guid;
            qq.TestEx1IdRef = d.TestEx1IdRef;
            byte[] dataPicture = Encoding.ASCII.GetBytes(d.Questions);

            qq.Questions = dataPicture;
            context.QuestionExes.Add(qq);
            context.SaveChanges();
            return qq;

        }



        public List<QuestionExDto> GetQuestion3(FinalProject2Context context,string i)
        {         
            List<QuestionEx> q = new List<QuestionEx>();
            QuestionEx qq = new QuestionEx();
           
            q = context.QuestionExes.Where(r => r.TestEx1IdRef == i).ToList();
            List<QuestionExDto> q1 = new List<QuestionExDto>();
            foreach (QuestionEx g in q)
            {
                QuestionExDto qq1 = new QuestionExDto();
                string a=Encoding.ASCII.GetString(g.Questions);
                qq1.Id = g.Id;
                qq1.TestEx1IdRef= g.TestEx1IdRef;
                qq1.Questions = a;
                q1.Add(qq1);
            }
            return q1;
        }
    }
}
