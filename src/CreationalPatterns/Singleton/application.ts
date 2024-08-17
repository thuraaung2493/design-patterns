class Application {
  private static instance: Application;

  private constructor() {}

  static getInstance(): Application {
    if (!Application.instance) {
      Application.instance = new Application();
    }

    return Application.instance;
  }

  run(msg: string) {
    console.log(msg);
  }
}

export default Application;
