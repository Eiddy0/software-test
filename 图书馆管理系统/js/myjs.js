$(function(){
	$("#inputbook").on("click",function(event){
		$("#AddBook>form").show();
		$("#FindBook>form").hide();
		$("#DeleteBook>form").hide();
		$("#ChangeBook>.chg").hide();
		$("#AddBor>form").hide();
		$("#FindBor>form").hide();
		$("#DeleteBor>form").hide();
		$("#ChangeBor>.chg").hide();
	});
	$("#findbook").on("click",function(event){
		$("#AddBook>form").hide();
		$("#FindBook>form").fadeIn(100);
		$("#DeleteBook>form").hide();
		$("#ChangeBook>.chg").hide();
		$("#AddBor>form").hide();
		$("#FindBor>form").hide();
		$("#DeleteBor>form").hide();
		$("#ChangeBor>.chg").hide();
	});
	$("#deletebook").on("click",function(event){
		$("#AddBook>form").hide();
		$("#FindBook>form").hide();
		$("#DeleteBook>form").fadeIn(100);
		$("#ChangeBook>.chg").hide();
		$("#AddBor>form").hide();
		$("#FindBor>form").hide();
		$("#DeleteBor>form").hide();
		$("#ChangeBor>.chg").hide();
	});
	$("#changebook").on("click",function(event){
		$("#AddBook>form").hide();
		$("#FindBook>form").hide();
		$("#DeleteBook>form").hide();
		$("#ChangeBook>.chg").fadeIn(100);
		$("#AddBor>form").hide();
		$("#FindBor>form").hide();
		$("#DeleteBor>form").hide();
		$("#ChangeBor>.chg").hide();
	});
	$("#allBook").on("click",function(event){
		$("#AddBook>form").hide();
		$("#FindBook>form").hide();
		$("#DeleteBook>form").hide();
		$("#ChangeBook>.chg").hide();
		$("#AddBor>form").hide();
		$("#FindBor>form").hide();
		$("#DeleteBor>form").hide();
		$("#ChangeBor>.chg").hide();
		var local=getBookDate();
		loadbook(local);
	});
	$("#outputBook").on("click",function(event){
		var content =getBookDate();
		var Infcontent = JSON.stringify(content);
		downLoadBook(Infcontent);
		$("#InformCont").empty();
		$("#InformCont").prepend("图书信息已成功导出！");
	});
	$("#outputBor").on("click",function(event){
		var content =getBorDate();
		var Infcontent = JSON.stringify(content);
		downLoadBor(Infcontent);
		$("#InformCont").empty();
		$("#InformCont").prepend("借阅信息已成功导出！");
	});
    $('#loadfileBook').on("click",function(event){
        $('#bookData').click();
    });
    $('#loadfileBor').on("click",function(event){
        $('#borData').click();
    });
    $("#inputbor").on("click",function(event){
		$("#AddBook>form").show();
		$("#FindBook>form").hide();
		$("#DeleteBook>form").hide();
		$("#ChangeBook>.chg").hide();
		$("#AddBor>form").fadeIn(100);
		$("#FindBor>form").hide();
		$("#DeleteBor>form").hide();
		$("#ChangeBor>.chg").hide();
	});
	$("#findbor").on("click",function(event){
		$("#AddBook>form").hide();
		$("#FindBook>form").hide();
		$("#DeleteBook>form").hide();
		$("#ChangeBook>.chg").hide();
		$("#AddBor>form").hide();
		$("#FindBor>form").fadeIn(100);
		$("#DeleteBor>form").hide();
		$("#ChangeBor>.chg").hide();
	});
	$("#deletebor").on("click",function(event){
		$("#AddBook>form").hide();
		$("#FindBook>form").hide();
		$("#DeleteBook>form").hide();
		$("#ChangeBook>.chg").hide();
		$("#AddBor>form").hide();
		$("#FindBor>form").hide();
		$("#DeleteBor>form").fadeIn(100);
		$("#ChangeBor>.chg").hide();
	});
	$("#changebor").on("click",function(event){
		$("#AddBook>form").hide();
		$("#FindBook>form").hide();
		$("#DeleteBook>form").hide();
		$("#ChangeBook>.chg").hide();
		$("#AddBor>form").hide();
		$("#FindBor>form").hide();
		$("#DeleteBor>form").hide();
		$("#ChangeBor>.chg").fadeIn(100);
	});
	$("#allBor").on("click",function(event){
		$("#AddBook>form").hide();
		$("#FindBook>form").hide();
		$("#DeleteBook>form").hide();
		$("#ChangeBook>.chg").hide();
		$("#AddBor>form").hide();
		$("#FindBor>form").hide();
		$("#DeleteBor>form").hide();
		$("#ChangeBor>.chg").hide();
		var local=getBorDate();
		loadbor(local);
	});

	$('#closesys').on("click",function(){
            if(confirm('你确定退出系统吗')){
                closewin();
            }else{ }
        });
	// $("#borrow").on("click",function(event){
	// 	$("#AddBook>form").hide();
	// 	$("#FindBook>form").hide();
	// 	$("#DeleteBook>form").hide();
	// 	$("#ChangeBook>.chg").hide();
	// 	$("#B>form").fadeIn(100);		
	// });

	$(".btn-close").on("click",function(event){
			$(".btn-close").parents("form").hide();
		});

	var Bnum_Boolean = false;
	var Bname_Boolean = false;
	var Wname_Boolean = false;
	var Itime_Boolean = false;
	var Iname_Boolean = false;
	var Inum_Boolean = false;
	var Pname_Boolean = false;
	var Ptime_Boolean = false;
	var page_Boolean = false;

	var Bnum_Boolean1 = true;
	var Bname_Boolean1 = true;
	var Wname_Boolean1 = true;
	var Itime_Boolean1 = true;
	var Iname_Boolean1 = true;
	var Inum_Boolean1 = true;
	var Pname_Boolean1 = true;
	var Ptime_Boolean1 = true;
	var page_Boolean1 = true;
	$('.required+span').html("*").css("color","red" );
	$('#AddBook .Bnum').blur(function(){
		if($(".Bnum").val()<100){
			a=PrefixInteger($(".Bnum").val(), 3);
			$("#AddBook .Bnum").val(a);
		}
		
		if ((/^\d{3}$/).test($(".Bnum").val().trim())){
		    var local=getBookDate();
		    var flag=true;
			$.each(local,function(i,n) {
				if(n.Bnum == $(".Bnum").val()){
					$('#AddBook .Bnum').parents('.form-row').next().html('编号已存在').css({"color":"red","opacity":"1"});
					flag = false;
					return false;
				}
		  	});
		  	if(flag){
			    inright('#AddBook .Bnum');
			    Bnum_Boolean = true;
			}
		}
		else {
		    inwrong('#AddBook .Bnum');
		    Bnum_Boolean = false;
		}
	});
	$('#AddBook .Bname').blur(function(){
	  if ((/^.{1,}$/).test($(".Bname").val().trim())){
	    inright('#AddBook .Bname');
	    Bname_Boolean = true;
	  }else {
	    inwrong('#AddBook .Bname');
	    Bname_Boolean = false;
	  }
	});
	$('#AddBook .Wname').blur(function(){
	  if ((/^.{1,20}$/).test($("#AddBook .Wname").val().trim())){
	    inright('#AddBook .Wname');
	    Wname_Boolean = true;
	  }else {
	    inwrong('#AddBook .Wname');
	    Wname_Boolean = false;
	  }
	});
	$('#AddBook .Itime').blur(function(){
	  if ((/^.{7,}$/).test($("#AddBook .Itime").val().trim())){
	    inright('#AddBook .Itime');
	    Itime_Boolean = true;
	  }else {
	    inwrong('#AddBook .Itime');
	    Itime_Boolean = false;
	  }
	});
	$('#AddBook .Iname').blur(function(){
	  if ((/^.{1,20}$/).test($("#AddBook .Iname").val().trim())){
	    inright('#AddBook .Iname');
	    Iname_Boolean = true;
	  }else {
	    inwrong('#AddBook .Iname');
	    Iname_Boolean = false;
	  }
	});
	$('#AddBook .Inum').blur(function(){
		if($(".Inum").val()<1000){
			a=PrefixInteger($(".Inum").val(), 4);
			$("#AddBook .Inum").val(a);
		}
	  if ((/^\d{4}$/).test($("#AddBook .Inum").val().trim())){
	    inright('#AddBook .Inum');
	    Inum_Boolean = true;
	  }else {
	    inwrong('#AddBook .Inum');
	    Inum_Boolean = false;
	  }
	});
	$('#AddBook .Pname').blur(function(){
	  // if ((/^.{0,30}$/).test($("#AddBook .Pname").val().trim())){
	     inright('#AddBook .Pname');
	     // Pname_Boolean = true;
	  // }else {
	  //   inwrong('#AddBook .Pname');
	  //   Pname_Boolean = false;
	  // }
	});
	$('#AddBook .Ptime').blur(function(){
		// var now = new Date();
		// alert(now);
	 //  if ($("#AddBook .Itime").val().trim()<now){
	     inright('#AddBook .Ptime');
	     // Ptime_Boolean = true;
	 //  }else {
	 //    inwrong('#AddBook .Ptime');
	 //    Ptime_Boolean = false;
	 //  }
	});
	$('#AddBook .page').blur(function(){
	  if ((/^.{1,}$/).test($("#AddBook .page").val().trim())){
	    inright('#AddBook .page');
	    page_Boolean = true;
	  }else {
	    inwrong('#AddBook .page');
	    page_Boolean = false;
	  }
	});


//**************************change****************************************************

	
	$('#changebook-form .Bnum').change(function(){
		if($("#changebook-form .Bnum").val()<100){
			a=PrefixInteger($("#changebook-form .Bnum").val(), 3);
			$("#changebook-form .Bnum").val(a);
		}
		if ((/^\d{3}$/).test($(".Bnum").val())){
		    var local=getBookDate();
		    var flag=true;
			$.each(local,function(i,n) {
				if(n.Bnum == $(".Bnum").val()){
					$('#changebook-form .Bnum').parents('.form-row').next().html('编号已存在').css({"color":"red","opacity":"1"});
					flag = false;
					return false;
				}
		  	});
		  	if(flag){
			    inright('#changebook-form .Bnum');
			    Bnum_Boolean1 = true;
			}
		}
		else {
		    inwrong('#changebook-form .Bnum');
		    Bnum_Boolean1 = false;
		}
	});
	$('#changebook-form .Bname').change(function(){
	  if ((/^.{1,}$/).test($(".Bname").val().trim())){
	    inright('#changebook-form .Bname');
	    Bname_Boolean1 = true;
	  }else {
	    inwrong('#changebook-form .Bname');
	    Bname_Boolean1 = false;
	  }
	});
	$('#changebook-form .Wname').change(function(){
	  if ((/^.{1,20}$/).test($("#changebook-form .Wname").val().trim())){
	    inright('#changebook-form .Wname');
	    Wname_Boolean1 = true;
	  }else {
	    inwrong('#changebook-form .Wname');
	    Wname_Boolean1 = false;
	  }
	});
	$('#changebook-form .Itime').change(function(){
	  if ((/^.{7,}$/).test($("#changebook-form .Itime").val().trim())){
	    inright('#changebook-form .Itime');
	    Itime_Boolean1 = true;
	  }else {
	    inwrong('#changebook-form .Itime');
	    Itime_Boolean1 = false;
	  }
	});
	$('#changebook-form .Iname').change(function(){
	  if ((/^.{1,20}$/).test($("#changebook-form .Iname").val().trim())){
	    inright('#changebook-form .Iname');
	    Iname_Boolean1 = true;
	  }else {
	    inwrong('#changebook-form .Iname');
	    Iname_Boolean1 = false;
	  }
	});
	$('#changebook-form .Inum').change(function(){
		if($("#changebook-form .Inum").val()<1000){
			a=PrefixInteger($("#changebook-form .Inum").val(), 4);
			$("#changebook-form .Inum").val(a);
		}
		  if ((/^\d{4}$/).test($("#changebook-form .Inum").val().trim())){
		    inright('#changebook-form .Inum');
		    Inum_Boolean1 = true;
		  }else {
		    inwrong('#changebook-form .Inum');
		    Inum_Boolean1 = false;
		  }
	});
	$('#changebook-form .Pname').change(function(){
	  // if ((/^.{0,30}$/).test($("#changebook-form .Pname").val().trim())){
	     inright('#changebook-form .Pname');
	  //   Pname_Boolean1 = true;
	  // }else {
	  //   inwrong('#changebook-form .Pname');
	  //   Pname_Boolean1 = false;
	  // }
	});
	$('#changebook-form .Ptime').change(function(){
	  // if ((/^.{7,}$/).test($("#changebook-form .Ptime").val().trim())){
	    inright('#changebook-form .Ptime');
	  //   Ptime_Boolean1 = true;
	  // }else {
	  //   inwrong('#changebook-form .Ptime');
	  //   Ptime_Boolean1 = false;
	  // }
	});
	$('#changebook-form .page').change(function(){
	  if ((/^.{1,}$/).test($("#changebook-form .page").val().trim())){
	    inright('#changebook-form .page');
	    page_Boolean1 = true;
	  }else {
	    inwrong('#changebook-form .page');
	    page_Boolean1 = false;
	  }
	});

	$("#btnbook-add").on("click",function(event){
		if(Bnum_Boolean && Bname_Boolean && Wname_Boolean && Itime_Boolean && Iname_Boolean && Inum_Boolean && page_Boolean== true){
			var local=getBookDate();
		    local.push({
				Bnum:$("#AddBook .Bnum").val().trim(),
				Bname:$("#AddBook .Bname").val().trim(),
				Wname:$("#AddBook .Wname").val().trim(),
				Itime:$("#AddBook .Itime").val().trim(),
				Iname:$("#AddBook .Iname").val().trim(),
				Inum:$("#AddBook .Inum").val().trim(),
				Pname:$("#AddBook .Pname").val().trim(),
				Ptime:$("#AddBook .Ptime").val().trim(),
				page:$("#AddBook .page").val().trim(),
			});
			saveBookDate(local);
			$("#InformCont").empty();
			$("#InformCont").prepend('成功添加该书本信息！</br><div>编号：'+$("#AddBook .Bnum").val()+'</br>书名：'+$("#AddBook .Bname").val()+'</br>作者：'+$("#AddBook .Wname").val()+'</br>录入时间：'+$("#AddBook .Itime").val()+'</br>录入人员姓名：'+$("#AddBook .Iname").val()+'</br>录入人员编号：'+$("#AddBook .Inum").val()+'</br>出版社：'+$("#AddBook .Pname").val()+'</br>出版时间：'+$("#AddBook .Ptime").val()+'</br>页数：'+$("#AddBook .page").val()+'</br></br></div>');
	    	$("#AddBook .Bnum").val("");
			$("#AddBook .Bname").val("");
			$("#AddBook .Wname").val("");
			$("#AddBook .Itime").val("");
			$("#AddBook .Iname").val("");
			$("#AddBook .Inum").val("");			
			$("#AddBook .Pname").val("");			
			$("#AddBook .Ptime").val("");
			$("#AddBook .page").val("");
			$('.form-row>.lab>input+span').html("");
			$('.required+span').html("*").css("color","red" );

	    }else {
		    alert("请完善信息");
	    }
	});

	function inright(cla){
		$(cla+'+span').html("✔").css("color","green");
		$(cla).parents('.form-row').next().css({"color":"red","opacity":"0"});
	}
	function inwrong(cla){
		$(cla+'+span').html("×").css("color","red");
		$(cla).parents('.form-row').next().css({"color":"red","opacity":"1"});
	}
	
	function PrefixInteger(num, length) {
	 	return (Array(length).join('0') + num).slice(-length);
	}

	function getBookDate() {
		var  data= localStorage.getItem("bookInfor");
		if(data !==null){
			return JSON.parse(data);
		}else{
			return [];
		}
	}
	function getBorDate() {
		var  data= localStorage.getItem("borInfor");
		if(data !==null){
			return JSON.parse(data);
		}else{
			return [];
		}
	}
	function saveBookDate(data){
		localStorage.setItem("bookInfor",JSON.stringify(data));
	}
	function saveBorDate(data){
		localStorage.setItem("borInfor",JSON.stringify(data));
	}
	function eachbook(dt){
		$.each(dt,function(i,n){
		$("#InformCont").prepend("<div>编号："+n.Bnum+"</br>书名："+n.Bname+"</br>作者："+n.Wname+"</br>录入时间："+n.Itime+"</br>录入人员姓名："+n.Iname+"</br>录入人员编号："+n.Inum+"</br>出版社："+n.Pname+"</br>出版时间："+n.Ptime+"</br>页数："+n.page+"</br></br></div>");
		});
	}
	function eachbor(dt){
		$.each(dt,function(i,n){
		$("#InformCont").prepend("<div>学号："+n.Snum+"</br>姓名："+n.Sname+"</br>班级："+n.Sclass+"</br>电话："+n.Stel+"</br>寝室楼号："+n.Sroom+"</br>借阅书籍编号："+n.Sbnum+"</br>借阅书籍书名："+n.Sbname+"</br>借阅时间："+n.Sbbort+"</br>到期时间："+n.Sbendt+"</br></br></div>");
		});
	}
	function loadbook(dt){
		$("#InformCont").empty();
		eachbook(dt);
	}
	function loadbor(dt){
		$("#InformCont").empty();
		eachbor(dt);
	}

	

	function getSortFun(sortBy, order) 
		{ 
		　　var ordAlpah = (order == 'desc') ? '>' : '<'; 
		　　var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1'); 
		　　return sortFun;
		}
	function sortChinese (arr, dataLeven) { // 参数：arr 排序的数组; dataLeven 数组内的需要比较的元素属性
    /* 获取数组元素内需要比较的值 */
	    function getValue (option) { // 参数： option 数组元素
	      if (!dataLeven) return option
	      var data = option
	      dataLeven.split('.').filter(function (item) {
	        data = data[item]
	      })
	      return data + ''
	    }
	    arr.sort(function (item1, item2) {
	      return -getValue(item1).localeCompare(getValue(item2), 'zh-CN');
	    })
    }
  	function downLoadBook(content){
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "book.txt");
    $("#InformCont").empty();
    $("#InformCont").prepend("书籍信息导出成功！");
    }
    function downLoadBor(content){
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "borrow.txt");
    $("#InformCont").empty();
    $("#InformCont").prepend("借阅信息导出成功！");
    }
	function closewin(){
            var userAgent = navigator.userAgent;
		    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
		        location.href = "about:blank";
		    } else {
		        self.opener = null;
		        self.open('', '_self');
		    }
		    self.close();
        }
	$(".ch1").on("click",function(event){
		$(".iNum").show();
		$(".iName").hide();
	});
	$(".ch2").on("click",function(event){
		$(".iNum").hide();
		$(".iName").show();
	});
	$("#btnbook-find").on("click",function(event){
		var data = getBookDate();
		var flag=0;
		$("#InformCont").empty();
		$.each(data,function(i,n) {
			if(n.Bnum == $("#FindBook .inputNum").val()||n.Bname == $("#FindBook .inputName").val()){
				$("#InformCont").prepend("<div>编号："+n.Bnum+"</br>书名："+n.Bname+"</br>作者："+n.Wname+"</br>录入时间："+n.Itime+"</br>录入人员姓名："+n.Iname+"</br>录入人员编号："+n.Inum+"</br>出版社："+n.Pname+"</br>出版时间："+n.Ptime+"</br>页数："+n.page+"</br></br></div>");
				flag=1;return false;
			}
		})
		if(!flag){$("#InformCont").prepend("没有该本书！");}
	});
	
	$("#btnbook-delete").on("click",function(event){
		if(confirm("确定要删除吗？")){	
			var dt = getBookDate();
			var flag=0;
			$("#InformCont").empty();
			$.each(dt,function(i,n) {
				if(n.Bnum == $("#DeleteBook .inputNum").val()||n.Bname == $("#DeleteBook .inputName").val()){
					dt.splice(i,1);flag=1;return false;
				}
			})
			$("#DeleteBook .inputNum").val("");
			if(!flag){$("#InformCont").prepend("没有该本书！");}
			else {$("#InformCont").prepend("已删除该书本信息！");}
			saveBookDate(dt);
		}
	});

	$("#btn-change1").on("click",function(event){
		$("#InformCont").empty();
		var dt = getBookDate();
		var bnumdata=dt.map(function(o) {return o.Bnum;});
		var bnamedata=dt.map(function(o) {return o.Bname;});
		if($("#ChangeBook .inputNum").val()){
			$("#ChangeBook .inputName").val("");
			n=bnumdata.indexOf($("#ChangeBook .inputNum").val().trim())
		}else{
			$("#ChangeBook .inputNum").val("");
			n=bnamedata.indexOf($("#ChangeBook .inputName").val().trim())
		}
		if(n>-1){
			    $("#changebook-form").fadeIn(100);
				$("#changebook-form .Bnum").val(dt[n].Bnum);
				$("#changebook-form .Bname").val(dt[n].Bname);
				$("#changebook-form .Wname").val(dt[n].Wname);
				$("#changebook-form .Itime").val(dt[n].Itime);
				$("#changebook-form .Iname").val(dt[n].Iname);
				$("#changebook-form .Inum").val(dt[n].Inum);			
				$("#changebook-form .Pname").val(dt[n].Pname);			
				$("#changebook-form .Ptime").val(dt[n].Ptime);
				$("#changebook-form .page").val(dt[n].page);
				
				$('.required+span').html("*").css("color","red" );
				$("form>div>.col-md-6>span").css({"color":"red","opacity":"0"});
				$("#btn-change2").on("click",function(event){
					if(Bnum_Boolean1 && Bname_Boolean1 && Wname_Boolean1 && Itime_Boolean1 && Iname_Boolean1 && Inum_Boolean1   && page_Boolean1 == true){
						dt[n].Bnum=$("#changebook-form .Bnum").val().trim();
						dt[n].Bname=$("#changebook-form .Bname").val().trim();
						dt[n].Wname=$("#changebook-form .Wname").val().trim();
						dt[n].Itime=$("#changebook-form .Itime").val().trim();
						dt[n].Iname=$("#changebook-form .Iname").val().trim();
						dt[n].Inum=$("#changebook-form .Inum").val().trim();
						dt[n].Pname=$("#changebook-form .Pname").val().trim();
						dt[n].Ptime=$("#changebook-form .Ptime").val().trim();
						dt[n].page=$("#changebook-form .page").val().trim();
						saveBookDate(dt);
						$("#InformCont").empty();
						$("#InformCont").prepend("已修改该书籍信息！");
					    $("#btn-change2").parents("#changebook-form").hide();
					    return false;
				    }else {
					    alert("请完善信息");
					    //**********************************************************************有bug********************************************************8
				    }
				});

		}
		else{
			$("#InformCont").prepend("没有该书籍！");
		}
	});

	$("#changebook-form .btn-close").on("click",function(event){
		$("#InformCont").empty();
		$("#InformCont").prepend("修改书籍信息失败！");
	});

