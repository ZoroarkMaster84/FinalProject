module.exports = {
    addPokemonPage: function(request, response) {
        response.render('edit-pokemon', {add : true});
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

        let query = `INSERT INTO pokemen (name, type1, type2, held_item, move1, move2, move3, move4, ability, level, hp, attack, defense, sp_attack, sp_defense, speed) VALUES ('${name}', '${type1}', '${type2}', '${held_item}', '${move1}', '${move2}', '${move3}', '${move4}', '${ability}', ${level}, ${hp}, ${attack}, ${defense}, ${sp_attack}, ${sp_defense}, ${speed});`;

        db.query(query, function(error, result){
            if (error) {
                return response.status(500).send(error);
            }

            response.redirect('/');
        }
        )
    },

    editPokemonPage: function(request, response){
        let pokemonId = request.params.id;
        let query = `SELECT * FROM pokemen WHERE id = ${pokemonId};`;

        db.query(query, function(error, result){
            if (error) {
                return response.status(500).send(error);
            }
            console.log(result[0]);
            response.render('edit-pokemon', {
                add : false,
                pokemon: result[0]
            });
        });
    },

    editPokemon: function(request, response){
        let pokemonId = request.params.id;
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

        let query = `UPDATE pokemen
            SET name = '${name}',
            type1 = '${type1}',
            type2 = '${type2}',
            held_item = '${held_item}',
            move1 = '${move1}',
            move2 = '${move2}',
            move3 = '${move3}',
            move4 = '${move4}',
            ability = '${ability}',
            level = ${level},
            hp = ${hp},
            attack = ${attack},
            defense = ${defense},
            sp_attack = ${sp_attack},
            sp_defense = ${sp_defense},
            speed = ${speed},
            WHERE id = ${pokemonId};`;

        db.query(query, function(error, result){
            if (error) {
                return response.status(500).send(error);
            }
            
            response.redirect('/');

            })
        }
    }