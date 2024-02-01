using final_api_19.MainModels;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace final_api_19.Dto
{
    public class QuestionDtoB
    {
        public string Id { get; set; } = null!;

        public string TestIdRef { get; set; } = null!;

        public string Questions { get; set; } = null!;

        public string? Picture { get; set; }
        [JsonIgnore]
        [IgnoreDataMember]
        public virtual ICollection<Answer> Answers { get; set; } = new List<Answer>();

        public virtual Test TestIdRefNavigation { get; set; } = null!;
    }
}
