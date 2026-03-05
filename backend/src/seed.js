const pool = require('./config/db');
require('dotenv').config();

async function seed() {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Create tables
    await client.query(`
      CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS technicians (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        reg_rate DECIMAL(10,2) NOT NULL,
        ot_rate DECIMAL(10,2) NOT NULL,
        trip_rate DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS pricing_config (
        id SERIAL PRIMARY KEY,
        labor_markup DECIMAL(5,2) NOT NULL,
        materials_markup DECIMAL(5,2) NOT NULL,
        subcontractor_markup DECIMAL(5,2) NOT NULL,
        multiplier_primary DECIMAL(5,2) NOT NULL,
        multiplier_secondary DECIMAL(5,2) NOT NULL,
        permit_fee DECIMAL(10,2) NOT NULL,
        admin_fee DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Clear existing data
    await client.query('TRUNCATE clients, technicians, pricing_config RESTART IDENTITY CASCADE');

    // Seed clients
    await client.query(`
      INSERT INTO clients (name) VALUES
        ('Vixxo7E'),
        ('Shell'),
        ('El Pollo Loco')
    `);

    // Seed technicians with reg/OT/trip rates
    await client.query(`
      INSERT INTO technicians (name, reg_rate, ot_rate, trip_rate) VALUES
        ('Mike Johnson', 45.00, 67.50, 35.00),
        ('Sarah Chen', 50.00, 75.00, 40.00),
        ('Carlos Rivera', 48.00, 72.00, 38.00),
        ('David Kim', 52.00, 78.00, 42.00)
    `);

    // Seed pricing config
    // labor 0.8 (80%), materials 0.64 (64%), sub 0.6 (60%)
    // multipliers 0.92 and 0.91
    // fees $35 permit, $16.50 admin
    await client.query(`
      INSERT INTO pricing_config (
        labor_markup,
        materials_markup,
        subcontractor_markup,
        multiplier_primary,
        multiplier_secondary,
        permit_fee,
        admin_fee
      ) VALUES (0.80, 0.64, 0.60, 0.92, 0.91, 35.00, 16.50)
    `);

    await client.query('COMMIT');
    console.log('Database seeded successfully!');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

seed().catch(console.error);
