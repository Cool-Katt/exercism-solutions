(module
  ;; squareNum is signed
  ;; Result is unsigned
  (func $square (export "square") (param $squareNum i32) (result i64)
    (if (i32.or (i32.le_s (local.get $squareNum) (i32.const 0)) 
                (i32.gt_s (local.get $squareNum) (i32.const 64))
        )
      (return (i64.const 0))
    )
    (i64.shl (i64.const 1) (i64.extend_i32_s (i32.sub (local.get $squareNum) (i32.const 1))))
  )
  ;; Result is unsigned
  (func (export "total") (result i64)
    (i64.const -1)
  )
)