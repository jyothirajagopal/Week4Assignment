//Create an enum named `Environment` with four values

enum Environment{
     local = "LOCAL",
     dev = "DEVELOPMENT",
     stag = "STAGING",
     prod = "PRODUCTION"

}
//Function 'runTest' that accepts arguments of type 'Environment'
function runTest(Env : Environment):void
{
   console.log(`Environment is : ${Env}`);
}

//calling runTest with different Enum values

runTest(Environment.dev)
runTest(Environment.local)
runTest(Environment.stag)
runTest(Environment.prod)
