proc abbreviate {phrase} {
    set y {}
    set z {}
    foreach x [regexp -all -inline {(^| |-|_)([A-Za-z])} $phrase] {lappend y $x}
    for {set i 2} {$i < [llength $y]} {incr i 3} {lappend z [lindex $y $i]}
    string toupper [join $z ""]
}
