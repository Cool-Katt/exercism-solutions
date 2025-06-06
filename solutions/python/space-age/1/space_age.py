RATIOS = {
    'on_earth': 1.0, 
    'on_mercury': 0.2408467,
    'on_venus': 0.61519726, 
    'on_mars': 1.8808158, 
    'on_jupiter': 11.862615, 
    'on_saturn': 29.447498, 
    'on_uranus': 84.016846, 
    'on_neptune': 164.79132
}

class SpaceAge:
    def __init__(self, seconds): self.earth_age = seconds / 31_557_600  
    def __getattr__(self, name): return lambda: round(self.earth_age / RATIOS[name], 2)