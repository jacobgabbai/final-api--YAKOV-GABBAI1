using final_api_19.Dto;
using final_api_19.MainModels;
using System.Text;

namespace api_final_19.Reposetory
{
    public class QuaestionRepo : IQuaestionRepo
    {
        public List<Question> T3(FinalProject2Context context)
        {          
            Question F = new Question();
            List<Question> Y = context.Questions.ToList();
           return Y;

        }
        public List<QuestionDtoB> T31(FinalProject2Context context, string r)
        {            
            Question F = new Question();
            
            List<QuestionDtoB> GL= new List<QuestionDtoB>();
            List<Question> Y = context.Questions.ToList();
            List<Question> U = Y.Where(f => f.TestIdRef == r).ToList();
            foreach(Question Q in U)
            {
                QuestionDtoB G = new QuestionDtoB();
                string GS = Encoding.ASCII.GetString(Q.Picture);
              G.Id = Q.Id;
                G.TestIdRef = Q.TestIdRef;
                G.Questions = Q.Questions;
                G.Picture = GS;
                GL.Add(G);
            }
            return GL;
        }

        public Question TQ1(FinalProject2Context context, QuestionDto3 v)
        {           
            List<Question>? R = context.Questions.ToList();
            Question? tt = new Question();
            Test? rr = new Test();
            int i = 1;
            string guid = Guid.NewGuid().ToString();
            tt.Id = guid;
            byte[] dataPicture = Encoding.ASCII.GetBytes(v.Picture);
            tt.Picture = dataPicture;
           
            tt.TestIdRef = v.TestIdRef;
            tt.Questions = v.Questions;
            context.Questions.Add(tt);
            context.SaveChanges();
            return tt;
        }


        public int QuestionDelete(FinalProject2Context context, string id) {            
            List<Question>? R = context.Questions.ToList();
            Question? tt = new Question();
            tt = R.Where(x => x.Id == id).SingleOrDefault();
            if (tt != null)
            {
                context.Questions.Remove(tt);
                context.SaveChanges();
                return 1;
            }
            else return 0;
        }



        public Question TQ2(FinalProject2Context context, QuestionDto3 v)
        {
            
            List<Question>? R = context.Questions.ToList();
            Question? tt = new Question();
            tt = R.Where(x => x.Id == v.Id).SingleOrDefault();
            if (tt != null)
            {
                context.Questions.Remove(tt);
                context.SaveChanges();
                tt.Id = v.Id;
                tt.TestIdRef = v.TestIdRef;
                tt.Questions = v.Questions;
                if (v.Questions == "")
                {
                    byte[] dataPicture = Encoding.ASCII.GetBytes(v.Picture);
                    tt.Picture = dataPicture;
                    
                }
                else { v.Picture = null; }
            }
            context.Questions.Add(tt);
            context.SaveChanges();
            return tt;

        }

        public QuestionDtoB PostQuestion(FinalProject2Context context, QuestionDto3 v)
        {         
            List<Question>? R = context.Questions.ToList();
            Question? tt = new Question();
            QuestionDtoB  A= new QuestionDtoB();
            long i = 0;
        
            string guid = Guid.NewGuid().ToString();
           tt.Id = guid;
            tt.TestIdRef = v.TestIdRef;
            tt.Questions = v.Questions;
            byte[] dataPicture = Encoding.ASCII.GetBytes(v.Picture);
            tt.Picture = dataPicture;
            context.Questions.Add(tt);
            context.SaveChanges();
            A.Id = guid;
            A.TestIdRef = v.TestIdRef;
            A.Questions = v.Questions;
            A.Picture = v.Picture;
            return A;
        }
    }
}
