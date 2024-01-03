import { MongoClient, ObjectId } from 'mongodb';

export default async function editHandler(req, res) {
  const filter = { _id: new ObjectId(req.body._id) };
  const setReqObj = {title : req.body.title , content : req.body.content}
  const url = 'mongodb+srv://admin:blog1644@cluster0.ebcae3z.mongodb.net/';
  const client = new MongoClient(url);

  if (req.method === 'POST') {
    console.log(req.body);
  }
  if (req.body.title === '') {
    return res.status(500).json('제목을 작성 해주세요.');
  }
  try {
    await client.connect();
    const db = client.db('blog');
    const posts = await db.collection('post').updateOne(filter,{$set:setReqObj});
    return res.status(200).redirect('/List');
  } catch (error) {
    res.status(500).json({ error: '수정을 하는데 실패 했습니다.' });
  } finally {
    await client.close();
  }
}
