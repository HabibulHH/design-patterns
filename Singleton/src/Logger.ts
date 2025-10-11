class Logger {
    private static instance: Logger;

    private constructor() {
        console.log('Logger instance created');
    }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance   ;
    }

    log(message: string) {
        console.log(`[LOG]: ${message}`);
    }
}

export default Logger;

// class Student {
//      public age: Number;
//      public static marks: Number;
//      constructor() {
//          this.age = 0;
//      }

//  }

// Student.marks = 21;

//  let st:Student = new Student();
// st.age = 21;
// console.log(st.age);