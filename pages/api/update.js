import db from '../../lib/db'
export default async (req, res) => {
    try {
      const data = req.body
        try {
          const query = 'UPDATE posts SET `title`=?,`content`=?,`author`=? WHERE id=?'
          const values = [data.title,data.content,data.author,data.id]
          const results = await db.query(query, values);
          await db.end();
          res.end(JSON.stringify(results))
        } catch (error) {
          res.end(error)
        }
    //   const result = await excuteQuery({
    //       query: 'INSERT INTO posts(`title`,`content`,`author`) VALUES(?,?,?)',
    //       values: [data.title,data.content,data.author],
    //   });
      res.end(JSON.stringify(result))
  } catch ( error ) {
      console.log( error );
  }
};