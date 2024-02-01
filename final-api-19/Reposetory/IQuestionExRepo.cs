using api_final_19.Dto;
using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public interface IQuestionExRepo
    {
        List<QuestionExDto> GetQuestion3(FinalProject2Context context, string i);
        QuestionEx PostQueEx(FinalProject2Context context, QuestionExDto d);
    }
}