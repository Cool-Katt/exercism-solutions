(defmodule anagram
  (export (find 2)))

(defun is-anagram (word test)
    (let ((test-lower (string:lowercase test)))
        (and
            (/= word test-lower) 
            (==
                (lists:sort (string:to_graphemes word))
                (lists:sort (string:to_graphemes (string:lowercase test)))))))

(defun do-find
    ([word '() results] (lists:reverse results))
    ([word (cons next remaining) results] 
        (let 
            ((next_results (if (is-anagram word next) (cons next results) results)))
            (do-find word remaining next_results))))

(defun find (word candidates) (do-find (string:lowercase word) candidates '())) 