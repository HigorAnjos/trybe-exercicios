interface Board {
  save(): void;
  // ...
}

// Aqui vamos compor a classe com o nosso Database: passamos um objeto
// do tipo Database para o construtor da classe.
class GenericBoard implements Board {
  // Finja que faz sentido as casas do tabuleiro serem um array de strings
  constructor(public houses: string[], protected database: Database) {}

  public save() {
    this.database.save(this.houses);
  }
}

class ChessBoard extends GenericBoard {
  constructor(houses: string[], database: Database) {
    super(houses, database);
    // Implementação específica de um tabuleiro de xadrez
  }
}

interface Database {
  save(content: any): void;
  // ...
}
interface MySQLConnection {
  name:string;

  query(query:string): void;
}

class MySQLDatabase implements Database {
  private connection: MySQLConnection; // Uma conexão fictícia com o banco

  constructor() {
    const connection:MySQLConnection = { name: 'higor', query:(q:string) => {} }; 
    this.connection = connection;
  }
  // ...
  save(content: any) {
    // Uma query fictícia para salvar o conteúdo no banco
    this.connection.query(`INSERT INTO table_name VALUES (${content})`);
  }
}

const db = new MySQLDatabase();
const board = new ChessBoard(['A1', 'A2', 'B1', 'B2'], db);
board.save();