//**********************************************************borrow*******************************************************
    var Snum_Boolean = false;
	var Sname_Boolean = false;
	var Sclass_Boolean = false;
	var Stel_Boolean = false;
	var Sroom_Boolean = false;
	var Sbnum_Boolean = false;
	var Sbname_Boolean = false;
	var Sbbort_Boolean = false;
	var Sbendt_Boolean = false;

	var Snum_Boolean1 = true;
	var Sname_Boolean1 = true;
	var Sclass_Boolean1 = true;
	var Stel_Boolean1 = true;
	var Sroom_Boolean1 = true;
	var Sbnum_Boolean1 = true;
	var Sbname_Boolean1 = true;
	var Sbbort_Boolean1 = true;
	var Sbendt_Boolean1 = true;
	$('.required+span').html("*").css("color","red" );
	$('#AddBor .Snum').blur(function(){
		if($("#AddBor .Snum").val()<10000000){
			a=PrefixInteger($("#AddBor .Snum").val(), 8);
			$("#AddBor .Snum").val(a);
		}
		if ((/^\d{8}$/).test($(".Snum").val())){
		    var local=getBorDate();
		    var flag=true;
			$.each(local,function(i,n) {
				if(n.Snum == $("#AddBor .Snum").val().trim()){
					$('#AddBor .Snum').parents('.form-row').next().html('该同学暂时不能借书').css({"color":"red","opacity":"1"});
					flag = false;
					return false;
				}
		  	});
		  	if(flag){
			    inright('#AddBor .Snum');
			    Snum_Boolean = true;
			}
		}
		else {
		    inwrong('#AddBor .Snum');
		    Snum_Boolean = false;
		}
	});
	$('#AddBor .Sname').blur(function(){
	  if ((/^.{1,20}$/).test($("#AddBor .Sname").val().trim())){
	    inright('#AddBor .Sname');
	    Sname_Boolean = true;
	  }else {
	    inwrong('#AddBor .Sname');
	    Sname_Boolean = false;
	  }
	});
	$('#AddBor .Sclass').blur(function(){
	  if ((/^.{1,30}$/).test($("#AddBor .Sclass").val().trim())){
	    inright('#AddBor .Sclass');
	    Sclass_Boolean = true;
	  }else {
	    inwrong('#AddBor .Sclass');
	    Sclass_Boolean = false;
	  }
	});
	$('#AddBor .Stel').blur(function(){
	  if ((/^\d{11}$/).test($("#AddBor .Stel").val().trim())){
	    inright('#AddBor .Stel');
	    Stel_Boolean = true;
	  }else {
	    inwrong('#AddBor .Stel');
	    Stel_Boolean = false;
	  }
	});
	$('#AddBor .Sroom').blur(function(){
	  if ((/^.{5}$/).test($("#AddBor .Sroom").val().trim())){
	    inright('#AddBor .Sroom');
	    Sroom_Boolean = true;
	  }else {
	    inwrong('#AddBor .Sroom');
	    Sroom_Boolean = false;
	  }
	});
	$('#AddBor .Sbnum').blur(function(){
		if($("#AddBor .Sbnum").val()<100){
			a=PrefixInteger($("#AddBor .Sbnum").val(), 3);
			$("#AddBor .Sbnum").val(a);
		}
	    if ((/^\d{3}$/).test($("#AddBor .Sbnum").val().trim())){
	    	var bookdata=getBookDate().map(function(o) {return o.Bnum;});
	    	var bordata=getBorDate().map(function(o) {return o.Sbnum;});
			if (bookdata.indexOf($("#AddBor .Sbnum").val().trim()) > -1) {
				if (bordata.indexOf($("#AddBor .Sbnum").val().trim()) > -1){
					$('#AddBor .Sbnum').parents('.form-row').next().html('该书籍已被借出！').css({"color":"red","opacity":"1"});
				}
				else{
					inright('#AddBor .Sbnum');
			    	Sbnum_Boolean = true;
				}
			}
			else{alert(bookdata.indexOf($("#AddBor .Sbnum").val().trim()));
				$('#AddBor .Sbnum').parents('.form-row').next().html('该书籍不存在').css({"color":"red","opacity":"1"});
				inwrong('#AddBor .Sbnum');
		    	Sbnum_Boolean = false;
			}

	    }
	});
	$('#AddBor .Sbname').blur(function(){
	    if ((/^.{1,30}$/).test($("#AddBor .Sbname").val().trim())){
		    var bookdata=getBookDate().map(function(o) {return o.Bname;});
	    	var bordata=getBorDate().map(function(o) {return o.Sbname;});
			if (bookdata.indexOf($("#AddBor .Sbname").val().trim()) > -1) {
				if (bordata.indexOf($("#AddBor .Sbname").val().trim()) > -1){
					$('#AddBor .Sbname').parents('.form-row').next().html('该书籍已被借出！').css({"color":"red","opacity":"1"});
				}
				else{
					inright('#AddBor .Sbname');
			    	Sbname_Boolean = true;
				}
			}
			else{
				$('#AddBor .Sbname').parents('.form-row').next().html('该书籍不存在').css({"color":"red","opacity":"1"});
				inwrong('#AddBor .Sbname');
		    	Sbname_Boolean = false;
			}

	    }
	});
	$('#AddBor .Sbbort').blur(function(){
	  if ((/^.{7,}$/).test($("#AddBor .Stel").val().trim())){
	    inright('#AddBor .Sbbort');
	    Sbbort_Boolean = true;
	  }else {
	    inwrong('#AddBor .Sbbort');
	    Sbbort_Boolean = false;
	  }
	});
	$('#AddBor .Sbendt').blur(function(){
	  if ((/^.{7,}$/).test($("#AddBor .Sbendt").val().trim())){
	    inright('#AddBor .Sbendt');
	    Sbendt_Boolean = true;
	  }else {
	    inwrong('#AddBor .Sbendt');
	    Sbendt_Boolean = false;
	  }
	});


