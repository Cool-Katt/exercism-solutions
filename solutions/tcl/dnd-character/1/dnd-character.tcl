namespace eval dnd {
    namespace export character ability modifier
    namespace ensemble create
    proc modifier {score} {
        expr {$score - 10 >> 1}
    }
    proc ability {} {
        expr {int(rand() * 16 + 3)}
    }
    proc character {} {
        set constitution [ability]
        return "charisma [ability] constitution $constitution dexterity [ability] intelligence [ability] strength [ability] wisdom [ability] hitpoints [expr {10 + [modifier $constitution]}]"
    }
}
