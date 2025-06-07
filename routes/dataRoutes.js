const express = require('express');
const router = express.Router();
const { getdata, visualization, setTestTemperature, getTestTemperature } = require('../controllers/dataController');
/**
 * @swagger
 * /test-temperature:
 *   post:
 *     summary: Establece un valor de temperatura de prueba para simulación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               temperature:
 *                 type: number
 *                 example: 35
 *     responses:
 *       200:
 *         description: Temperatura de prueba establecida
 */
router.post('/test-temperature', setTestTemperature);

/**
 * @swagger
 * /test-temperature:
 *   get:
 *     summary: Obtiene la temperatura de prueba configurada
 *     responses:
 *       200:
 *         description: Temperatura de prueba
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 temperature:
 *                   type: number
 *       404:
 *         description: No hay temperatura de prueba configurada
 */
router.get('/test-temperature', getTestTemperature);


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
