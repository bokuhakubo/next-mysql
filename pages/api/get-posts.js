import db from '../../lib/db'
// import { parseISO, format, getDate } from 'date-fns'
// import ja from 'date-fns/locale/ja'
// import { json } from 'express';

export default async (req, res) => {
    try {
        let results = await db.query('SELECT * FROM posts')
 
        // Run clean up function
        await db.end()
        
        res.end(JSON.stringify(results))

        // const date = results[4]['created'];
        // res.json(date.toLocaleString())

        // const data = results.map(x => x.created);
        // res.json(data);

    } catch ( error ) {
        console.log( error );
    }
};