//**************************change****************************************************

	
	$('#changebor-form .Snum').change(function(){
		if($("#changebor-form .Snum").val()<10000000){
			a=PrefixInteger($("#changebor-form .Snum").val(), 8);
			$("#changebor-form .Snum").val(a);
		}
		if ((/^\d{8}$/).test($(".Snum").val())){
		    var local=getBorDate();
		    var flag=true;
			$.each(local,function(i,n) {
				if(n.Snum == $(".Snum").val()){
					$('#AddBor .Snum').parents('.form-row').next().html('该同学暂时不能借书').css({"color":"red","opacity":"1"});
					flag = false;
					return false;
				}
		  	});
		  	if(flag){
			    inright('#changebor-form .Snum');
			    Snum_Boolean1 = true;
			}
		}
		else {
		    inwrong('#changebor-form .Snum');
		    Snum_Boolean1 = false;
		}
	});
	$('#changebor-form .Sname').change(function(){
	  if ((/^.{1,}$/).test($(".Sname").val().trim())){
	    inright('#changebor-form .Sname');
	    Sname_Boolean1 = true;
	  }else {
	    inwrong('#changebor-form .Sname');
	    Sname_Boolean1 = false;
	  }
	});
	$('#changebor-form .Sclass').change(function(){
	  if ((/^.{1,20}$/).test($("#changebor-form .Sclass").val().trim())){
	    inright('#changebor-form .Sclass');
	    Sclass_Boolean1 = true;
	  }else {
	    inwrong('#changebor-form .Sclass');
	    Sclass_Boolean1 = false;
	  }
	});
	$('#changebor-form .Stel').change(function(){
	  if ((/^.{11,}$/).test($("#changebor-form .Stel").val().trim())){
	    inright('#changebor-form .Stel');
	    Stel_Boolean1 = true;
	  }else {
	    inwrong('#changebor-form .Stel');
	    Stel_Boolean1 = false;
	  }
	});
	$('#changebor-form .Sroom').change(function(){
	  if ((/^.{5}$/).test($("#changebor-form .Sroom").val().trim())){
	    inright('#changebor-form .Sroom');
	    Sroom_Boolean1 = true;
	  }else {
	    inwrong('#changebor-form .Sroom');
	    Sroom_Boolean1 = false;
	  }
	});
	$('#changebor-form .Sbnum').change(function(){
		if($("#changebor-form .Sbnum").val()<100){
			a=PrefixInteger($("#changebor-form .Sbnum").val(), 3);
			$("#changebor-form .Sbnum").val(a);
		}
	    if ((/^\d{3}$/).test($("#changebor-form .Sbnum").val().trim())){
	    	var bookdata=getBookDate().map(function(o) {return o.Bnum;});
	    	var bordata=getBorDate().map(function(o) {return o.Sbnum;});
			if (bookdata.indexOf($("#changebor-form .Sbnum").val().trim()) > -1) {
				if (bordata.indexOf($("#changebor-form .Sbnum").val().trim()) > -1){
					$('#changebor-form .Sbnum').parents('.form-row').next().html('该书籍已被借出！').css({"color":"red","opacity":"1"});
				}
				else{
					inright('#changebor-form .Sbnum');
			    	Sbnum_Boolean1 = true;
				}
			}
			else{
				$('#changebor-form .Sbnum').parents('.form-row').next().html('该书籍不存在').css({"color":"red","opacity":"1"});
				inwrong('#changebor-form .Sbnum');
			    Sbnum_Boolean1 = false;
			}

	    }
	});
	$('#changebor-form .Sbname').change(function(){
	    if ((/^.{1,30}$/).test($("#changebor-form .Sbname").val().trim())){
		    var bookdata=getBookDate().map(function(o) {return o.Bname;});
	    	var bordata=getBorDate().map(function(o) {return o.Sbame;});
			if (bookdata.indexOf($("#changebor-form .Sbname").val().trim()) > -1) {
				if (bordata.indexOf($("#changebor-form .Sbname").val().trim()) > -1){
					$('#changebor-form .Sbname').parents('.form-row').next().html('该书籍已被借出！').css({"color":"red","opacity":"1"});
				}
				else{
					inright('#changebor-form .Sbname');
			    	Sbname_Boolean1 = true;
				}
			}
			else{
				$('#changebor-form .Sbname').parents('.form-row').next().html('该书籍不存在').css({"color":"red","opacity":"1"});
				inwrong('#changebor-form .Sbname');
		        Sbname_Boolean1 = false;
			}

	    }
	});
	$('#changebor-form .Sbbort').change(function(){
	  if ((/^.{7,}$/).test($("#changebor-form .Stel").val().trim())){
	    inright('#changebor-form .Sbbort');
	    Sbbort_Boolean1 = true;
	  }else {
	    inwrong('#changebor-form .Sbbort');
	    Sbbort_Boolean1 = false;
	  }
	});
	$('#changebor-form .Sbendt').change(function(){
	  if ((/^.{1,}$/).test($("#changebor-form .Sbendt").val().trim())){
	    inright('#changebor-form .Sbendt');
	    Sbendt_Boolean1 = true;
	  }else {
	    inwrong('#changebor-form .Sbendt');
	    Sbendt_Boolean1 = false;
	  }
	});

	$("#btnbor-add").on("click",function(event){
		if(Snum_Boolean && Sname_Boolean && Sclass_Boolean && Stel_Boolean && Sroom_Boolean && Sbnum_Boolean && Sbname_Boolean && Sbbort_Boolean && Sbendt_Boolean== true){
			var local=getBorDate();
		    local.push({
				Snum:$("#AddBor .Snum").val().trim(),
				Sname:$("#AddBor .Sname").val().trim(),
				Sclass:$("#AddBor .Sclass").val().trim(),
				Stel:$("#AddBor .Stel").val().trim(),
				Sroom:$("#AddBor .Sroom").val().trim(),
				Sbnum:$("#AddBor .Sbnum").val().trim(),
				Sbname:$("#AddBor .Sbname").val().trim(),
				Sbbort:$("#AddBor .Sbbort").val().trim(),
				Sbendt:$("#AddBor .Sbendt").val().trim(),
			});
			saveBorDate(local);
			$("#InformCont").empty();
			$("#InformCont").prepend('成功添加该借阅信息！</br><div>学号：'+$("#AddBor .Snum").val()+'</br>姓名：'+$("#AddBor .Sname").val()+'</br>班级：'+$("#AddBor .Sclass").val()+'</br>电话：'+$("#AddBor .Stel").val()+'</br>寝室楼号：'+$("#AddBor .Sroom").val()+'</br>借阅书籍编号：'+$("#AddBor .Sbnum").val()+'</br>借阅书籍书名：'+$("#AddBor .Sbname").val()+'</br>借阅时间：'+$("#AddBor .Sbbort").val()+'</br>到期时间：'+$("#AddBor .Sbendt").val()+'</br></br></div>');
	    	$("#AddBor .Snum").val("");
			$("#AddBor .Sname").val("");
			$("#AddBor .Sclass").val("");
			$("#AddBor .Stel").val("");
			$("#AddBor .Sroom").val("");
			$("#AddBor .Sbnum").val("");			
			$("#AddBor .Sbname").val("");			
			$("#AddBor .Sbbort").val("");
			$("#AddBor .Sbendt").val("");
			$('.form-row>.lab>input+span').html("");
			$('.required+span').html("*").css("color","red" );

	    }else {
		    alert("请完善信息");
	    }
	});
    
	$("#btnbor-find").on("click",function(event){
		var data = getBorDate();
		var flag=0;
		$("#InformCont").empty();
		$.each(data,function(i,n) {
			if(n.Snum == $("#FindBor .inputSnum").val()||n.Sbnum == $("#FindBor .inputSbnum").val()){
				$("#InformCont").prepend("<div>学号："+n.Snum+"</br>姓名："+n.Sname+"</br>班级："+n.Sclass+"</br>电话："+n.Stel+"</br>寝室楼号："+n.Sroom+"</br>借阅书籍编号："+n.Sbnum+"</br>借阅书籍书名："+n.Sbname+"</br>借阅时间："+n.Sbbort+"</br>到期时间："+n.Sbendt+"</br></br></div>");
				flag=1;return false;
			}
		})
		if(!flag){$("#InformCont").prepend("没有该借阅信息！");}
	});
	
	$("#btnbor-delete").on("click",function(event){
		if(confirm("确定要删除吗？")){	
			var dt = getBorDate();
			var flag=0;
			$("#InformCont").empty();
			$.each(dt,function(i,n) {
				if(n.Sbnum == $("#DeleteBor .inputNum").val()||n.Snum == $("#DeleteBor .inputSnum").val()){
					dt.splice(i,1);flag=1;return false;
				}
			})
			$("#DeleteBor .inputNum").val("");
			if(!flag){$("#InformCont").prepend("没有该借阅信息！");}
			else {$("#InformCont").prepend("已删除该借阅信息！");}
			saveBorDate(dt);
		}
	});

	$("#btn-change3").on("click",function(event){
		var dt = getBorDate();
		var flag1=0;
		$("#InformCont").empty();
		$.each(dt,function(i,n) {
			if(n.Sbnum == $("#changebor .inputNum").val()||n.Snum == $("#changebor .inputSnum").val()){
				$("#changebor-form").fadeIn(100);
				$("#changebor-form .Snum").val(n.Snum);
				$("#changebor-form .Sname").val(n.Sname);
				$("#changebor-form .Sclass").val(n.Sclass);
				$("#changebor-form .Stel").val(n.Stel);
				$("#changebor-form .Sroom").val(n.Sroom);
				$("#changebor-form .Sbnum").val(n.Sbnum);			
				$("#changebor-form .Sbname").val(n.Sbname);			
				$("#changebor-form .Sbbort").val(n.Sbbort);
				$("#changebor-form .Sbendt").val(n.Sbendt);
				
				$('.required+span').html("*").css("color","red" );
				$("form>div>.col-md-6>span").css({"color":"red","opacity":"0"});
				$("#btn-change2").on("click",function(event){
					if(Snum_Boolean1 && Sname_Boolean1 && Sclass_Boolean1 && Stel_Boolean1 && Sroom_Boolean1 && Sbnum_Boolean1 && Sbname_Boolean1 && Sbbort_Boolean1 && Sbendt_Boolean1 == true){
						n.Snum=$("#changebor-form .Snum").val().trim();
						n.Sname=$("#changebor-form .Sname").val().trim();
						n.Sclass=$("#changebor-form .Sclass").val().trim();
						n.Stel=$("#changebor-form .Stel").val().trim();
						n.Sroom=$("#changebor-form .Sroom").val().trim();
						n.Sbnum=$("#changebor-form .Sbnum").val().trim();
						n.Sbname=$("#changebor-form .Sbname").val().trim();
						n.Sbbort=$("#changebor-form .Sbbort").val().trim();
						n.Sbendt=$("#changebor-form .Sbendt").val().trim();
						saveBorDate(dt);
						$("#InformCont").empty();
						$("#InformCont").prepend("已修改该借阅信息！");
					    $("#btn-change4").parents("#changebor-form").hide();
					    return false;
				    }else {
					    alert("请完善信息");
					    //**********************************************************************有bug********************************************************8
				    }
				});
				flag1=1;
			}
		})
		if(!flag1){$("#InformCont").prepend("没有该本书！");}
	});

	$("#changebor-form .btn-close").on("click",function(event){
		$("#InformCont").empty();
		$("#InformCont").prepend("修改借阅信息失败！");
	});
