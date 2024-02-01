using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace final_api_19.MainModels;

public partial class TestEx1
{
    public string Id { get; set; } = null!;

    public string TestName { get; set; } = null!;

    public string? StuName { get; set; }

    public string? StuId { get; set; }

    public string? Grade { get; set; }
    [JsonIgnore]
    [IgnoreDataMember]
    public virtual ICollection<QuestionEx> QuestionExes { get; set; } = new List<QuestionEx>();
}
