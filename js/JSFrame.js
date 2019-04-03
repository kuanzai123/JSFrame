// JavaScript Document

$(function(e) {
	$('[JSModel="LoginStyle1"]').each(function(index, element) {
		var DataItem = $(element).attr("DataItem");
		if(typeof(DataItem)!="undefined")
		{
			var AttrDataStr = "";
			var AttrDate = $(element).attr("AttrData");
			if(typeof(AttrDate)!="undefined")
			{
				AttrDataStr = AttrDate;
			}
			var content = "<form " + AttrDataStr + ">";
			
			var DataItemArr=DataItem.split(",");
			$.each(DataItemArr,function(index,data){
				//alert(data);
				var DataArr=data.split("|");
				var DataStr = "";
				switch(DataArr[1].toLowerCase( ))
				{
					case "select":
						//alert("select");
						DataStr = "<label for='" + DataArr[2] + "'>" + DataArr[0] + "</label>";
						DataStr += "<select id='" + DataArr[2] + "' name='" + DataArr[2] + "'>";
						
						var option = DataArr[3].split(";");
						$.each(option,function(index,ele){
							var tmpArr = ele.split("=");
							if(typeof(tmpArr[1])!="undefined")
							{
								DataStr += "<option value='" + tmpArr[1] + "'>" + tmpArr[0] + "</option>";
							}
							else
							{
								DataStr += "<option>" + tmpArr[0] + "</option>";
							}
						});
						
						DataStr += "</select>";
					break;
					case "button":
					case "submit":
					case "reset":
						DataStr += "<input type='" + DataArr[1] + "' id='" + DataArr[2] + "' name='" + DataArr[2] + "' value='" + DataArr[0] + "' />";
					break;
					case "textarea":
						DataStr = "<label for='" + DataArr[2] + "'>" + DataArr[0] + "</label>";
						DataStr += "<textarea id='" + DataArr[2] + "' name='" + DataArr[2] + "'>";
						DataStr += "</textarea>";
					break;
					default:
						DataStr = "<label for='" + DataArr[2] + "'>" + DataArr[0] + "</label>";
						DataStr += "<input type='" + DataArr[1] + "' id='" + DataArr[2] + "' name='" + DataArr[2] + "' />";
					break;
				}
				content += DataStr;
			});
			
			content+="</form>";
			$(element).html(content);
		}
    });
}); 