//******************************************borrow end****************



	$("#BookReportup").on("click",function(event){
		$("#InformCont").empty();
		$("#InformCont").prepend('<div id="ShowReport"> <div class="row"> <div class="col-md-12"> <br> <h2 style="text-align: center;margin-top: 0px;">图书信息报表</h2> <div class="table-responsive"> <table class="table table-striped table-bordered"data-name="cool-table"> <thead> <tr> <th>编号</th> <th>书名</th> <th>作者</th> <th>录入时间</th> <th>录入人员姓名</th> <th>录入人员编号</th> <th>出版社</th> <th>出版时间</th> <th>页数</th><th>状态</th> </tr> </thead> <tbody id="InformReport"> <tbody> </table> </div> </div> </div> </div>');
		var bookdata = getBookDate();
		var newdata=bookdata.sort(getSortFun('Bnum', 'desc'));
		var bordata = getBorDate();
		var sbarr = bordata.map(function(o) {return o.Sbnum;});
		$.each(newdata,function(i,n) {
			if (sbarr.indexOf(n.Bnum) > -1) {
			    $("#InformReport").append('<tr><td>'+n.Bnum+'</td><td>'+n.Bname+'</td><td>'+n.Wname+'</td><td>'+n.Itime+'</td><td>'+n.Iname+'</td><td>'+n.Inum+'</td><td>'+n.Pname+'</td><td>'+n.Ptime+'</td><td>'+n.page+'</td><td style="color:red">已借阅</td><tr>');
			}else{
			    $("#InformReport").append('<tr><td>'+n.Bnum+'</td><td>'+n.Bname+'</td><td>'+n.Wname+'</td><td>'+n.Itime+'</td><td>'+n.Iname+'</td><td>'+n.Inum+'</td><td>'+n.Pname+'</td><td>'+n.Ptime+'</td><td>'+n.page+'</td><td>可借阅</td><tr>');
			}
		})
	});
	$("#BookReportdo").on("click",function(event){
		$("#InformCont").empty();
		$("#InformCont").prepend('<div id="ShowReport"> <div class="row"> <div class="col-md-12"> <br> <h2 style="text-align: center;margin-top: 0px;">图书信息报表</h2> <div class="table-responsive"> <table class="table table-striped table-bordered"data-name="cool-table"> <thead> <tr> <th>编号</th> <th>书名</th> <th>作者</th> <th>录入时间</th> <th>录入人员姓名</th> <th>录入人员编号</th> <th>出版社</th> <th>出版时间</th> <th>页数</th><th>状态</th> </tr> </thead> <tbody id="InformReport"> <tbody> </table> </div> </div> </div> </div>');
		var bookdata = getBookDate();
		var newdata=bookdata.sort(getSortFun('Bnum', 'asc'));
		var bordata = getBorDate();
		var sbarr = bordata.map(function(o) {return o.Sbnum;});
		$.each(newdata,function(i,n) {
			if (sbarr.indexOf(n.Bnum) > -1) {
			    $("#InformReport").append('<tr><td>'+n.Bnum+'</td><td>'+n.Bname+'</td><td>'+n.Wname+'</td><td>'+n.Itime+'</td><td>'+n.Iname+'</td><td>'+n.Inum+'</td><td>'+n.Pname+'</td><td>'+n.Ptime+'</td><td>'+n.page+'</td><td style="color:red">已借阅</td><tr>');
			}else{
			    $("#InformReport").append('<tr><td>'+n.Bnum+'</td><td>'+n.Bname+'</td><td>'+n.Wname+'</td><td>'+n.Itime+'</td><td>'+n.Iname+'</td><td>'+n.Inum+'</td><td>'+n.Pname+'</td><td>'+n.Ptime+'</td><td>'+n.page+'</td><td>可借阅</td><tr>');
			}
		})
	});
	$("#BorReportup").on("click",function(event){
		$("#InformCont").empty();
		$("#InformCont").prepend('<div id="ShowReport"> <div class="row"> <div class="col-md-12"> <br> <h2 style="text-align: center;margin-top: 0px;">学生借阅报表</h2> <div class="table-responsive"> <table class="table table-striped table-bordered"data-name="cool-table"> <thead> <tr> <th>学号</th> <th>姓名</th> <th>班级</th> <th>电话</th> <th>寝室楼号</th> <th>借阅书籍编号</th> <th>借阅书籍书名</th> <th>借阅时间</th> <th>到期时间</th> </tr> </thead> <tbody id="InformReport"> <tbody> </table> </div> </div> </div> </div>');
		var data = getBorDate();
		var newdata=data.sort(getSortFun('Snum', 'asc'));
		$.each(newdata,function(i,n) {
			
			$("#InformReport").prepend('<tr><td>'+n.Snum+'</td><td>'+n.Sname+'</td><td>'+n.Sclass+'</td><td>'+n.Stel+'</td><td>'+n.Sroom+'</td><td>'+n.Sbnum+'</td><td>'+n.Sbname+'</td><td>'+n.Sbbort+'</td><td>'+n.Sbendt+'</td><tr>');
		})
	});
	$("#BorReportdo").on("click",function(event){
		$("#InformCont").empty();
		$("#InformCont").prepend('<div id="ShowReport"> <div class="row"> <div class="col-md-12"> <br> <h2 style="text-align: center;margin-top: 0px;">学生借阅报表</h2> <div class="table-responsive"> <table class="table table-striped table-bordered"data-name="cool-table"> <thead> <tr> <th>学号</th> <th>姓名</th> <th>班级</th> <th>电话</th> <th>寝室楼号</th> <th>借阅书籍编号</th> <th>借阅书籍书名</th> <th>借阅时间</th> <th>到期时间</th> </tr> </thead> <tbody id="InformReport"> <tbody> </table> </div> </div> </div> </div>');
		var data = getBorDate();
		var newdata=data.sort(getSortFun('Snum', 'desc'));
		$.each(newdata,function(i,n) {
			
			$("#InformReport").prepend('<tr><td>'+n.Snum+'</td><td>'+n.Sname+'</td><td>'+n.Sclass+'</td><td>'+n.Stel+'</td><td>'+n.Sroom+'</td><td>'+n.Sbnum+'</td><td>'+n.Sbname+'</td><td>'+n.Sbbort+'</td><td>'+n.Sbendt+'</td><tr>');
		})
	});
})