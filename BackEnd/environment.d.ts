declare global {
    namespace NodeJS {
      interface ProcessEnv {
        // GITHUB_AUTH_TOKEN: string;
        // NODE_ENV: 'development' | 'production';
        // PORT?: string;
        DB_CONNECTION_CHUB: string;
        DB_CONNECTION_SB: string;
        SECRET_KEY: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}