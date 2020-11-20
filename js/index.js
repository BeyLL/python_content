/*
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2020-11-19 09:47:50
 * @Description:
 * @LastEditTime: 2020-11-20 08:59:43
 */

function Devil() {
	//创建convas元素
	const sonDevilEle = document.createElement('CANVAS')

	//convas元素中添加内容
	sonDevilEle.setAttribute('id', 'imgCanvas')
	sonDevilEle.width = 500
    sonDevilEle.height = 500
    
    //获取位置
    getLocation()

	//圆心坐标
	const clientX = 250
	const clientY = 250
	const radius = 4
	const cx = sonDevilEle.getContext('2d')

	function drawDate() {
		//时间
		const date = new Date()
		
        const second = date.getSeconds()
        const minute = date.getMinutes()+(second/60)
        const hourDate = date.getHours()+(minute/60)
        //清除画布
        cx.clearRect(0,0,sonDevilEle.width,sonDevilEle.height);

        //绘制圆中心点
        cx.fillStyle='#fff';
        cx.arc(clientX,clientY,radius,0,2*Math.PI,false)
        cx.fill()
        
        //时针刻度
        for(let i=0;i<12;i++){
            cx.save();
            cx.lineWidth = 5;
            
            cx.translate(clientX,clientY);
            cx.rotate(30*i*Math.PI/180);
            cx.beginPath()
            cx.moveTo(0, 190);
            cx.lineTo(0,170)
            cx.strokeStyle = 'white'
          
            cx.closePath();
            cx.stroke();
            cx.restore();
        }

        //分针刻度
        for(let i=0;i<60;i++){
            const crude = i%5;
            cx.save();
            cx.lineWidth = 3;
            cx.translate(clientX,clientY);
            cx.rotate(6*i*Math.PI/180);
            cx.beginPath();
            cx.moveTo(0,190);
            cx.lineTo(0,180);
            cx.strokeStyle = 'white';
            cx.closePath();
            cx.stroke();
            cx.restore()
        }

 
        //添加时针
        cx.save();
        cx.lineWidth = 5;
        cx.translate(clientX,clientY);
        cx.rotate(30*(hourDate%12)*Math.PI/180);
        cx.beginPath();
        cx.moveTo(0,0);
        cx.lineTo(0,-(clientY/2.5));
        cx.strokeStyle = 'white';
        cx.closePath();
        cx.stroke();
        cx.restore()


        //分针
        cx.save();
        cx.lineWidth = 3;
        cx.translate(clientX,clientY);
        cx.rotate(6*minute*Math.PI/180);
        cx.beginPath();
        cx.moveTo(0,0);
        cx.lineTo(0,-(clientY/1.8));
        cx.strokeStyle = 'white';
        cx.closePath();
        cx.stroke();
        cx.restore();

        //秒针
        cx.save();
        cx.lineWidth = 2;
        cx.translate(clientX,clientY);
        cx.rotate(6*second*Math.PI/180);
        cx.beginPath();
        cx.moveTo(0,0);
        cx.lineTo(0,-(clientY/1.5));
        cx.strokeStyle = '#fff';
        cx.closePath();
        cx.stroke();
        cx.restore();

        //填充文字
        cx.font = '24px bold 黑体';
        cx.fillStyle = '#fff';
        cx.fillText('天 王',clientX-24,clientY-100)
        
    }
    setInterval(()=>{drawDate()},1000)

    //获取当前位置
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                console.log(position)
            })

        }
    }
    
	//加入body
	document.body.appendChild(sonDevilEle)
}

//执行动画
Devil.prototype.action = function () {
	console.log('执行动画')
}

//停止动画
Devil.prototype.cancel = function () {}

const devil = new Devil()

//点击执行动画
const canvas = document.getElementById('imgCanvas')
canvas.onmouseover = function () {
	devil.action()
}

canvas.onmouseout = function () {
	devil.cancel()
}
