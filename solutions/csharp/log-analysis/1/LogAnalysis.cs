using System;

public static class LogAnalysis 
{
    public static string SubstringAfter(this string s, string d) => s[(s.IndexOf(d) + d.Length)..];
    public static string SubstringBetween(this string s, string start, string end) => 
        s[(s.IndexOf(start) + start.Length)..s.IndexOf(end)];
    public static string Message(this string s) => s.SubstringAfter("]: ");
    public static string LogLevel(this string s) => s.SubstringBetween("[", "]");
}