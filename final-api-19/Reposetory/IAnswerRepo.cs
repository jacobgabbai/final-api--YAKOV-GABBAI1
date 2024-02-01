using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public interface IAnswerRepo
    {
        Answer AnswerPut(FinalProject2Context context, AnswerDto1 v);
        List<Answer> GetAnswer(FinalProject2Context context);
        List<Answer> GetAnswer1(FinalProject2Context context, string j);
        void TAnswer(FinalProject2Context context,AnswerDto1 o);
    }
}