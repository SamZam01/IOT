const express = require('express');
const router = express.Router();
const { getdata, visualization } = require('../controllers/dataController');

/**
 * @swagger
 * /data:
 *   get:
 *     summary: Obtiene los últimos 2 registros desde el endpoint externo
 *     responses:
 *       200:
 *         description: Lista con los últimos 2 objetos de datos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/data', getdata);

/**
 * @swagger
 * /visualize:
 *   post:
 *     summary: Recibe datos para reenviar a una app de visualización
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Datos recibidos correctamente
 */
router.post('/visualize', visualization);

module.exports = router;
