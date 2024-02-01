using api_final_19.Dto;
using final_api_19.MainModels;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace api_final_19.Reposetory
{
    public class AnswerExRepo : IAnswerExRepo
    {
        public AnswerEx1 PostAnsEx(FinalProject2Context context ,AnswerExDto a)
        {
          

            List<AnswerEx1> A = new List<AnswerEx1>();
            AnswerEx1 aa = new AnswerEx1();
            A = context.AnswerEx1s.ToList();
       
            string guid = Guid.NewGuid().ToString();
            aa.Id = guid;
            aa.QuestionEx1IdRef = a.QuestionEx1IdRef;
            aa.RightAnswer = a.RightAnswer;
            aa.WorngAnswer = a.WorngAnswer;
            context.AnswerEx1s.Add(aa);
            context.SaveChanges();

            return aa;
        }

        public AnswerEx1 GetAnswer1(FinalProject2Context context, string i)
        {
           

            List<AnswerEx1> A = new List<AnswerEx1>();
            AnswerEx1? aa = new AnswerEx1();
            aa= context.AnswerEx1s.Where(r=>r.QuestionEx1IdRef==i).SingleOrDefault();
            if (aa != null)
            {
                return aa;
            }
            else { return aa= new AnswerEx1();}
        }
    }
}
