using api_final_19.Dto;
using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public interface ITeacherRepo
    {
        public Teacher TG(FinalProject2Context context, Teacher t);
        public Teacher T1(FinalProject2Context context, string a);

        //public Teacher TA1(string a, string b);

        public Teacher PostT(FinalProject2Context context, TeacherDto t);
    }
}
