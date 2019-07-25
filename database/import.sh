#!/bin/bash
set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-eosql
CREATE TABLE daily_inventory
(
    id SERIAL,
    product_id character varying(100) NOT NULL,
    date date,
    location character varying(100),
    on_hand_qty integer,
    unit_cost numeric,
    on_hand_value numeric,
    CONSTRAINT daily_inventory_pkey PRIMARY KEY (id)
);
COPY daily_inventory(product_id, date, location, on_hand_qty, unit_cost, on_hand_value) FROM '/app/daily-inventory.csv' DELIMITER ',' CSV HEADER; 
eosql