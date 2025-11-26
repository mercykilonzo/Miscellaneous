fun main() {
    var name:String? = null
    println(length("Name"))
    println(startswithFoo("The foo "))
    parindrome("Hannah")
}
fun length(any:Any):Int{
    val string = any as String
    return string.length
}
fun startswithFoo(z:String):Boolean{
    return z.startsWith("Foo")
}

fun parindrome(input: String){
    var name = input.lowercase()
    var name2 = name.reversed()
//    if (name==name.reversed()){
//        println("parindrome")
//    }
//    else{
//        println("not parindrome")
//    }
    when{
        name==name2-> println("parindrome")
        else-> println("not parindrome")

    }
}
class person (var firstName:String,var lastName:String, var age:Int){
    
}
