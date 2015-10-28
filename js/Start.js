/**
 * Created with EditPlus.
 * User: leemagnum
 * Date: 14-8-1
 * Time: 上午10.20
 * 开始对象.
 */
 function Start(){

    var _this = this;
	
	base(_this, LSprite, []);

	_this.init();

 };

 
var s = {
	init: function(){

		var _this = this;
		
		//添名字
		_this.addNameFn();
		
		//添加游戏介绍
		_this.addInfoFn();

		//添加开始游戏按钮
		_this.addStartFn();

	},
	addNameFn: function(){

		var _this = this;

		_this.nameLayer = new LSprite();
		_this.nameLayer.x = LGlobal.width / 2;
		_this.addChild(_this.nameLayer);
		
		_this.name = new LTextField();
		_this.name.color = oData.startColor;
		_this.name.size = 30;
		_this.name.textAlign = "center";
		_this.name.y = 125;
		_this.name.text = "今天你色了吗";
		_this.nameLayer.addChild(_this.name);

	},
	addInfoFn: function(){

		var _this = this;

		_this.infoLayer = new LSprite();
		_this.infoLayer.x = LGlobal.width / 2;
		_this.addChild(_this.infoLayer);
		
		_this.info = new LTextField();
		_this.info.color = oData.startColor;
		_this.info.size = 16;
		_this.info.textAlign = "center";
		_this.info.y = 280;
		_this.info.text = oData.sInfo;
		_this.infoLayer.addChild(_this.info);

		//_this.addEventListener(LMouseEvent.MOUSE_UP, $.proxy(_this.moneyUpFn, _this));

	},
	addStartFn: function(){

		var _this = this;

		_this.startLayer = new LSprite();
		_this.startLayer.x = LGlobal.width / 2;
		_this.startLayer.y = 480;
		_this.addChild(_this.startLayer);
		
		_this.start = new LTextField();
		_this.start.color = oData.startColor;
		_this.start.size = 30;
		_this.start.textAlign = "center";
		_this.start.text = "开始游戏";
		_this.startLayer.addChild(_this.start);
		
		_this.startLayer.graphics.drawRect(0, "", [ - _this.start.width * 0.5, 0, _this.start.width, 50], true, oData.mainBg);
		
		_this.startLayer.addEventListener(LMouseEvent.MOUSE_UP, $.proxy(_this.moneyUpFn, _this));

	},
	moneyUpFn: function(event){

		var _this = this;

		//删除开始层
		_this.remove();
		
		//新建主程序 开始游戏
		colorLayer =  new Main();
		gameLayer.addChild(colorLayer);

	}
};

for(var k in s)Start.prototype[k] = s[k];