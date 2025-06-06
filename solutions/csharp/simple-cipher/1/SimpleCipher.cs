using System;
using System.Linq;
public class SimpleCipher
{
    private readonly Random random = new Random();
    public string Key { get; }
    public SimpleCipher()
        => Key = string.Concat(Enumerable.Range(0, 100).Select(x => (char)random.Next('a', 'z' + 1)));
    public SimpleCipher(string key) 
        => Key = key;
    public string Encode(string text)
        => string.Concat(text.Select((x, i) => ApplyCipher(x, i, (b, s) => (b + s) % 26)));
    public string Decode(string text)
        => string.Concat(text.Select((x, i) => ApplyCipher(x, i, (b, s) => (b - s + 26) % 26)));
    private char ApplyCipher(char c, int i, Func<int, int, int> func)
        => (char)('a' + func(c - 'a', Key[i % Key.Length] - 'a'));
}