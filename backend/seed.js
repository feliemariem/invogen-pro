import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function seed() {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Create tables
    await client.query(`
      DROP TABLE IF EXISTS technicians CASCADE;
      DROP TABLE IF EXISTS clients CASCADE;
      DROP TABLE IF EXISTS pricing_config CASCADE;

      CREATE TABLE clients (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        code VARCHAR(50) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE technicians (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        reg_rate DECIMAL(10,2) NOT NULL,
        ot_rate DECIMAL(10,2) NOT NULL,
        trip_rate DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE pricing_config (
        id SERIAL PRIMARY KEY,
        config_key VARCHAR(50) UNIQUE NOT NULL,
        config_value DECIMAL(10,4) NOT NULL,
        description VARCHAR(255)
      );
    `);

    // Seed clients
    await client.query(`
      INSERT INTO clients (name, code) VALUES
        ('Vixxo7E', 'VIXXO7E'),
        ('Shell', 'SHELL'),
        ('El Pollo Loco', 'EPL');
    `);

    // Seed technicians with reg/OT/trip rates
    await client.query(`
      INSERT INTO technicians (name, reg_rate, ot_rate, trip_rate) VALUES
        ('Mike Rodriguez', 75.00, 112.50, 45.00),
        ('James Chen', 70.00, 105.00, 40.00),
        ('David Park', 80.00, 120.00, 50.00),
        ('Carlos Mendez', 72.00, 108.00, 42.00);
    `);

    // Seed pricing config (markups and multipliers)
    await client.query(`
      INSERT INTO pricing_config (config_key, config_value, description) VALUES
        ('markup_labor', 0.8000, 'Labor markup percentage'),
        ('markup_materials', 0.6400, 'Materials markup percentage'),
        ('markup_sub', 0.6000, 'Subcontractor markup percentage'),
        ('multiplier_primary', 0.9200, 'Primary multiplier'),
        ('multiplier_secondary', 0.9100, 'Secondary multiplier'),
        ('fee_service', 35.0000, 'Service fee'),
        ('fee_processing', 16.5000, 'Processing fee');
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

seed();
