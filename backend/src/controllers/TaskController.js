const connection = require('../database/connection');

module.exports = {
    async index(request, response){

        const tasks = await connection('tasks').select('*');
    
        return response.json(tasks);
    },

    async create(request, response){
        const { name, duration, deadline} = request.body;

        const [id] = await connection('tasks').insert({
            name,
            duration,
            deadline,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        const task = await connection('tasks')
            .where('id', id)
            .first();

        await connection('tasks').where('id', id).delete();

        return response.status(204).send();
    }
};