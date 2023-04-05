import fetch from 'node-fetch';
import fs from 'fs'

const username = fs.readFileSync('/var/app/USERNAME', 
'utf8').toString();
const password = fs.readFileSync('/var/app/PASSWORD', 
'utf8').toString();

let url = process.env.URL || 'localhost'
let port = process.env.PORT || 30001
let pathurl = process.env.PATHURL || 'count'

let error = false
const response = await fetch(`http://${url}:${port}/${pathurl}`).catch(e => {
    console.error(e)
    error = !error
});
//node-entrypoint.default.svc.cluster.local

if (!error) {
    const data = await response.text();
    console.log(data);
}

console.log(username, password)

/*const { exec } = require('node:child_process')

exec('ls -l /var/app', (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    console.log(output)
})*/