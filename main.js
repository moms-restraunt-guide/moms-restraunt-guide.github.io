//main.js
    const date = new Date();
    const dateDayId = date.getDay();
    const shuffle = function (array) {

	  let currentIndex = array.length;
	  let temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }

	  return array;

    };

	function sortByProperty(property){  
	   return function(a,b){  
    	  if(a[property] > b[property])  
    	     return 1;  
    	  else if(a[property] < b[property])  
    	     return -1;  
  
    	  return 0;  
   		}  
	}

    const table = new Vue({
      el: '#table',
      data: {
        restraunts: [
			 {
			   "name": "Wendy's",
			   "location": "Benton",
			   "deal": "4 for $4",
			   "dow": "Everyday",
			   "dow_id": 8
			 },
			 {
			   "name": "Red Robin",
			   "location": "Benton",
			   "deal": "$1.99 Kid's meal",
			   "dow": "Tuesday",
			   "dow_id": 2
			 },
			 {
			   "name": "Newk's",
			   "location": "Bryant",
			   "deal": "$1.99 Kid's meal w/ purchase of adult meal",
			   "dow": "Everyday",
			   "dow_id": 8
			 },
			 {
			   "name": "Dickies",
			   "location": "Bryant",
			   "deal": "Free Kid's meal w/ purchase of adult meal",
			   "dow": "Sunday",
			   "dow_id": 0
			 },
			 {
			   "name": "Burger King",
			   "location": " All",
			   "deal": " $1 8pc Chicken Nuggets",
			   "dow": " Everyday",
			   "dow_id": 8
			 },
			 {
			   "name": "Burger King",
			   "location": " All",
			   "deal": " 5 for $4",
			   "dow": " Everyday",
			   "dow_id": 8
			 },
			 {
			   "name": "McDonald's",
			   "location": " Bryant",
			   "deal": " 4 for $4",
			   "dow": " Everyday",
			   "dow_id": 8
			 }
	    ]
      },
      computed: {
          dealList() {
            return shuffle(this.restraunts.filter(item => item.dow_id === dateDayId || item.dow_id === 8));
          },
          randomItem() {
            return shuffle(this.restraunts.filter(item => item.dow_id === dateDayId || item.dow_id === 8)).slice(0,1);
          },
          restrauntsSorted() {
		    return this.restraunts.sort(sortByProperty("dow_id")); //sort according to dow_id
		  },
          today(){
            return Date();
          }
      }
    })    
