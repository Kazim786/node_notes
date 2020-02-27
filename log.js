let log = {
    info: (info) => {
        console.log(`info is: ${info}`)
        
    },
    warning: (warning) => {
        console.log(`warning ${warning}`)
        
    },
    error: (error) => {
        
        console.log(`Error: ${error}`)
    }
}

let digitalCraft = "school"

//to call these objects
// log.info('here is a value')
// log.warning

module.exports = log;
//you can only access what you export