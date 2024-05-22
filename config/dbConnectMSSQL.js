
const sql = require('mssql');


const config = {

    server: 'DESKTOP-TUEPP1M', 
    database: 'nodetestDb',
   
    options: {
       
        trustedConnection : true,
        instanceName: 'SQLEXPRESS',
        enableArithAbort: true, 
        // trustServerCertificate: true,
         // encrypt: false, 
        // connectionTimeout: 15000, 
        // requestTimeout: 30000, 
        // rowCollectionOnRequestCompletion: true, 
        // appName: '',
        // port: 1433, 
        
       
    }
};



const  connDBmsSQL = async ()=> {
    try {
      
        await sql.connect(config);
        console.log('Connected to SQL Server');
      
    } catch (err) {
        console.error(err);
    }
}



module.exports = connDBmsSQL