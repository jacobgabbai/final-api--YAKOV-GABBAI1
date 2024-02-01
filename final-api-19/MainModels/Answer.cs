using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace final_api_19.MainModels;

public partial class Answer
{
    public string Id { get; set; } = null!;

    public string Answer1 { get; set; } = null!;

    public string QuestionIdRef { get; set; } = null!;

    public string RightWorng { get; set; } = null!;
    [JsonIgnore]
    [IgnoreDataMember]
    public virtual Question QuestionIdRefNavigation { get; set; } = null!;
}
