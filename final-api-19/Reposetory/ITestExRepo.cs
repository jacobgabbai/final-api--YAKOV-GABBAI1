using api_final_19.Dto;
using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public interface ITestExRepo
    {
        List<TestEx1> GetByName1(FinalProject2Context context,string tname);
        int GetIdName(FinalProject2Context context,string sname, string stest);
        List<TestEx1> GetTestExes(FinalProject2Context context, string i);
        TestEx1 PostTestEx(FinalProject2Context context, TestExDto t);
        List<TestEx1>TestSearch(FinalProject2Context context,string g);
    }
}