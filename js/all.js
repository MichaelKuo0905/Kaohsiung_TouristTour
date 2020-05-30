//************ AJAX get string and tranfer it into array to read  */ 

var xhr = new XMLHttpRequest();

xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);

xhr.send(null);

// 由於非同步的關係 函式只有在接收資料完畢才開始執行
xhr.onload = function () {
    var callback;
    callback = JSON.parse(xhr.responseText);
    // var redzone="三民區"
    // var purplezone="苓雅區"
    // var yellowzone="新興區"
    // var bluezone="鹽埕區"
    var red=document.querySelector('.red');
    var butul=document.querySelector('.HotList');
    var zonename=document.querySelector('.container h1');
    var select=document.querySelector('.optionlist');
    var list=document.querySelector('.containerlist');


    function updatelist(e){
            var  selectzone=e.target.value;
            console.log(selectzone);
            var str="";
            var totallength=callback.result.records.length;
            zonename.textContent=selectzone;
            for(var i=0;i<totallength;i++){
                if(callback.result.records[i].Zone==selectzone){
                   str+='<div class="listitem"><ul><img class=touristimg src="'+callback.result.records[i].Picture1+'" alt=""><div class="NameandZone"><p style="font-size:large; padding-left: 20px;">'+callback.result.records[i].Name+'</p><p style="font-size: small; padding-right: 30px;">'+callback.result.records[i].Zone+'</p></div>  <li> <img src="img/icons_clock.png">'+callback.result.records[i].Opentime+'</li><li><img src="img/icons_pin.png">'+callback.result.records[i].Add+'</li><div  class="bottomInfo"><li><img src="img/icons_phone.png">'+callback.result.records[i].Tel+'</li><li><img src="img/icons_tag.png" style="padding-right:5px;">歡迎參觀</li></div></ul></div>'  
                }

            }
            
        
        list.innerHTML=str;

    }
    select.addEventListener('change',updatelist,false);
    // red.addEventListener('click',updatelist,false);
    butul.addEventListener('click',updatelist,false);    
}



















