package KindergartenGarden;

use v5.40;

use Exporter qw<import>;
our @EXPORT_OK = qw<plants>;

sub plants ( $diagram, $student ) {
    return [
        { C => 'clover', G => 'grass', R => 'radishes', V => 'violets' }
        ->
        @{ map { split //, substr $_, ( ord($student) - ord('A') ) * 2, 2 } split /\n/, $diagram }
    ];
}