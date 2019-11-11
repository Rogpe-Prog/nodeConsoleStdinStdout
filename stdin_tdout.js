
//To get some information in a console using Node

process.stdout.write('Are you ok? ')
process.stdin.on('data', function(data) {
    process.stdout.write(`You are typed ${data.toString()}Thank you!\n`)
    process.exit()
})