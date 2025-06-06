unit module PhoneNumber;

constant @errors = (
   '11 digits must start with 1',
   'must not be greater than 11 digits',
   'must not be fewer than 10 digits',
   'letters not permitted',
   'punctuations not permitted',
   'area code cannot start with zero',
   'area code cannot start with one',
   'exchange code cannot start with zero',
   'exchange code cannot start with one',
);

sub clean-number ($number) is export {
    $_ = $number;

    die(@errors[3]) if m/<[a .. z A .. Z]>/;
    die(@errors[4]) if m/<[ @ : ! ]>/;

    s:g/<-[0 .. 9]>//;

    die(@errors[1]) if .chars > 11;
    die(@errors[2]) if .chars < 10;

    m/^ $<icc>=[\d]? $<local>=[ $<area0>=[\d] \d**2 $<exch0>=[\d] \d**6 ] $/;

    die(@errors[0]) if $<icc> != '1'|Nil;
    die(@errors[5]) if $<area0> == '0';
    die(@errors[6]) if $<area0> == '1';
    die(@errors[7]) if $<exch0> == '0';
    die(@errors[8]) if $<exch0> == '1';

    $<local>.Str;
}