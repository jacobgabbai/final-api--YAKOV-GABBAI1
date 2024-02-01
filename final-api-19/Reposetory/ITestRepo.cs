using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public interface ITestRepo
    {
        Test PutTest1(FinalProject2Context context,Test2Dto p);
        List<Test> T2(FinalProject2Context h);
        Test T21(FinalProject2Context context, string i, string v);
        Test T211(FinalProject2Context context, string i, string v);
        Test T22(FinalProject2Context context, string v);
        Test? T23(FinalProject2Context context, string name);
        int T24(FinalProject2Context context, Test1 t);
        Test T33(FinalProject2Context context, string v);
        Test TB1(FinalProject2Context context, Test1 z);
        int TestDelete(FinalProject2Context context, string i);
    }
}