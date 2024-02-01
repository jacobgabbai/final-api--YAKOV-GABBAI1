using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public interface IStudentRepo
    {
        Student GetStuName(FinalProject2Context context, Student j);
        Student PostStudent(FinalProject2Context context, StudentDtocs s);
    }
}