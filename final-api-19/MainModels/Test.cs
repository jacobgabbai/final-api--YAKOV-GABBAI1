using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace final_api_19.MainModels;

public partial class Test
{
    public string Id { get; set; } = null!;

    public string TestName { get; set; } = null!;

    public string TestDate { get; set; } = null!;

    public string StartTime { get; set; } = null!;

    public string TotalTime { get; set; } = null!;

    public int Random { get; set; }

    public string TeacherIdRef { get; set; } = null!;
    [JsonIgnore]
    [IgnoreDataMember]
    public virtual ICollection<Question> Questions { get; set; } = new List<Question>();

    public virtual Teacher TeacherIdRefNavigation { get; set; } = null!;
}
