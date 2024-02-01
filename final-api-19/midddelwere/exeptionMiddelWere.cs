using final_api_19.Models;
using Microsoft.AspNetCore.Components.Web;
using System.Net;
using System.Text.Json;

namespace final_api_19.midddelwere
{
    public class exeptionMiddelWere:IMiddleware
    {
        private readonly ILogger<exeptionMiddelWere> logger;

        public exeptionMiddelWere(ILogger<exeptionMiddelWere>  Logger)
        {
            logger = Logger;
            
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                logger.LogError("$ exeption error");
              await  HandleExeption(context, ex);

            }
        }

        private static Task HandleExeption(HttpContext context, Exception ex)
        {

            int StatusCode = (int)HttpStatusCode.InternalServerError;
            var ErrorResponse = new ErrorResponse()
            {
                StatusCode = StatusCode,
                Message = ex.Message

            };
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = StatusCode;
            
            return context.Response.WriteAsync(ErrorResponse.ToString());
        }
    }

    public static class ExeptionMiddelWereExtention
    {

        public static void ConfigureExptionMiddelWere(this IApplicationBuilder app)
        {

            app.UseMiddleware<exeptionMiddelWere>();

        }

    }
}
