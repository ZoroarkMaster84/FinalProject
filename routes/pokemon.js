module.exports = {
    addPokemonPage: function(request, response) {
        response.render('edit-pokemon');
    },
    addPokemon: function(request, response){
        let name = request.body.name;
        let type1 = request.body.type1;
        let type2 = request.body.type2;
        let held_item = request.body.held_item;
        let move1 = request.body.move1;
        let move2 = request.body.move2;
        let move3 = request.body.move3;
        let move4 = request.body.move4;
        let ability = request.body.ability;
        let level = request.body.level;
        let hp = request.body.hp;
        let attack = request.body.attack;
        let defense = request.body.defense;
        let sp_attack = request.body.sp_attack;
        let sp_defense = request.body.sp_defense;
        let speed = request.body.speed;

        let query = `INSERT INTO pokemen (name, type1, type2, held_item, move1, move2, move3, move4, ability, level, hp, attack, defense, sp_attack, sp_defesne, speed) VALUES ('${name}', ${type1}', ${type2}', ${held_item}', ${move1}', ${move2}', ${move3}', ${move4}', ${ability}', ${level}', ${hp}', ${attack}', ${defense}', ${sp_attack}', ${sp_defense}', ${speed}',);`;

        db.query(query, function(error, result){
            if (error) {
                return response.status(500).send(error);
            }

            response.redirect('/');
        }
        )
    }
}