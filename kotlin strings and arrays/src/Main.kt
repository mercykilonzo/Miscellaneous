import kotlin.math.pow

fun main() {
    checkAnagram("2356sdsd", "2sdsd356")

    println("Hello World!")

//    count the  size of an array
var a = "Hello"
    var b = a.split("")
    println(b)
    val x= reversedString("i love kotlin")
    println(x)

    val reversed = a.reversed()
    println(reversed)
    val reversedText=reverse("Goodmorning")
    println(reversedText)


    var namesArray= arrayOf("Ada", "Beth", "Chris", "Diana", "Elsie", "Fiona")
    println(namesArray[4])
    namesArray[0] = "Mercy"
    println(namesArray.contentToString())

    namesArray.forEach { nam ->
        println(nam)
    }
    val sort = namesArray.sortedArray()
    println(sort.contentToString())

    notes(50, 200, 50)

    palindrome("Hannah")

    println(palindrome2("Madam"))

    println(calcVol(0.36, 0.42))
    shipping(2200.0,36.0)
    shipping(1800.0,42.0)

}

fun reversedString(sentence:String):String{
    var reversedsentence = ""
    for( i in sentence.length -1 downTo 0) {
        reversedsentence += sentence[i]
    }
    return reversedsentence
}

fun reverse(text:String):String{
    var string =text.reversed()
    return string
}

//Assessment
fun notes(x:Int,y:Int,z:Int){
    var array1 = arrayOf(x,y,z)
    var sortednotes = array1.sortedArray()
    println(sortednotes.contentToString())
}

fun palindrome(name:String){
    var x = name.lowercase()
    if(x==x.reversed()){
        println("it is palindrome")
    }
    else{
        println("not palindrome")
    }
}

fun palindrome2(name1:String):Boolean{
    var newname = name1.lowercase()
   return if (newname==name1.reversed()) true else false
}



fun calcVol(typeA:Double, typeB: Double):Double{
    val pi=3.14
    var volume1=4/3 * pi *  1800 * (typeA/2).pow(3)
    println(volume1)
    var volume2=4/3 * pi * 2200 * (typeB/2).pow(3)
    var sum = volume1 + volume2
    var cost = sum * 16.75
    return cost
}
fun checkAnagram(password1: String, password2: String)
{


    password1.lowercase().toCharArray().sorted().joinToString("")

    password2.lowercase().toCharArray().sorted().joinToString("")
    if(password1==password2){
        println("It works")

    }
    else{
        println("Not really")
    }

}

//fun nameWithVowels(s:String){
//    var nam= s.startsWith("i"||"e"||)
//}

fun shipping(piece:Double,diameter:Double) {

    val diameterInMeter=diameter / 100
    val radius = diameterInMeter / 2
    val volume=(4*(radius*radius*radius)*(3.14159265359))/3
    val volumeOfAll=volume*piece
    val cost=16.47*volumeOfAll
    println(radius)
    println("the volume is: $volumeOfAll")
    println("the cost is: $cost")
}

