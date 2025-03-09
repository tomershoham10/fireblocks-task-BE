/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Retrieve a list of all tasks from the smart contract.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tasks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         example: 1
 *                       description:
 *                         type: string
 *                         example: "This is a sample task"
 *                       completed:
 *                         type: boolean
 *                         example: false
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /tasks/{id}/complete:
 *   post:
 *     summary: Mark a task as completed
 *     description: Completes a task on the Ethereum smart contract.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the task to complete.
 *     responses:
 *       200:
 *         description: Task completed successfully.
 *       400:
 *         description: Invalid request.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Add a new task
 *     description: Creates a new task in the Ethereum smart contract.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: "Finish Ethereum project"
 *     responses:
 *       200:
 *         description: Task added successfully.
 *       400:
 *         description: Invalid request.
 *       500:
 *         description: Server error.
 */
