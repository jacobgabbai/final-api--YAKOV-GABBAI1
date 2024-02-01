using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace final_api_19.MainModels;

public partial class AnswerEx1
{
    public string Id { get; set; } = null!;

    public string? RightAnswer { get; set; }

    public string? WorngAnswer { get; set; }

    public string QuestionEx1IdRef { get; set; } = null!;
    [JsonIgnore]
    [IgnoreDataMember]
    public virtual QuestionEx QuestionEx1IdRefNavigation { get; set; } = null!;
}
