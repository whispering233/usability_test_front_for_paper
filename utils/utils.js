var AipNlpClient = require("@/aip-node-sdk-2.4.5").nlp;
				
// 设置APPID/AK/SK
const APP_ID = "25817387";
const API_KEY = "vLkfgN8OMFHGKtX8hha4ZFbV";
const SECRET_KEY = "tsUUPaK7BIs6KaTHfV2bfaCnGEIUiGn9";

// 新建一个对象，建议只保存一个对象调用服务接口
const client = new AipNlpClient(APP_ID, API_KEY, SECRET_KEY);
			
function summarize (content, maxSummaryLen=200, title="") {
	var options = {};
	options["title"] = title;
	client.newsSummary(content, maxSummaryLen, options).then(function(res){
		return JSON.stringify(res).summary;
	}).catch(function(err){
		console.log(err)
	})
}

export{
	client
}