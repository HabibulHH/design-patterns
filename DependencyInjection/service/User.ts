import { UserService } from "./UserService";
import { Database, FakeDatabase, MongoDatabase, PostgresDatabase } from "./Database";

// injecting dependency
const userService = new UserService(new MongoDatabase());
userService.getUsers(); ///-- network 
 
const userService2 = new UserService(new FakeDatabase());
userService2.getUsers(); ///-- network -- no network
