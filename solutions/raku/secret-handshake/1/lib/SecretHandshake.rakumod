unit module SecretHandshake;

enum Action (
    ('wink',
    'double blink',
    'close your eyes',
    'jump') Z=> (1, 2, 4, 8)
);

sub handshake ( $number ) is export {
    return Action::.values.sort({$number +& 16 ?? $^b <=> $^a !! $a <=> $b}).grep(* +& $number);
}