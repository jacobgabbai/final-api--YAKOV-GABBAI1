using final_api_19.Dto;
using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public interface IQuaestionRepo
    {
        QuestionDtoB PostQuestion(FinalProject2Context context, QuestionDto3 v);
        int QuestionDelete(FinalProject2Context context,string id);
        List<Question> T3(FinalProject2Context context);
        List<QuestionDtoB> T31(FinalProject2Context context, string r);
       
        Question TQ1(FinalProject2Context context,QuestionDto3 v);
        Question TQ2(FinalProject2Context context, QuestionDto3 v);
    }
}