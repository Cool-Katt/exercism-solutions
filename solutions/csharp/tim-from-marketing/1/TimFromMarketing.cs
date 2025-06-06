using System;

static class Badge
{
    public static string Print(int? id, string name, string? department)
    {
        string idPart = id != null ? $"[{id}] - " : "";
        string IsOwner = department != null ? $" - {department.ToUpper()}" : " - OWNER";
        return $"{idPart}{name}{IsOwner}";
    }
}
