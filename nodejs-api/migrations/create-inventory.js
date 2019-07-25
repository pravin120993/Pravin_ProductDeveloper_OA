exports.up = pgm => {
    pgm.createTable("daily_inventory", {
        id: "id",
        product_id: { type: "varchar(100)", notNull: true },
        date: { type: "date" },
        location: { type: "varchar(100)" },
        on_hand_qty: { type: "integer" },
        unit_cost: { type: "numeric" },
        on_hand_value: { type: "numeric" }
    });
};