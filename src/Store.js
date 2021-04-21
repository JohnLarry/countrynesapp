import { action, makeObservable, observable, runInAction } from "mobx";

//mobx news store that stores the artice fetched via api request
export class NewsStore{

	articles=[];
	constructor(){
		makeObservable(this,
			{
				articles:observable,
				loadNewsArticles:action,
			},);
	}
	//loadNews article is mobx action that makes the
	// api request and set the state
	
	async loadNewsArticles(){

		
			const response = await fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=cad9015fba4e455ead21f54b6de73761");
			const responseInJson = await response.json();
			runInAction(()=>{
				this.articles =responseInJson.articles;

			})	
	
		}
	}


	export  const countryNewsStore = new NewsStore();