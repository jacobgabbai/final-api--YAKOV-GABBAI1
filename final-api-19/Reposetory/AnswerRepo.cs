using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public class AnswerRepo : IAnswerRepo
    {

        public Answer AnswerPut(FinalProject2Context context, AnswerDto1 v)
        {
           
            List<Answer>? R = context.Answers.ToList();
            Answer? tt = new Answer();
         
            string guid = Guid.NewGuid().ToString();
            tt.Id = guid;
            tt.Answer1 = v.Answer1;
            tt.QuestionIdRef = v.QuestionIdRef;
            tt.RightWorng = v.RightWorng;
            context.Answers.Add(tt);
            context.SaveChanges();
            return tt;
        }

        public List<Answer> GetAnswer(FinalProject2Context context)
        {
            List <Answer> T = new List<Answer>();
            T = context.Answers.ToList();
            return T;
        }

        public List<Answer> GetAnswer1(FinalProject2Context context, string j)
        {
            List<Answer> T = new List<Answer>();
            List<Answer> B = new List<Answer>();
            T = context.Answers.ToList();
            B = T.Where(r => r.QuestionIdRef == j).ToList();
            return B;
        }
        public void TAnswer(FinalProject2Context context, AnswerDto1 o)
        {           
            List<Answer>? R = context.Answers.ToList();
            Answer tt = new Answer();
      
            string guid = Guid.NewGuid().ToString();
            tt.Id = guid;
            Test? rr = new Test();
            tt.Answer1 = o.Answer1;
            tt.QuestionIdRef = o.QuestionIdRef;
            tt.RightWorng = o.RightWorng;
            context.Answers.Add(tt);
            context.SaveChanges();
        }
    }
}
