interface Database {
  connect(): void;
  query(sql: string): any;
}

class PostgresDatabase implements Database {
  connect() {
    console.log("Connected to Postgres");
  }
  query(sql: string) {
    console.log("Postgres query:", sql);
  }
}

class MongoDatabase implements Database {
  connect() {
    console.log("Connected to MongoDB");
  }
  query(sql: string) {
    console.log("MongoDB query:", sql);
  }
}


export class FakeDatabase implements Database {
  connect() {
    console.log("[FAKE-DB] Pretending to connect...");
  }

  query(sql: string) {
    console.log(`[FAKE-DB] Running query: ${sql}`);
    // return some mock data
    return [
      { id: 1, name: "Habibul Hasan" },
      { id: 2, name: "John Doe" },
    ];
  }
}
export { Database, PostgresDatabase, MongoDatabase };
