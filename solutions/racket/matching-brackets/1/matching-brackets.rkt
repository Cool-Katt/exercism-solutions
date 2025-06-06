#lang racket

(provide balanced?)

(define (balanced? str)
  (let ([s (regexp-replace* #rx"[^][(){}]|\\(\\)|\\[\\]|\\{\\}" str "")])
    (if (equal? s str) (equal? s "") (balanced? s))))