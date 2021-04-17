import { action, makeObservable, observable, runInAction } from "mobx";

export class NewsStore{

	articles=[];
	constructor(){
		makeObservable(this,
			{
				articles:observable,
				loadNewsArticles:action,
			},);
	}
	async loadNewsArticles(){

		
			const response = await fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=cad9015fba4e455ead21f54b6de73761");
			const responseInJson = await response.json();
			runInAction(()=>{
				this.articles =responseInJson.articles;

			})	
			




		/* const newsItem = {
			source:{
				name:response.source.name
				,
			},
			author:response.author,
			title:response.title,
			description:response.description,
			url:response.url,
			urlToImage:response.url,
			publishedAt:response.publishedAt,
			content:response.content
		}
		this.articles.push(newsItem); */



		}
	}


	export  const countryNewsStore = new NewsStore();