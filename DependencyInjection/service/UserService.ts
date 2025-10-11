import { Database } from './Database';

class UserService {
  private db: Database;

  constructor(db: Database) {
    this.db = db; // ❌ ভিতরে তৈরি হচ্ছে
  }

  getUsers() {
    this.db.connect();
    return this.db.query("SELECT * FROM users");
  }
 
}
export { UserService };

// tomas --- IGNORE ---