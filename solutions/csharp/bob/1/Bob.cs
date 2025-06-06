using System.Linq;

public static class Bob
{
    public static string Response(string message)
    {
        if (message.IsSilence()) return "Fine. Be that way!";
        if (message.IsYell() && message.IsQuestion()) return "Calm down, I know what I'm doing!";
        if (message.IsYell()) return "Whoa, chill out!";
        if (message.IsQuestion()) return "Sure.";
        return "Whatever.";
    }    

    private static bool IsSilence(this string message) =>
        string.IsNullOrWhiteSpace(message);

    private static bool IsYell(this string message) =>
        message.Any(char.IsLetter) && message.ToUpperInvariant() == message;

    private static bool IsQuestion(this string message) =>
        message.TrimEnd().EndsWith("?");

}