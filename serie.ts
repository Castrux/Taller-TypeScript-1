class Serie {
  private _id: number;
  private _titulo: string;
  private _canal: string;
  private _genero: string;
  private _temporadas: number;
  private _episodios: number;
  private _sinopsis: string;
  
  constructor(id: number, titulo: string, canal: string, genero: string, temporadas: number, episodios: number, sinopsis: string) {
    this._id = id;
    this._titulo = titulo;
    this._canal = canal
    this._genero = genero;
    this._temporadas = temporadas;
    this._episodios = episodios;
    this._sinopsis = sinopsis;
  }
  
  // Getters y Setters
  
  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get titulo(): string {
    return this._titulo;
  }
  
  set titulo(titulo: string) {
    this._titulo = titulo;
  }

  get canal(): string {
    return this._canal;
  }

  set canal(canal: string) {
    this._canal = canal;
  }
  
  get genero(): string {
    return this._genero;
  }
  
  set genero(genero: string) {
    this._genero = genero;
  }
  
  get temporadas(): number {
    return this._temporadas;
  }
  
  set temporadas(temporadas: number) {
    this._temporadas = temporadas;
  }
  
  get episodios(): number {
    return this._episodios;
  }
  
  set episodios(episodios: number) {
    this._episodios = episodios;
  }
  
  get sinopsis(): string {
    return this._sinopsis;
  }
  
  set sinopsis(sinopsis: string) {
    this._sinopsis = sinopsis;
  }
}
export {Serie}
