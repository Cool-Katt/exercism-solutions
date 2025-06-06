using System;

static class AssemblyLine
{
    private const int BASE_RATE = 221;
    
    public static double SuccessRate(int speed)
    {
        switch(speed) {
            case 0: return 0.0;
            case <= 4: return 1.0;
            case <= 8: return 0.9;
            case 9: return 0.8;
            case 10: return 0.77;
            default: return -0.0;
        }
    }
    
    public static double ProductionRatePerHour(int speed)
    {
        return BASE_RATE * speed * SuccessRate(speed);
    }

    public static int WorkingItemsPerMinute(int speed)
    {
        return (int)ProductionRatePerHour(speed) / 60;
    }
}
