/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("comments", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    content: {
      type: "TEXT",
      notNull: true,
    },
    owner: {
        type: "VARCHAR(50)",
        references: "users",
        notNull: true,
        onDelete: "cascade",
    },
    thread_id: {
        type: "VARCHAR(50)",
        references: "threads",
        notNull: true,
        onDelete: "cascade",
    },
    is_deleted: {
      type: "BOOLEAN",
      notNull: true,
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
    pgm.dropTable("comments");
};
