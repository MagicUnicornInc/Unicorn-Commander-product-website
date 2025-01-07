// ... (previous imports remain the same)

// Update the tables creation
async function initializeDatabase() {
  const db = await dbPromise;
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      betaTester BOOLEAN,
      product TEXT, -- 'lite', 'hosted', or NULL for general
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS preorders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      stripeSessionId TEXT UNIQUE,
      email TEXT,
      amount INTEGER,
      product TEXT, -- 'commander' or 'lite'
      status TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// Update waitlist endpoint to handle product type
app.post('/api/waitlist', async (req, res) => {
  try {
    const db = await dbPromise;
    const { email, betaTester, product } = req.body;
    
    await db.run(
      'INSERT INTO waitlist (email, betaTester, product) VALUES (?, ?, ?)',
      [email, betaTester || false, product || null]
    );
    
    res.json({ success: true });
  } catch (error) {
    if (error.message.includes('UNIQUE constraint failed')) {
      res.status(400).json({ error: 'Email already registered' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

// ... (rest of the server code remains the same)
