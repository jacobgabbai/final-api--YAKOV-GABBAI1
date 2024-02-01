using api_final_19.Reposetory;
using final_api_19.MainModels;
using final_api_19.midddelwere;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<exeptionMiddelWere>();
builder.Services.AddSingleton<ITeacherRepo, TeacherRepo>();
builder.Services.AddSingleton<ITestRepo, TestRepo>();
builder.Services.AddSingleton<IQuaestionRepo, QuaestionRepo>();
builder.Services.AddSingleton<IAnswerRepo, AnswerRepo>();
builder.Services.AddSingleton<IStudentRepo, StudentRepo>();
builder.Services.AddSingleton<ITestExRepo, TestExRepo>();
builder.Services.AddSingleton<IQuestionExRepo, QuestionExRepo>();
builder.Services.AddSingleton<IAnswerExRepo, AnswerExRepo>();
builder.Services.AddDbContext<FinalProject2Context>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("db3000")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseStaticFiles();   
app.MapControllers();

app.Run();
