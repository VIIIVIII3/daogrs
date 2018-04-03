$(document).ready(function(){
	$('.video-thumbnail').on('click',function(e){
		var videoUrl=$(e.currentTarget).attr('video-source')||null;
		if(videoUrl){
			createVideoPopup(videoUrl)
		}else{
			console.error('该视频缩略图没有video-source 属性，所以无法播放视频')
		}
	})
	function createVideoPopup(videoUrl){
		var Videomodle=$("<div id='videoPopup'></div>");
		var video_close=$("<div id='videoPopup-close'></div>")
		var video=$('<video></video>');
		video.attr({
			"src":videoUrl,
			"controls":"controls",
			"autoplay":"autoplay"
		})
		video.text('本浏览器不支持HTML5 视频')
		Videomodle.append(video_close);
		Videomodle.append(video);
		$('body').append(Videomodle);
		$('body').toggleClass('menu-open')
	}
	$(document).on('click','#videoPopup-close',function(){
		$('#videoPopup').remove();
		$('body').toggleClass('menu-open')
	})
})