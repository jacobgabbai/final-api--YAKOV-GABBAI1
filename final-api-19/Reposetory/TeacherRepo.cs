using api_final_19.Dto;
using System.Security.Cryptography;
using System.Text;
using System;
using System.Collections.Generic;
using final_api_19.MainModels;

namespace api_final_19.Reposetory
{
    public class TeacherRepo:ITeacherRepo
    {
        private string Md5(string md5)
        {
            StringBuilder sb = new StringBuilder();
            byte[] bt=Encoding.ASCII.GetBytes(md5);
            using(MD5 md51=MD5.Create()) 
            { 
                byte[] md52=md51.ComputeHash(bt);
                for (int i = 0; i < bt.Length; i++) {
                    sb.Append(md52[i].ToString("x2"));
                       
                }
            }
            return sb.ToString();
        }
        public Teacher TG(FinalProject2Context context, Teacher t)
        {
           
            Teacher? F = new Teacher();
            string p = Md5(t.Password);
            Teacher? F1 = new Teacher();
            Teacher? F2 = new Teacher();
            List<Teacher> list = new List<Teacher>();
            list = context.Teachers.ToList();
            F = context.Teachers.Where(r => r.Email == t.Email).FirstOrDefault();
            F1 = context.Teachers.Where(r => r.Password == p).FirstOrDefault();
            if (F != null && F1 != null)
            {
                return F1;
            }
            else
            {
                F2.TeacherName = "dont match";
                return F2;
            }
            
        }

        public Teacher T1(FinalProject2Context context, string S)
        {
           
            Teacher F = new Teacher();
            context.Teachers.ToList();
            foreach (Teacher a in context.Teachers)
                if (a.TeacherName == S)
                {
                    {
                        F.Password = a.Password;
                        F.Id = a.Id;
                        F.TeacherName = a.TeacherName;
                        F.Email = a.Email;
                    }
                }
            return F;

        }
        public  Teacher PostT (FinalProject2Context context, TeacherDto t)
        {
           
            List<Teacher>? R = context.Teachers.ToList();
            Teacher? tt = new Teacher();
          
            List<Teacher> LTN = new List<Teacher> ();
            List<Teacher> LTP = new List<Teacher>();

            Teacher? rr = new Teacher();
            Teacher? rr1 = new Teacher();
            Teacher? zz = new Teacher();
          string passMd5=  Md5(t.Password);
            if (R.Count == 0)
            {
                int i = 1;
                string guid = Guid.NewGuid().ToString();
                zz.Id = guid;
                zz.Password = passMd5;
                zz.TeacherName=t.TeacherName;
               zz.Email = t.Email;
                zz.TeacherId = t.TeacherId;
                zz.PhoneN= t.PhoneN;
                context.Teachers.Add(zz);
                context.SaveChanges();
                return zz;
            }

            else
            {

                rr1 = R.Where(r => r.TeacherId == t.TeacherId).FirstOrDefault();
                if (rr1 != null)
                {
                    zz.TeacherName = "Id";
                    return zz;
                }
                rr1 =R.Where(g=>g.Password==passMd5).FirstOrDefault();

                 if(rr1 != null)
                {
                    zz.TeacherName = "Password";
                    return zz;
                }
                string guid = Guid.NewGuid().ToString();
                zz.Id = guid;
                zz.Password=passMd5;
                   zz.TeacherName = t.TeacherName;
                    zz.Email = t.Email;
                    zz.TeacherId = t.TeacherId;
                    zz.PhoneN = t.PhoneN;
                    context.Teachers.Add(zz);
                    context.SaveChanges();
            }
            return zz;
        }       
    }
}




