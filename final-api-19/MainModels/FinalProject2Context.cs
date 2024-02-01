using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace final_api_19.MainModels;

public partial class FinalProject2Context : DbContext
{
    public FinalProject2Context()
    {
    }

    public FinalProject2Context(DbContextOptions<FinalProject2Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Answer> Answers { get; set; }

    public virtual DbSet<AnswerEx1> AnswerEx1s { get; set; }

    public virtual DbSet<Question> Questions { get; set; }

    public virtual DbSet<QuestionEx> QuestionExes { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    public virtual DbSet<Teacher> Teachers { get; set; }

    public virtual DbSet<Test> Tests { get; set; }

    public virtual DbSet<TestEx1> TestEx1s { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Answer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Answer__3214EC076DF1A989");

            entity.ToTable("Answer");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Answer1)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.QuestionIdRef)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.RightWorng)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.QuestionIdRefNavigation).WithMany(p => p.Answers)
                .HasForeignKey(d => d.QuestionIdRef)
                .HasConstraintName("FK__Answer__Question__4222D4EF");
        });

        modelBuilder.Entity<AnswerEx1>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__AnswerEx__3214EC07ECDE0300");

            entity.ToTable("AnswerEx1");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.QuestionEx1IdRef)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.RightAnswer)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.WorngAnswer)
                .HasMaxLength(200)
                .IsUnicode(false);

            entity.HasOne(d => d.QuestionEx1IdRefNavigation).WithMany(p => p.AnswerEx1s)
                .HasForeignKey(d => d.QuestionEx1IdRef)
                .HasConstraintName("FK__AnswerEx1__Quest__49C3F6B7");
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Question__3214EC07E0103BF6");

            entity.ToTable("Question");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Picture).HasColumnName("picture");
            entity.Property(e => e.Questions)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.TestIdRef)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.TestIdRefNavigation).WithMany(p => p.Questions)
                .HasForeignKey(d => d.TestIdRef)
                .HasConstraintName("FK__Question__TestId__3F466844");
        });

        modelBuilder.Entity<QuestionEx>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Question__3214EC078CF8683B");

            entity.ToTable("QuestionEx");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TestEx1IdRef)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.TestEx1IdRefNavigation).WithMany(p => p.QuestionExes)
                .HasForeignKey(d => d.TestEx1IdRef)
                .HasConstraintName("FK__QuestionE__TestE__46E78A0C");
        });

        modelBuilder.Entity<Student>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__student__3214EC07D6EAEEA2");

            entity.ToTable("student");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StuId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StuName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Tel)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Teacher>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Teacher__3214EC076F3C41C6");

            entity.ToTable("Teacher");

            entity.HasIndex(e => e.TeacherId, "UQ__Teacher__EDF2596572F9C882").IsUnique();

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PhoneN)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TeacherName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Test>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Test__3214EC0707EBDF87");

            entity.ToTable("Test");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StartTime)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TeacherIdRef)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TestDate)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TestName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TotalTime)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.TeacherIdRefNavigation).WithMany(p => p.Tests)
                .HasForeignKey(d => d.TeacherIdRef)
                .HasConstraintName("FK__Test__TeacherIdR__3C69FB99");
        });

        modelBuilder.Entity<TestEx1>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TestEx1__3214EC07128BA5CD");

            entity.ToTable("TestEx1");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Grade)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StuId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StuName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TestName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
