class SpaceAge
  Planet = {
    Earth: 1, 
    Mercury: 0.2408467, 
    Venus:  0.61519726, 
    Mars: 1.8808158, 
    Jupiter: 11.862615, 
    Saturn:  29.447498,
    Uranus:  84.016846,
    Neptune: 164.79132
  }
  Planet.each{|planet,year| define_method("on_" + planet.downcase.to_s){ @earth_year / Planet[planet]}}
  def initialize(second)
    @earth_year = second.to_f / 60 / 60 / 24 / 365.25
  end
end
