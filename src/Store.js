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

		
			const response = await fetch("http://api.mediastack.com/v1/news?access_key=70fbdb9d286e3abc9a7fb88db2dc8d60");
			const responseInJson = await response.json();
			runInAction(()=>{
				this.articles =responseInJson.data;

			})	
	
		}
	}


	export  const countryNewsStore = new NewsStore();
