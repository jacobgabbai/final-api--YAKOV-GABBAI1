using api_final_19.Dto;
using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public class TestExRepo : ITestExRepo
    {
        public TestEx1 PostTestEx(FinalProject2Context context, TestExDto t)
        {

            List<TestEx1> testEx1s = new List<TestEx1>();
            TestEx1 tt = new TestEx1();
         
            testEx1s = context.TestEx1s.ToList();
        
            string guid = Guid.NewGuid().ToString();
            tt.Id = guid;
            tt.StuName = t.StuName;
            tt.StuId = t.StuId;
            tt.TestName = t.TestName;
            tt.Grade = t.Grade;
            context.TestEx1s.Add(tt);
            context.SaveChanges();
            return tt;

        }


        public List<TestEx1> GetTestExes(FinalProject2Context context, string i)
        {
            List<TestEx1> testEx1s = new List<TestEx1>();
            TestEx1 tt = new TestEx1();
            testEx1s=context.TestEx1s.Where(r=>r.StuId==i).ToList();
            return testEx1s;
        }

        public List<TestEx1> GetByName1(FinalProject2Context context, string tname)
        {
            List<TestEx1>? testEx1s = new List<TestEx1>();
            TestEx1? tt = new TestEx1();
            return testEx1s = context.TestEx1s.Where(r => r.TestName == tname).ToList();
        }
        public List<TestEx1> TestSearch(FinalProject2Context context, string s)
        {
            List<TestEx1>? testEx1s = new List<TestEx1>();
            List<TestEx1>? testEx11s = new List<TestEx1>();
            TestEx1? tt = new TestEx1();
            TestEx1? tt1 = new TestEx1();
            testEx1s = context.TestEx1s.ToList();
            testEx1s = testEx1s.Where(r => r.StuId == s).ToList();
            if (testEx1s != null)
            {
                return testEx1s;
            }
            else
            {
                tt1.StuName = "empty";
                testEx11s.Add(tt1);
                return testEx11s;
            }
        }

        public int GetIdName(FinalProject2Context context, string sname, string stest)
        {
            List<TestEx1>? testEx1s = new List<TestEx1>();
            TestEx1? tt = new TestEx1();
            testEx1s = context.TestEx1s.Where(r => r.StuName == sname).ToList();
            if (testEx1s.Count > 0)
            {
                tt = testEx1s.Where(r => r.TestName == stest).FirstOrDefault();
                if (tt != null)
                {

                    return 1;
                }
                else { return 0; }

            }

            else { return 0; }

        }
    }
}
