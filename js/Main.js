/**
 * Created with EditPlus.
 * User: leemagnum
 * Date: 14-8-1
 * Time: 上午10.20
 * 主程序对象.
 */
 function Main(){

    var _this = this;
	
	base(_this, LSprite, []);

	_this.init();

	//新建分数对象
	_this.scoreLayer = new Score();
	_this.scoreLayer.x = 30;
	_this.scoreLayer.y = 40;
	_this.addChild(_this.scoreLayer);

	//新建时间对象
	_this.timeLayer = new Time();
	_this.timeLayer.x = 230;
	_this.timeLayer.y = 40;
	_this.addChild(_this.timeLayer);
	
};

 
var m = {
	init: function(json){

		var _this = this;

		//添加大字
		_this.bigFontFn(true);

		//添加小字
		_this.loopFn();

	},
	infoFn: function(iRan){

		var _this = this;
		
		_this.infoLayer = new LSprite();
		_this.infoLayer.x = Tool.sc({w: 385}).x;
		_this.infoLayer.y = 400;
		_this.addChild(_this.infoLayer);
		
		_this.info = new LTextField();
		_this.info.color = "#000000";
		_this.info.size = 26;
		_this.info.text = oData.sInfo + " " + oData.aFont[iRan];
		_this.info.setWordWrap(true);
		_this.info.width = 365;
		_this.infoLayer.addChild(_this.info);

	},
	bigFontFn: function(bisFirst){

		var _this = this,
			iRan = Tool.rand(0, 4);
		
		_this.bigFontLayer = new LSprite();
		_this.bigFontLayer.x = LGlobal.width * 0.5;
		_this.bigFontLayer.y = 120;
		_this.addChild(_this.bigFontLayer);

		_this.bigFont = new LTextField();
		_this.bigFont.color = oData.aColor[iRan];
		_this.bigFont.textAlign = "center";
		_this.bigFont.size = 200;
		_this.bigFont.text = oData.aFont[iRan];
		_this.bigFontLayer.addChild(_this.bigFont);
		
		switch(oData.aColor[iRan]){
			case "#0000ff":
				_this.bigFontLayer.index = "蓝";
				break;
			case "#ffff00":
				_this.bigFontLayer.index = "黄";
				break;
			case "#ff0000":
				_this.bigFontLayer.index = "红";
				break;
			case "#00ff00":
				_this.bigFontLayer.index = "绿";
				break;
			case "#000000":
				_this.bigFontLayer.index = "黑";
				break;
		}
		
		if(bisFirst){
			//添加提示
			_this.infoFn(iRan);
		}

	},
	loopFn: function(){		//循环添加选择字

		var _this = this,
			len = 5,
			i = 0;

		_this.smallAllLayer = new LSprite();
		_this.addChild(_this.smallAllLayer);

		for(i=0; i < len; i++){
			//console.log(i);
			_this.addFn(i);
		}

	},
	addFn: function(i){		//添加1个选择字

		var _this = this;
		
		_this.smallFontLayer = new LSprite();
		_this.smallFontLayer.index = oData.aFont[i];
		_this.smallFontLayer.x = oData.iFontW * i;
		_this.smallFontLayer.y = 640;
		_this.smallAllLayer.addChild(_this.smallFontLayer);
		
		_this.smallFont = new LTextField();
		_this.smallFont.color = oData.aColor[i];
		_this.smallFont.size = 74;
		
		_this.smallFont.text = oData.aFont[i];
		_this.smallFontLayer.addChild(_this.smallFont);
		
		_this.smallFontLayer.addEventListener(LMouseEvent.MOUSE_DOWN, $.proxy(_this.smallFontDowmFn, _this));
		
	},
	smallFontDowmFn: function(evnet,object){

		var _this = this;

		if(!oData.bIsStart){
			false;
		}
		
		if(_this.bigFontLayer.index == object.index){
			
			//console.log(_this.bigFontLayer.index +"+"+ object.index);

			if(_this.infoLayer){
				//第一次
				_this.infoLayer.remove();
			}

			//console.log("对");
			
			//删除已有
			_this.reSetFn();

			
			//重新排列数组的顺序
			oData.aFont.sort(function(){ return 0.5 - Tool.oMath.random(); });
			oData.aColor.sort(function(){ return 0.5 - Tool.oMath.random(); });

			//添加大字
			_this.bigFontFn();

			//添加小字
			_this.loopFn();

			//更新分数
			_this.scoreLayer.childList[0].text = "分数：" + ++oData.score;
			//console.log(_this.scoreLayer.childList[0]);
			
			//开始计时
			oData.bStartTime = true;

		}

	},
	reSetFn: function(){

		var _this = this;

		_this.smallAllLayer.removeAllChild();
		_this.bigFontLayer.remove();

	}
};

for(var k in m)Main.prototype[k] = m[k];