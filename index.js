const user =

{
    name: "Ryan",
    lastname:"Ray",
    age:"25",
    nickname:"Ryan123",
    hobbies : ["run", "code", "eat","listen"],
    address : {
        Barrio : "Ciudadela Novaterra",
        Conjunto:"Zapan",
        Apartamento:834
    },
    married:false,
    greet() {
        return 'Quemas'
    }
}

const friends =
[{name: "Ryan",lastname:"Ray"},
{name: "Sebas",lastname:"Pinilla"},
{name: "Joe",lastname:"FLorez"},
{name: "Wil",lastname:"Rios"}
]


user.friends=friends

let output = ''

for (let i = 0; i < friends.length; i++) {output += `<li>${friends[i].name} - ${friends[i].lastname}</li>`}




document.getElementById('people').innnerHTML=output
console.log (JSON.stringify(user))

console.log(JSON.stringify(friends))



//console.log(user.name)
//console.log(user.hobbies)
//console.log(user.greet())



