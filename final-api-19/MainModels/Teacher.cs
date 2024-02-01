using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace final_api_19.MainModels;

public partial class Teacher
{
    public string Id { get; set; } = null!;

    public string TeacherName { get; set; } = null!;

    public string? Email { get; set; }

    public string? Password { get; set; }

    public int? TeacherId { get; set; }

    public string? PhoneN { get; set; }
    [JsonIgnore]
    [IgnoreDataMember]
    public virtual ICollection<Test> Tests { get; set; } = new List<Test>();
}
