import { Client } from 'pg'

const client = new Client({
    host: 'localhost',
    port: 15437,
    database: 'credmark',
    user: 'cmk_price',
    password: '',
  });

async function del(client: Client): Promise<void> {
    console.log('start');
    await client.connect()

    const result = await client.query('SELECT NOW()')
    console.log(result)

    await client.end()

    console.log('end');
}

del(client);