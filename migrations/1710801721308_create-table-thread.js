/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("threads", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    title: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    body: {
      type: "TEXT",
      notNull: true,
    },
    owner: {
      type: "VARCHAR(50)",
      references: "users",
      notNull: true,
      onDelete: "cascade",
    },
    created_at: {
      type: "TEXT",
      notNull: true,
    },
    updated_at: {
      type: "TEXT",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("threads");
};
