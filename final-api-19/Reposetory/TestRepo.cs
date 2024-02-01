using final_api_19.MainModels;
using System.Security.Cryptography.X509Certificates;

namespace api_final_19.Reposetory
{
    public class TestRepo : ITestRepo

    {
        
        
        
      
        public Test TB1(FinalProject2Context _context, Test1 z)
        {
            List<Test>? R = _context.Tests.ToList();
            List <Teacher> T=new List<Teacher>();
            Teacher? E=new Teacher();
            T=_context.Teachers.ToList();

            E=T.Where(r=>r.TeacherId==z.TeacherIdRef).FirstOrDefault();
            Test? tt = new Test();
            Test1? rr = new Test1();
            string guid = Guid.NewGuid().ToString();
            tt.Id = guid;

            tt.TestName = z.TestName;
            tt.TestDate = z.TestDate;
            tt.TotalTime = z.TotalTime;
            tt.StartTime = z.StartTime;
            tt.Random = z.Random;
            tt.TeacherIdRef = E.Id;
            
            _context.Tests.Add(tt);
            _context.SaveChanges();
            return tt;
        }


        public Test PutTest1(FinalProject2Context _context, Test2Dto p)

        {
            Test test = new Test();
            Test test1 = new Test();
            Test? test2 = new Test();          
            List<Test> T = new List<Test>();
            T = _context.Tests.ToList();
            Teacher TT=_context.Teachers.Where(r=>r.TeacherId==p.TeacherIdRef).FirstOrDefault();
            test1=_context.Tests.Where(r=>r.Id==p.Id).FirstOrDefault();
            if (p.TestName != "")
            {
                test2 = _context.Tests.Where(r => r.TestName == p.TestName).FirstOrDefault();


                if (test2 != null && test2.Id != p.Id)
                {
                    test.TestName = "empty";
                    return test;
                }
                else
                {
                    test.TestName= p.TestName;

                }
            }
            else { test.TestName=test1.TestName; }
            if (p.TestDate != "")
            {
                test2 = _context.Tests.Where(r => r.TestDate == p.TestDate).FirstOrDefault();


                if (test2 != null && test2.Id != p.Id)
                {
                    test.TestDate = "empty";
                    return test;
                }
                else
                {
                    test.TestDate = p.TestDate;

                }
            }
            else { test.TestDate = test1.TestDate; }
            if (p.StartTime != "")
            {
                test.StartTime = p.StartTime;
            }
            else { test.StartTime = test1.StartTime; }
            if (p.TotalTime != "")
            {
                test.TotalTime = p.TotalTime;
            }
            else { test.TotalTime = test1.TotalTime; }
            test.Random = p.Random;
            test.TeacherIdRef = TT.Id;
            test.Id= p.Id;
            _context.Tests.Remove(test1);
            _context.Tests.Add(test);
            _context.SaveChanges();
            return test;
        }



        public List<Test> T2( FinalProject2Context f)
        {    
            Test F = new Test();
            List<Test> Y = f.Tests.ToList();
            return Y;

        }


        public Test T21(FinalProject2Context _context, string i, string v)
        {
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            List<Test> j = new List<Test>();
            List<Test> Y = _context.Tests.ToList();
            int f=Int32.Parse(i);
            Teacher? T=_context.Teachers.Where(r=>r.TeacherId== f).FirstOrDefault();
            j = Y.Where(e => e.TestName == v).ToList();
            F = j.Where(e => e.TeacherIdRef == T.Id).FirstOrDefault();
            if (F != null)
            {
                return F;
            }
            else
            {
                return F;
            }
        }
        public Test T211(FinalProject2Context _context, string i, string v)
        {
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            List<Test> j = new List<Test>();
            List<Test> Y = _context.Tests.ToList();
            int f = Int32.Parse(i);
            Teacher? T = _context.Teachers.Where(r => r.TeacherId == f).FirstOrDefault();

            j = Y.Where(e => e.TestDate == v).ToList();

            F = j.Where(e => e.TeacherIdRef == T.Id).FirstOrDefault();
            if (F != null)
            {
                return F;
            }
            else
            {
                return F;
            }
        }



        public Test T22(FinalProject2Context _context, string v)
        {
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            Test? Y = _context.Tests.Where(r => r.TestName == v).FirstOrDefault();

            if (Y != null)
            {
                return Y;
            }
            else
            {

                F.TestName = "empty";
                return F;
            }

        }
        public Test T23(FinalProject2Context _context, string v)
        {
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            Test? Y = _context.Tests.Where(r => r.TestDate == v).FirstOrDefault();

            if (Y != null)
            {
                return Y;
            }
            else
            {

                F.TestName = "empty";
                return F;
            }

        }

        public Test T33(FinalProject2Context _context, string v)
        {
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            Test? Y = _context.Tests.Where(r => r.Id == v).FirstOrDefault();
            return Y;

        }


        public int T24(FinalProject2Context _context, Test1 t)
        {
            Test? F = new Test();
            Test? F2 = new Test();
            List<Test> F1 = new List<Test>();
            Teacher T=_context.Teachers.Where(r => r.TeacherId==t.TeacherIdRef).FirstOrDefault();
             F = _context.Tests.Where(r => r.TestName == t.TestName).FirstOrDefault();                   
            if (F != null && T.Id==F.TeacherIdRef )
            {             
                    return 1;               
            }
            F = F = _context.Tests.Where(r => r.TestDate == t.TestDate).FirstOrDefault();
            if (F != null && T.Id == F.TeacherIdRef)
            {
                return 2;
            }
            return 0;
        }

        public int TestDelete(FinalProject2Context _context, string i)
        {
            Test? F = new Test();
            List<Test> F1 = new List<Test>();
            Test? Y = _context.Tests.Where(r => r.Id == i).FirstOrDefault();
            if (Y != null)
            {
                _context.Tests.Remove(Y);
                _context.SaveChanges();
                int y = 1;
                return y;
            }
            else return 0;
        }

    }
}
