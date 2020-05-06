module.exports = {
    getHomePage: function(request, response) {
        let query = `SELECT * FROM pokemen ORDER BY id ASC`;

        function queryCallback(error, results) {
            if (error) {
                return response.status(500).send(error);
            }

            let renderData = {
                pokemen: results
            }

            response.render('index', renderData);
        }

        db.query(query, queryCallback);
    }
};