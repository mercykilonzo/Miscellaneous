import jdk.internal.org.jline.keymap.KeyMap.key

//import kotlin.math.ln
//
//fun main() {
//
//    var y =countOcc("hello", 'l')
//
//    println("$y %")
//
//    println(shoppingCart(arrayOf("banana","apple","orange","banana","apple","pineapple")))
//    val result = wallet(arrayOf(100,200,500,1000,100,50))
//    println(result.contentToString())
//    println(isParindrome("Hannah"))
//    println(isParindromic("madam"))
//    val answer=shippingCost(36,42,2200,1800,16.75)
//    println(answer)
//    println(validPassword("123password"))
//}
//fun wallet(notes:Array<Int>):Array<Int>{
//    return notes.sortedArray()
//}
//fun isParindrome(name:String):Boolean{
//    return name.lowercase()== name.lowercase().reversed()
//}
//fun isParindromic(name1:String):Boolean{
//    val lname = name1.lowercase()
//    var l = 0
//    var r = lname.length -1
//    while (l<r){
//        if(lname[l]==lname[r]){
//            l++
//            r--
//        }
//        else{
//            return false
//        }
//    }
//    return true
//}
//fun shippingCost(diameterA:Int,diameterB: Int,
//numA:Int, numB:Int, rate:Double):Double{
//    val pi = 3.14159
//    val radiusA = diameterA/200.0
//    val typeAvol = (4.0/3) * pi * radiusA * radiusA * radiusA * numA
//    val radiusB= diameterB/200.0
//    val typeBVol = (4.0/3) * pi * radiusB *radiusB*radiusB *numB
//
//    val totalVol = typeBVol+typeAvol
//    return totalVol* rate
//}
//
//fun validPassword(userPassword:String):Boolean{
//    var badpass = "password123".lowercase()
//    badpass = badpass.toCharArray().sorted().joinToString("")
//    val sortedPass =userPassword.lowercase().toCharArray().sorted().joinToString ("")
//    return badpass==sortedPass
//
//
//}
//
//fun shoppingCart(shopping:Array<String>):Set<String>{
//    val unduplicate= shopping.toSet()
//    return unduplicate
//}
//fun countOcc(word:String, letter:Char):Double{
//    var count = 0
//        for(element in word)
//        if(element ==letter){
//        count++
//    }
//    val z =  count / 100.0 *word.length
//    return z
//
//
//}

//
//fun main(){
//    println(goodString("aabbcc"))
//    println(goodString("abcbb"))
//    println(charPercentage("arbitrary", 'b'))
//    println(reverseString(arrayOf('a','p','p','l','e')).contentToString())
//    println(distinctArray(arrayOf(1,2,3,4,5)))
//    println(targetSum(arrayOf(2,3,4,5),6).contentToString())
////    println(reverseName("Mercy"))
////    println(accessFrequency(arrayOf("001","002","004")))
//
//}
//fun goodString(s:String):Boolean{
//    var occuranceMap = HashMap<Char,Int>()
//    for(c in s){
//        var count = occuranceMap.getOrDefault(c,0)
//        occuranceMap[c] = ++count
//    }
//   val values = occuranceMap.values.toList()
//    val first = values[0]
//    for (v in values){
//        if(v!=first){
//            return false
//        }
//    }
//    return true
//}
//
//fun charPercentage(s:String, x:Char):Double{
//    var xcount = 0
//    for(c in s){
//        if(c==x){
//            xcount++
//        }
//    }
//   return (xcount.toDouble()/s.length)*100
//}
//// return a reversed array of characters
//fun reverseString(s:Array<Char>):Array<Char>{
//    var l =0
//    var r = s.size-1
//    while(l<r){
//        val tmp = s[l]
//        s[l] =s[r]
//        s[r] = tmp
//        l++
//        r--
//    }
//    return s
//}
// only return true if the array contains unique value
fun distinctArray(nums:Array<Int>):Boolean{
//    val set = nums.toSet()
//    return set.size < nums.size
    val occMap = HashMap<Int, Int>()
    for(n in nums){
        var ncount = occMap.getOrDefault(n,0)
        occMap[n] =++ncount
    }
    val values = occMap.values.toList()
    for(v in values){
        if (v!=1){
            return true
        }
    }
    return false

}

fun targetSum(nums: Array<Int>,target: Int):Array<Int>{
    val res = arrayOf(0,0)
    for(n in nums){
        val diff = target -n
        if (diff in nums && nums.indexOf(diff)!= nums.indexOf(n)){
            res[0] =nums.indexOf(n)
            res[1] =nums.indexOf(diff)
            return res
        }
    }
    return res
}

//a word that occurrs more than once
//fun wordFrequency(feedback: String): HashMap<String,Int>{
//
//}

//fun reverseName(name:String):String{
//    var l = 0
//    var r = name.length-1
//    var nameChars =  name.toCharArray()
//    while(l<r){
//        val tmp = nameChars[l]
//        nameChars[l] = nameChars[r]
//        nameChars[r]= tmp
//        l++
//        r--
//    }
//    return nameChars.joinToString("")
//}
//
////check the most frequent accesed id
//
//fun accessFrequency(a: Array<String>): Boolean{
//    var b = a.toSet()
//    return a.size == b.size
//}
//
//fun categorizeByAge(age:Int) {
//    if (age < 1) {
//        println("baby")
//    } else if (age > 1 && age <= 3) {
//        println("toddler")
//    } else if (age > 3 && age <= 12) {
//        println("child")
//    } else if (age > 18 && age <= 35) {
//        println("youth")
//    } else {
//        println("old")
//    }
//}


fun frequency(feedback: String): String {
    val feedbackCount = mutableMapOf<String, Int>()
    feedback.lowercase().split(" ").forEachIndexed { index, i ->
        var count = feedbackCount.getOrDefault(i, 0) +1
        feedbackCount[i] = count++
    }

    println(feedbackCount)

    val maxCount =feedbackCount.values.max()
    var frequentWord: String = ""
    for (x in feedbackCount) if (x.value == maxCount){
        frequentWord = x.key
    }
    return frequentWord
}





fun main(){

    println(frequency("I love fun coding coding  fun fun fun coding is fun"))

}








