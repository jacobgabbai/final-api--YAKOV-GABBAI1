using final_api_19.MainModels;
using System.Security.Cryptography;
using System.Text;

namespace api_final_19.Reposetory
{
    public class StudentRepo : IStudentRepo
    {
        private string Md5(string md5)
        {
            StringBuilder sb = new StringBuilder();
            byte[] bt = Encoding.ASCII.GetBytes(md5);
            using (MD5 md51 = MD5.Create())
            {
                byte[] md52 = md51.ComputeHash(bt);
                for (int i = 0; i < bt.Length; i++)
                {
                    sb.Append(md52[i].ToString("x2"));

                }
            }
            return sb.ToString();
        }
        public Student GetStuName(FinalProject2Context context, Student j)
        {            
            Student? student = new Student();
            Student? student1 = new Student();
            Student? student2 = new Student();
            List<Student> S = new List<Student>();
            string pass = Md5(j.Password);
            student = context.Students.Where(r => r.Email == j.Email).FirstOrDefault();
            student1 = context.Students.Where(r => r.Password == pass).FirstOrDefault();
            if (student != null && student1!=null)
            {
                return student1;
            }
            else {
                student2.StuName = "dont match";
                return student2; }
        }

        public Student PostStudent(FinalProject2Context context, StudentDtocs s) {
            int a = 0;           
            Student? student = new Student();
            Student? student1 = new Student();
            List<Student> stu=new List<Student>();
            stu=context.Students.ToList();
            student = context.Students.Where(r => r.Id == s.Id).SingleOrDefault();
            string pass = Md5(s.Password);

            if (stu.Count==0)
            {

                string guid=Guid.NewGuid().ToString();
                student1.Id = guid;
                student1.Password = pass;
                student1.StuName = s.StuName;
                student1.StuId = s.StuId;
                student1.Tel = s.Tel;
                student1.Email = s.Email;
                context.Students.Add(student1);
                context.SaveChanges();
                return (student1);
            }
            else
            {
                student = stu.Where(r => r.StuId == s.StuId).FirstOrDefault();
                if (student != null)
                {
                    student1.StuName = "Id";
                    return student1;
                }
                student= stu.Where(g => g.Password == pass).FirstOrDefault();

                if (student != null)
                {
                    student1.StuName = "Password";
                    return student1;
                }
                string guid = Guid.NewGuid().ToString();
                student1.Id = guid;
                student1.Password = pass;
                student1.StuName = s.StuName;
                student1.StuId = s.StuId;
                student1.Tel = s.Tel;
                student1.Email = s.Email;
                context.Students.Add(student1);
                context.SaveChanges();
                return (student1);
            }
        }
    }
}
