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
			
			//using api endpoint? uncomment the two lines below;
			//const response = await fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=your_news_api_key");
			//const responseInJson = await response.json();
		
			//stactic data was used because newsapi doesn't support cross origin access for free subscribers
			runInAction(()=>{
				//uncomment the next line below and removed the static data if you used api endpoint above
				//this.articles = responseInJson.artices;
				this.articles =[{"source":{"id":null,"name":"The Tribune India"},"author":"Tribune India","title":"NASA has announced two missions to Venus by 2030; here's why that's exciting - The Tribune","description":"The two ambitious missions will launch between 2028 and 2030","url":"https://www.tribuneindia.com/news/schools/nasa-has-announced-two-missions-to-venus-by-2030-heres-why-thats-exciting-264335","urlToImage":"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/2021_6$largeimg_1734844955.jpg","publishedAt":"2021-06-06T10:08:00Z","content":"Nottingham, June 6\r\nFor decades, the exploration of our solar system left one of our neighbouring planets, Venus, largely unexplored. Now, things are about to change.\r\nIn the latest announcement from… [+5654 chars]"},{"source":{"id":null,"name":"Graphene-Info"},"author":"Roni Peleg","title":"Researchers use HPC and experiment to refine graphene production - Graphene-Info","description":null,"url":"https://www.graphene-info.com/researchers-use-hpc-and-experiment-refine-graphene-production","urlToImage":null,"publishedAt":"2021-06-06T09:25:57Z","content":"An international team of researchers, in an effort to produce cheap, defect-free graphene in larger quantities, have used GCS HPC resources to develop more efficient methods for producing graphene at… [+4622 chars]"},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"ANI","title":"SpaceX cargo Dragon en route to ISS seen flying in daytime. See pics - ​SpaceX Dragon flying in orbital - Economic Times","description":"Recently launched SpaceX Dragon resupply spacecraft en route to International Space Station was seen flying into orbital in the daytime on Saturday morning. ​SpaceX Dragon flying in orbital","url":"https://economictimes.indiatimes.com/news/science/spacex-cargo-dragon-en-route-to-iss-seen-flying-in-daytime-see-pics/spacex-dragon-flying-in-orbital/slideshow/83279693.cms","urlToImage":"https://img.etimg.com/thumb/msid-83279693,width-1070,height-580,overlay-economictimes/photo.jpg","publishedAt":"2021-06-06T08:44:00Z","content":"The spacecraft carried the 7,300-pound (3,300-kilogram) shipment -- which also includes fresh lemons, onions, avocados, and cherry tomatoes for the station's seven astronauts -- should arrive Saturda… [+267 chars]"},{"source":{"id":null,"name":"Guardian Nigeria"},"author":null,"title":"Insecurity: CAN rallies support for Uzodinma | The Guardian Nigeria News - Nigeria and World News — Nigeria — The Guardian Nigeria News – Nigeria and World News - Guardian","description":"Members of the Christian Association of Nigeria (CAN) in Imo have called on politicians in the state to support Governor Hope Uzodimma’s efforts to rid the state of security challenges.","url":"https://guardian.ng/news/insecurity-can-rallies-support-for-uzodinma/","urlToImage":"https://guardian.ng/wp-content/uploads/2020/09/Hope-Uzodinma-1-778x570.jpg","publishedAt":"2021-06-06T08:15:00Z","content":"Hope Uzodimma. Photo; TWITTER/HOPEUZODINMA1\r\nMembers of the Christian Association of Nigeria (CAN) in Imo have called on politicians in the state to support Governor Hope Uzodimmas efforts to rid the… [+2432 chars]"},{"source":{"id":null,"name":"The Guardian"},"author":"Zoë Corbyn","title":"Microsoft’s Kate Crawford: ‘AI is neither artificial nor intelligent’ - The Guardian","description":"The AI researcher on how natural resources and human labour drive machine learning and the regressive stereotypes that are baked into its algorithms","url":"https://amp.theguardian.com/technology/2021/jun/06/microsofts-kate-crawford-ai-is-neither-artificial-nor-intelligent","urlToImage":null,"publishedAt":"2021-06-06T08:00:00Z","content":"Artificial intelligence (AI)The AI researcher on how natural resources and human labour drive machine learning and the regressive stereotypes that are baked into its algorithms \r\nKate Crawford studie… [+8593 chars]"},{"source":{"id":null,"name":"Thecable.ng"},"author":"by  Olufemi Atoyebi","title":"Gunmen kill 15 in overnight attack on Oyo community - TheCable","description":"At least 15 people were allegedly killed when gunmen attacked Igangan, a town in Oyo state located in Ibarapa area of the state.Advertisement The area has been under the spotlight","url":"https://www.thecable.ng/gunmen-kill-15-in-oyo-community","urlToImage":"https://f5p3e9e4.stackpathcdn.com/wp-content/uploads/2021/03/gunmen.jpeg","publishedAt":"2021-06-06T07:45:11Z","content":"At least 15 people were allegedly killed when gunmen attacked Igangan, a town in Oyo state located in Ibarapa area of the state.\r\nThe area has been under the spotlight for more than five years with c… [+1649 chars]"},{"source":{"id":"al-jazeera-english","name":"Al Jazeera English"},"author":"Al Jazeera","title":"El Salvador President Bukele wants Bitcoin as legal tender - Al Jazeera English","description":"The move, if approved, would make El Salvador the first country to formally accept cryptocurrency as legal money.","url":"https://www.aljazeera.com/news/2021/6/6/el-salvadors-bukele-to-propose-making-bitcoin-legal-tender","urlToImage":"https://www.aljazeera.com/wp-content/uploads/2021/06/2021-05-20T154747Z_1174976389_RC2RJN9KXJ40_RTRMADP_3_CRYPTO-CURRENCY-e1622969242341.jpg?resize=1200%2C630","publishedAt":"2021-06-06T07:39:13Z","content":"El Salvador may become the first country to make Bitcoin legal tender after President Nayib Bukele announced he would soon propose a bill that could transform the remittance-dependent economy.\r\nThe m… [+1938 chars]"},{"source":{"id":null,"name":"Spaceflight Now"},"author":null,"title":"SpaceX delivers for SiriusXM with successful midnight hour launch – Spaceflight Now - Spaceflight Now","description":null,"url":"https://spaceflightnow.com/2021/06/06/spacex-delivers-for-siriusxm-with-successful-midnight-hour-launch/","urlToImage":null,"publishedAt":"2021-06-06T07:05:41Z","content":"Hauling SiriusXM’s SXM 8 radio broadcasting satellite, a SpaceX Falcon 9 rocket lifts off from Cape Canaveral Space Force Station at 12:26 a.m. EDT (0426 GMT) Sunday. Credit: Stephen Clark / Spacefli… [+7441 chars]"},{"source":{"id":null,"name":"Football.London"},"author":"Joe Doyle, Bobby Vincent","title":"Arsenal news and transfers live: Emi Buendia setback, Edu's next five moves, Guendouzi latest - Football.London","description":"Keep up to date with all the latest Arsenal transfer news, views and rumours in our live daily blog","url":"https://www.football.london/arsenal-fc/transfer-news/arsenal-news-transfers-live-buendia-20751247","urlToImage":"https://i2-prod.football.london/incoming/article20747783.ece/ALTERNATES/s1200/0_GettyImages-1229769425.jpg","publishedAt":"2021-06-06T06:33:46Z","content":"Welcome to our football.london live Arsenal transfer blog. \r\nEdu and Mikel Arteta are already hard at work as they look to overhaul the Arsenal squad ahead of next season.\r\nIt was a disappointing cam… [+688 chars]"},{"source":{"id":null,"name":"Thecable.ng"},"author":"by  Festus Adedayo","title":"Buhari: Tweeting Asaba massacre on Road to Rwanda - TheCable","description":"Like a suicide bomber ready to sacrifice his life, I slid into the Nigerian war theatre last week. No, not Northeast Nigeria, where kaffir soldiers are busy bombing Boko Haram faithful; nor","url":"https://www.thecable.ng/?p=567971","urlToImage":"https://f5p3e9e4.stackpathcdn.com/wp-content/uploads/2021/06/buhari-ipad.jpg","publishedAt":"2021-06-06T06:24:00Z","content":"Like a suicide bomber ready to sacrifice his life, I slid into the Nigerian war theatre last week. No, not Northeast Nigeria, where kaffir soldiers are busy bombing Boko Haram faithful; nor Northwest… [+16950 chars]"},{"source":{"id":null,"name":"Thecable.ng"},"author":"by  Jemilat Nasiru","title":"TB Joshua is dead -- two months after suffering a stroke - TheCable","description":"TB Joshua, founder of the Synagogue Church of All Nations (SCOAN), is dead. Advertisement He had stroke two months ago and was flown by air ambulance to Turkey for treatment, TheCable","url":"https://www.thecable.ng/breaking-tb-joshua-is-dead","urlToImage":"https://f5p3e9e4.stackpathcdn.com/wp-content/uploads/2016/11/TB-joshua.jpg","publishedAt":"2021-06-06T05:55:00Z","content":"TB Joshua, founder of the Synagogue Church of All Nations (SCOAN), is dead. \r\nHe had stroke two months ago and was flown by air ambulance to Turkey for treatment, TheCable understands.\r\nThe controver… [+1406 chars]"},{"source":{"id":null,"name":"THISDAY Newspapers"},"author":null,"title":"2023: Why Matawalle May Not Defect to APC for Now - THISDAY Newspapers","description":"•Already proposes June 12 •Sacks all commissioners to accommodate APC in new cabinet Chuks Okocha in Abuja With the 2023 political permutations in focus, Governor Bello Matawalle of Zamfara State m…","url":"https://www.thisdaylive.com/index.php/2021/06/06/2023-why-matawalle-may-not-defect-to-apc-for-now/","urlToImage":"https://storage.googleapis.com/thisday-846548948316-wp-data/wp-media/2020/06/de9f17e6-bello-matawalle.jpg","publishedAt":"2021-06-06T05:45:22Z","content":"Already proposes June 12Sacks all commissioners to accommodate APC in new cabinet\r\nChuks Okocha in Abuja\r\nWith the 2023 political permutations in focus, Governor Bello Matawalle of Zamfara State migh… [+5847 chars]"},{"source":{"id":null,"name":"Leadership.ng"},"author":"Osa Okhomina","title":"Relief In Niger Delta As Tompolo Withdraws Ultimatum On NDDC Board - LEADERSHIP NEWS","description":"There were sighs of relief among stakeholders in the Niger Delta region yesterday following the decision of a former militant leader, High Chief Government Ekpemupolo also known as Tompolo, to call off his threats and ultimatum to the federal government to im…","url":"https://leadership.ng/relief-in-niger-delta-as-tompolo-withdraws-ultimatum-on-nddc-board/","urlToImage":"https://leadership.ng/wp-content/uploads/2021/06/tompolo.jpg","publishedAt":"2021-06-06T05:21:15Z","content":"There were sighs of relief among stakeholders in the Niger Delta region yesterday following the decision of a former militant leader, High Chief Government Ekpemupolo also known as Tompolo, to call o… [+3458 chars]"},{"source":{"id":null,"name":"Football.London"},"author":"George Smith","title":"The Pep Guardiola verdict that should convince Marina Granovskaia to seal dream Chelsea transfer - Football.London","description":"After winning the UEFA Champions League last weekend, Chelsea will be looking to take that next step next season domestically in a bid to challenge for the Premier League title","url":"https://www.football.london/chelsea-fc/transfer-news/pep-guardiola-chelsea-dream-transfer-20750957","urlToImage":"https://i2-prod.football.london/arsenal-fc/transfer-news/article20682963.ece/ALTERNATES/s1200/0_Screenshot-2021-05-26-at-145358.png","publishedAt":"2021-06-06T05:00:00Z","content":"After laying their hands on the UEFA Champions League for the first time in nine years last weekend, there is no shortage of optimism and excitement connected with Chelsea ahead of next season.\r\nThe … [+4480 chars]"},{"source":{"id":null,"name":"Mirror Online"},"author":"Sarah Rendell","title":"Man Utd transfer round-up: Kieran Trippier keen on move as Jadon Sancho talks begin - The Mirror","description":"Premier League side Manchester United are edging closer to signing Borussia Dortmund and England midfielder Jadon Sancho who they have wanted to secure all season","url":"https://www.mirror.co.uk/sport/football/news/man-utd-transfer-round-up-24257266","urlToImage":"https://i2-prod.mirror.co.uk/incoming/article24220114.ece/ALTERNATES/s1200/0_Villarreal-CF-v-Manchester-United-UEFA-Europa-League-Final.jpg","publishedAt":"2021-06-06T04:15:00Z","content":"Manchester United have had a solid season but if they want to secure silverware they will need to make some changes to their squad.\r\nThey have already managed to bag star player Edinson Cavani on a o… [+2676 chars]"},{"source":{"id":null,"name":"THISDAY Newspapers"},"author":null,"title":"AU's Subsidiarity Rule and Unconstitutional Change of Government: The Cases of Chad and Mali - THISDAY Newspapers","description":"By Bola A. Akinterinwa The Principle of Subsidiarity (PoS) is of multidisciplinary application in international relations. Its importance is largely explained by the fact that it deals essentially …","url":"https://www.thisdaylive.com/index.php/2021/06/06/aus-subsidiarity-rule-and-unconstitutional-change-of-government-the-cases-of-chad-and-mali/","urlToImage":"https://storage.googleapis.com/thisday-846548948316-wp-data/wp-media/f2fa3bc0-moussa-faki.jpg","publishedAt":"2021-06-06T02:49:48Z","content":"By Bola A. Akinterinwa\r\nThe Principle of Subsidiarity (PoS) is of multidisciplinary application in international relations. Its importance is largely explained by the fact that it deals essentially w… [+18199 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"By His stripes we are healed (2) - Vanguard","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMiQ2h0dHBzOi8vd3d3LnZhbmd1YXJkbmdyLmNvbS8yMDIxLzA2L2J5LWhpcy1zdHJpcGVzLXdlLWFyZS1oZWFsZWQtMi_SAUlodHRwczovL3d3dy52YW5ndWFyZG5nci5jb20vMjAyMS8wNi9ieS1oaXMtc3RyaXBlcy13ZS1hcmUtaGVhbGVkLTIvP2FtcD0x?oc=5","urlToImage":null,"publishedAt":"2021-06-06T01:46:00Z","content":null},{"source":{"id":null,"name":"Yahoo Entertainment"},"author":"Rebecca Falconer","title":"United to require new staff to show proof of COVID vaccine - Yahoo News","description":"United Airlines will from June 15 require all new hires based in the U.S. to show confirmation that they've been vaccinated against COVID-19, CNBC first...","url":"https://news.yahoo.com/united-require-staff-show-proof-010808196.html","urlToImage":"https://s.yimg.com/uu/api/res/1.2/ysCkSWkC9wdRH4j.Swxw3w--~B/aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/axios_articles_623/c17999ad5384b07aaf8b9ebb4cb81a85","publishedAt":"2021-06-06T01:18:10Z","content":"Security was tight overnight Friday in Hong Kong,as police locked down a park that hosts an annual vigil for the 1989 Tiananmen Square crackdown on pro-democracy protesters.The vigil is usually the w… [+1549 chars]"},{"source":{"id":null,"name":"The Punch"},"author":"Chukwuemeka Fred Agbata Jnr","title":"Time to solve electricity blackout menace - Punch Newspapers","description":null,"url":"https://punchng.com/time-to-solve-electricity-blackout-menace/","urlToImage":"https://cdn.punchng.com/wp-content/uploads/2020/05/31173538/Chukwuemeka-Fred-Agbata1.jpg","publishedAt":"2021-06-05T23:29:21Z","content":"Growing up on the streets of Olodi Apapa in Lagos state, meant that the phrase Up Nepa was one that residents would chorus consciously and unconsciously every now and then, whenever darkness suddenly… [+6061 chars]"},{"source":{"id":null,"name":"Eminetra.com"},"author":"bernardblack","title":"United requires new employees to present proof of Covid vaccine following Delta - Eminetra.com","description":"United Airlines' Boeing 777-200ER will be towed and American Airlines' Boeing 737 will depart from O'Hare International Airport in Chicago, Illinois.Kamil Kurzazinski | ReutersUnited Airlines This mon","url":"https://eminetra.com/united-requires-new-employees-to-present-proof-of-covid-vaccine-following-delta/582921/","urlToImage":"https://image.cnbcfm.com/api/v1/image/106843458-16139962302021-02-22t001703z_523322349_rc2cxl96xvw7_rtrmadp_0_boeing-777-japan.jpeg?v=1613996277","publishedAt":"2021-06-05T23:10:46Z","content":"United Airlines This month, new employees will be required to prove that they have been vaccinated against the new coronavirus. Delta Air Lines..\r\nUnder the new rules, external candidates who have be… [+1138 chars]"}];

			})	
	
		}
	}


	export  const countryNewsStore = new NewsStore();
