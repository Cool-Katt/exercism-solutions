(import (rnrs))
(define (score word)
  (apply + (map (lambda (x) (- (char->integer (string-ref " 1332142418513113:11114484:" (modulo (char->integer x) 32))) 48)) (string->list word))))
