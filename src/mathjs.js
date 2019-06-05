import core from 'mathjs/core'

// 四舍五入
import round from 'mathjs/lib/function/arithmetic/round'

// 加减乘除
import add from 'mathjs/lib/function/arithmetic/add'
import subtract from 'mathjs/lib/function/arithmetic/subtract'
import multiply from 'mathjs/lib/function/arithmetic/multiply'
import divide from 'mathjs/lib/function/arithmetic/divide'

// eval
import mathEval from 'mathjs/lib/expression/function/eval'

// type
import bigNumber from 'mathjs/lib/type/bignumber'

var math = core.create()

math.import(round)
math.import(mathEval)
math.import(add)
math.import(subtract)
math.import(multiply)
math.import(divide)
math.import(bigNumber)

export default math
