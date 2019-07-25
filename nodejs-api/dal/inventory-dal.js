const { Pool } = require('pg')
function connect() {
    client.connect().then(() => console.log('connected'))
        .catch(e => {
            console.error('connection error', e.stack)
            setTimeout(() => {
                // if(!(client._connected || client._connecting)){
                    connect()
                // }
            }, 5000)
        })
}
class InventoryDal {
    getAllInventory(type) {
        return new Promise((resolve, reject) => {
            let query
            if(type == 'day') {
                query = "Select to_char(date, 'DD-MM-YYYY') as date, SUM(on_hand_value) as on_hand_value from daily_inventory group by date order by date";
            } else {
                query = "Select date_part('week', date::date) AS weekly, SUM(on_hand_value) as on_hand_value from daily_inventory group by weekly order by weekly";
            }
            const pool = new Pool({
                connectionString: 'postgres://postgres:postgres@postgres:5432/inventory'
            })
            pool.query(query, (err, res) => {
                if (err) {
                    console.log(err)
                    reject(err);
                }
                pool.end()
                resolve(res.rows)
            })
        })
    }
}

module.exports = new InventoryDal();