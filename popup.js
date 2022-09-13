
function downloadCheckedLinks() {
	const code = `
	(function a() 
		{
			document.querySelector('body > news-app').shadowRoot.querySelector('news-article').shadowRoot.querySelector('#ampviewer > div').shadowRoot.querySelector('body > main > article > div:nth-child(4) > div > div:nth-child(1)').style.setProperty('display', 'none', 'important');
			document.querySelector('body > news-app').shadowRoot.querySelector('news-article').shadowRoot.querySelector('#ampviewer > div').shadowRoot.querySelector('body > main > article > div:nth-child(4) > div > div.paywall').style.setProperty('display', 'block', 'important');
		}
	)()`; 
	chrome.tabs.executeScript({ code }, function(result) {
		//alert('ciao');
	});	
}

function downloadCheckedLinks2() {
	const code = `
	(function b() 
		{
			document.querySelector("#article-body").style="overflow:hidden;display:inline-block !important";
			document.querySelector("#ph-paywall").style.display = 'none';
		}
	)()`; 
	chrome.tabs.executeScript({ code }, function(result) {
		//alert('ciao');
	});	
}

function winRewardsSearchs() {
	const code = `
	(async function c() 
		{
			var linksToOpen = 20;
			var myWin = [];
			
            async function delay(time) {
              return new Promise(resolve => setTimeout(resolve, time));
            };

			function makeid(length) {
			   var result           = '';
			   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			   for ( var i = 0; i < length; i++ ) {
				  result += characters.charAt(Math.floor(Math.random() * characters.length));
			   }
			   return result;
			};

			async function openNewWin(research, i)
			{
				  setTimeout(() => {
						myWin[i] = window.open('https://www.bing.com/search?q='+research, 'mypopup'+research, 'top=30, left=450, height=600, width=620, resizable=1, scrollbars=1, status=1, toolbar=0, location=1','');
						window.focus(); // Set the focus back to the current window.
						
						setTimeout(() => {
							myWin[i].close();
						}, 7000
						); 
						
				  }, 100*i
				  ); 
			};

			for (let i = 0; i < linksToOpen; i++) {
			  let search = makeid(3) +' ' +makeid(3);
			  console.log(search);
			  openNewWin(search, i);
              await delay(250);
			}
		}
	)()`; 
	chrome.tabs.executeScript({ code }, function(result) {
		
	});	
}

function winRewardsOpenLinks() {
	const code = `
	(function d() 
		{
			document.querySelector("#daily-sets > mee-card-group:nth-child(7) > div > mee-card:nth-child(2) > div > card-content > mee-rewards-daily-set-item-content > div > div.actionLink.x-hidden-vp1 > a > span > ng-transclude").click();
			document.querySelector("#daily-sets > mee-card-group:nth-child(7) > div > mee-card:nth-child(3) > div > card-content > mee-rewards-daily-set-item-content > div > div.actionLink.x-hidden-vp1 > a > span > ng-transclude").click();
			document.querySelector("#more-activities > div > mee-card.ng-scope.ng-isolate-scope.c-card.f-double > div > card-content > mee-rewards-more-activities-card-item > div > div.actionLink.x-hidden-vp1 > a > span > ng-transclude").click();
			document.querySelector("#more-activities > div > mee-card.ng-scope.ng-isolate-scope.c-card.f-double > div > card-content > mee-rewards-more-activities-card-item > div > div.actionLink.x-hidden-vp1 > a > span > ng-transclude").click();
			document.querySelector("#more-activities > div > mee-card:nth-child(2) > div > card-content > mee-rewards-more-activities-card-item > div > div.actionLink.x-hidden-vp1 > a > span > ng-transclude").click();
			document.querySelector("#more-activities > div > mee-card:nth-child(3) > div > card-content > mee-rewards-more-activities-card-item > div > div.actionLink.x-hidden-vp1 > a > span > ng-transclude").click();
			document.querySelector("#daily-sets > mee-card-group:nth-child(7) > div > mee-card.ng-scope.ng-isolate-scope.c-card.f-double > div > card-content > mee-rewards-daily-set-item-content > div > div.actionLink.x-hidden-vp1 > a > span > ng-transclude").click();
			
		}
	)()`; 
	chrome.tabs.executeScript({ code }, function(result) {
		
	});	
}


window.onload = function() {
  document.getElementById('clearPaywall').onclick = downloadCheckedLinks;
  document.getElementById('clearPaywall2').onclick = downloadCheckedLinks2;
  document.getElementById('clearPaywall3').onclick = winRewardsSearchs;
  document.getElementById('clearPaywall4').onclick = winRewardsOpenLinks;
};
