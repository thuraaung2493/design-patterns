class Application {
  static #instance: Application;

  private constructor() {}

  public static get instance(): Application {
    if (!Application.#instance) {
      Application.#instance = new Application();
    }

    return Application.#instance;
  }

  run(msg: string) {
    console.log(msg);
  }
}

export default Application;
