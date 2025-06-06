using System;
public class Clock : IEquatable<Clock>
{
    private int totalMinutes;
    public Clock(int hours, int minutes) => totalMinutes = hours * 60 + minutes >= 0 ? (hours % 24) * 60 + minutes % 1440 : (hours * 60 + minutes) % 1440 + 1440;
    public Clock Add(int minutesToAdd) => new Clock(totalMinutes / 60, totalMinutes % 60 + minutesToAdd);
    public Clock Subtract(int minutesToSubtract) => new Clock(totalMinutes / 60, totalMinutes % 60 - minutesToSubtract);
    public override string ToString() => $"{(totalMinutes / 60) % 24:D2}:{totalMinutes % 60:D2}";
    public bool Equals(Clock other) => totalMinutes == other.totalMinutes;
}
