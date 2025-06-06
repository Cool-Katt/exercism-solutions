module bob
  implicit none
contains
  function hey(statement)
    character(100) :: hey
    character(len=*), intent(in) :: statement
    logical :: is_question
    logical :: is_yelling
    is_question = (index(trim(statement), '?') == len(trim(statement)))
    is_yelling = (scan(statement, 'abcdefghijklmnopqrstuvwxyz') == 0) .and. (scan(statement, "ABCDEFGHIJKLMNOPQRSTUVWXYZ") /= 0) 
    if (is_question .and. is_yelling) then
        hey = "Calm down, I know what I'm doing!"
    endif
    if (is_question .and. .not. is_yelling) then
        hey = "Sure."
    endif
    if (.not. is_question .and. is_yelling) then
        hey = "Whoa, chill out!"
    endif
    if (.not. is_question .and. .not. is_yelling) then
        hey = "Whatever."
    endif
    if (len(trim(statement)) == 0) then 
      hey = "Fine. Be that way!" 
    endif
  end function hey
end module bob