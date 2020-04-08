//main.js
import restrData from 'restraunt-data.js';
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
        restraunts: restrData // from restraunts-data.js
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
