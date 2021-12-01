
// What will be the result for these expressions?

5 > 4                 // true (because of math)
"apple" > "pineapple" // false (because of Unicode)
"2" > "12"            // true (because of Unicode)
undefined == null     // true (because they equal each other (in the sense of ==), but not any other value.)
undefined === null    // false
null == "\n0\n"       // false (because null == undifined ONLY)
null === +"\n0\n"     // false