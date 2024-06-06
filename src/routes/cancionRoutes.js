const express = require('express');
const router = express.Router();
const db = require('../db');

// POST: Agregar una nueva canción
router.post('/cancion', async (req, res) => {
    const { titulo, artista, tono } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *',
            [titulo, artista, tono]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al agregar la canción');
    }
});

// GET: Obtener todas las canciones
router.get('/canciones', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM canciones');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las canciones');
    }
});

// PUT: Actualizar una canción existente
router.put('/cancion/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    try {
        const result = await db.query(
            'UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *',
            [titulo, artista, tono, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Canción no encontrada');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la canción');
    }
});

// DELETE: Eliminar una canción
router.delete('/cancion', async (req, res) => {
    const { id } = req.query;
    try {
        const result = await db.query(
            'DELETE FROM canciones WHERE id = $1 RETURNING *',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Canción no encontrada');
        }
        res.status(200).send('Canción eliminada');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al eliminar la canción');
    }
});

module.exports = router;
