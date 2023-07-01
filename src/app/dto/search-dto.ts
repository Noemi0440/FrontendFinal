export class SearchDTO {

  private search : String;

  private noPag : number;

  public getSearch(){
    return this.search;
  }

  public setSearch(search : String) : String{
    return this.search = search;
  }

  public getNoPag(){
    return this.noPag;
  }

  public setNoPag(noPag : number) : number{
    return this.noPag = noPag;
  }

}
