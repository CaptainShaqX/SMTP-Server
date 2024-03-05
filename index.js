const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({

    allowInsecureAuth: true,
    authOptional: true,

    onConnect(session, cb) {
        // cb(new Error ('Connot accept connection'))

        console.log('onConnect', session.id)
        cb() // accept mail
    },
    onMailFrom(address, session, cb) {
        console.log(`onMailFrom`, address.address, session.id)
        cb() // accept mail
    },
    onRcptTo(address, session, cb) {
        console.log(`onRcptTo`, address.address, session.id)
        cb() // 
    },
    onData(stream, session, cb) {
        stream.on('data', (data) => console.log(`onData ${data.toString()}`))
        stream.on('end', cb)
    },
     

});

server.listen(25, () => console.log('server running on 25'))