
			// document.getElementById("content").addEventListener("input", function() {
			// 	document.getElementById("count").innerText = 200 - document.getElementById("content").value.length;
			// 	var check = 200 - document.getElementById("content").value.length;
			// 	console.log(check);
			// });

	$("#content").on("input",function(){
	   $("#count").text(200 - $("#content").val().lenght);
	//    $("check").val("200 - $(#content).text().lenght");
	//   console.log( $("#count").text(200 - $("#content").val().lenght));
	});		
	$.ajax({
		type: "GET",
		url: "/api/random",
		success: function (data) {
			 $("#contentQues").text(data.question.content);
			 $("#yesVote").text(data.question.yes);
			 $("#noVote").text(data.question.no);
			 $(".btn-answer").attr("data-questionId",data.question.id);
			 $(".btn-result").attr("data-questionId",data.question.id);
		},
		error:function(err){
			 console.log(err);
		}
  });
  $(".btn-result").click(function () { 
	const questionId = $(".btn-result").attr("data-questionId");       
	$.ajax({
		 type: "GET",
		 url: "/question/"+questionId,
		 success: function (data) {
			  alert("Nội dung câu hỏi: " + data.question.content + "      Yes: " + data.question.yes + "       No:" +data.question.no);

			  window.location.href = "/result/"+questionId;
		 },
		 error:function(err){
			  console.log(err);
		 }
	});
});
$(".btn-result").click(function () { 
	const questionId = $(".btn-result").attr("data-questionId");       
	$.ajax({
		 type: "GET",
		 url: "/question/"+questionId,
		 success: function (data) {
			  alert("Nội dung câu hỏi: " + data.question.content + "      Yes: " + data.question.yes + "       No:" +data.question.no);
			  
			  window.location.href = "/result/"+questionId;
		 },
		 error:function(err){
			  console.log(err);
		 }
	});
});
