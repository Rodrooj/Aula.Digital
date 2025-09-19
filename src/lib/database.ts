import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'BD_Conteudos');

export interface Tutorial {
  id: number;
  titulo: string;
  descricao: string;
  link_conteudo: string;
  tipo: 'texto' | 'video';
  data_publicacao: string;
}

export function getDatabase(): Promise<sqlite3.Database> {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  });
}

export function getTutorials(): Promise<Tutorial[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await getDatabase();
      db.all('SELECT * FROM Tutoriais ORDER BY data_publicacao DESC', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows as Tutorial[]);
        }
        db.close();
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function getTutorialById(id: number): Promise<Tutorial | null> {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await getDatabase();
      db.get('SELECT * FROM Tutoriais WHERE id = ?', [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row as Tutorial || null);
        }
        db.close();
      });
    } catch (error) {
      reject(error);
    }
  });
}
