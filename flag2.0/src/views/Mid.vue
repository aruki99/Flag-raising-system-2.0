<template>
	<div>
	<a id="anniu" class="show"> 
	 <router-link to="End" >升旗结束</router-link>
	 </a>
	 <img src="../img/cc.jpg" id="bj3" alt="">
	<img src="../img/tai.png" alt="" id="tai2">
	<img src="../img/qi.png" alt="" id="qi2" class="move">
	<audio src="../img/国歌.mp3" id="myAudio"></audio>
	</div>
	<router-view/>
</template>

<script>
</script>

 <style>

		#anniu{
                z-index: 99;
                margin: 0px 0px;
                color: white;
                text-align: center;
                line-height: 55px;
                font-size: 37px;
                text-decoration: none;
                border-radius: 63px;
                width: 200px;
                height: 56px;
                background-color: #FFE53B;
                background-image: linear-gradient(
            151deg
            , #FFE53B 0%, #FF2525 90%);
                position: absolute;
                top: 55%;
                left: -4000px;
                display: none;
                /* -webkit-animation-fill-mode: forwards; */
                animation-fill-mode: forwards;
				
				 display:block !important;
				
				 cursor: pointer;
				
         }
 
		 #bj3{
			 top: 0px;
			 left: 0px;
			 background-size: 100% 100%;
			 height: 100%;
			 position: fixed;
			 width: 100%;
		 }
	
         #qi2 {
            z-index: 8;
                margin: auto;
                width: 80px;
                height: 50px;
                position: absolute;
                left: 51.5%;
                bottom: 170px;
             animation-fill-mode: forwards;
			
         }
		 
		
        .move {
             animation: myfirst 43s linear;
         }
		 .show {
		      animation: mymove2 43s linear;
		  }

         
		#anniu:-webkit-any-link {
		    color: -webkit-link;
		    cursor: pointer;
		    text-decoration: underline;
		}
		
         #tai2 {
                    width: 300px;
                    height: 600px;
                    margin: auto;
                    position: absolute;
                    left: 10%;
                    bottom: 53px;
                    z-index: 7;
         }
 
	
         @keyframes myfirst{
             16% {
                 left: 51.5%;
                 bottom: 170px;
             }
 
             100% {
                 left: 51.5%;
                 bottom: 590px;
             }
         }
 
 
         @keyframes mymove2 {
 
             /*0%  {left:-1000px;top:1000px;}*/
             99% {
                 top: 55%;
                 left: -4000px;
             }
 
             100% {
                 top: 55%;
                 left: 25.5%;
             }
         }
     </style>
