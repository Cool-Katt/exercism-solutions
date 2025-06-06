<?php

declare(strict_types=1);

function meetup_day(int $year, int $month, string $which, string $weekday): DateTimeImmutable
{
    return new DateTimeImmutable(match ($which) {
        'teenth' => "first $weekday $year-$month-12",
        default  => "$which $weekday of $year-$month",
    });
}