$(function(){
    //获取到三个元素，jquery可以直接给三个元素添加事件
    //链式写法
   $("#cjk").mouseover( function(){
        $(this).children([0]).slideDown(300)
    }).mouseout(function(){
        $(this).children([0]).hide()
    });
  
});

$(function() {
    fn()
    function fn() {
      var timer = setInterval(function() {
        var start = '2020/10/21 00:00:00';
        var StartTime = new Date(start);
        var NowTime = new Date();
        var day = NowTime.getDate();
        var month = NowTime.getMonth() + 1;
        var year = NowTime.getFullYear();
        
        var tw = year + '/' + month + '/' + day + ' 08:00:00';
        var ei = year + '/' + month + '/' + day + ' 12:00:00';
        var tw1 = year + '/' + month + '/' + day +' 14:00:00';
        var ei1 = year + '/' + month + '/' + day +' 20:00:00';
        tw = new Date(tw).getTime();
        ei = new Date(ei).getTime();
        tw1 = new Date(tw1).getTime();
        ei1 = new Date(ei1).getTime();
        var EndTime = '';
        var sTime = '';
        if(NowTime < StartTime) {
          EndTime = StartTime;
          $('#stopNow').css('display', 'none');
          $('#startNow').css('display', 'none');
          $('#noStart').css('display', 'block');
          $(".content").html("距离活动开始")
        } else {
          if(NowTime < tw) {
            EndTime = tw;
            sTime = '8:00 场';
            $('#stopNow').css('display', 'none');
            $('#startNow').css('display', 'none');
            $('#noStart').css('display', 'block');
            $(".content").html("距离活动开始剩余")
          } else if(NowTime >= tw && NowTime < ei) {
            EndTime = ei;
            sTime = '12:00 场';
            $('#stopNow').css('display', 'none');
            $('#startNow').css('display', 'block');
            $('#noStart').css('display', 'none');
            $(".content").html("距离活动结束剩余")
          }else if(NowTime < tw1){
            EndTime =tw1;
           sTime = '14:00 场';
            $('#stopNow').css('display', 'none');
            $('#startNow').css('display', 'none');
            $('#noStart').css('display', 'block');
            $(".content").html("距离活动开始剩余")
          } else if(NowTime >= tw1 && NowTime < ei1) {
            EndTime = ei1;
            sTime = '20:00 场';
            $('#stopNow').css('display', 'none');
            $('#startNow').css('display', 'block');
            $('#noStart').css('display', 'none');
            $(".content").html("距离活动结束剩余")
          }else if(NowTime >= ei1) {
            EndTime = tw + 24 * 60 * 60 * 1000;
            $('#stopNow').css('display', 'block');
            $('#startNow').css('display', 'none');
            $('#noStart').css('display', 'none');
            $(".content").html("距离活动开始剩余")
          }
        }
        var t = EndTime - NowTime;
        if(t < 1000) {
          window.location.reload();
          clearInterval(timer);
          timer = null;
          return false;
        }
        var d = 0;
        var h = 0;
        var m = 0;
        var s = 0;
        if(t >= 0) {
          d = Math.floor((t / 1000 / 3600) / 24);
          h = Math.floor((t / 1000 / 3600) % 24);
          m = Math.floor((t / 1000 / 60) % 60);
          s = Math.floor(t / 1000 % 60);
          if(d < 10) {
            d = "0" + d;
          }
          if(h < 10) {
            h = "0" + h;
          }
          if(m < 10) {
            m = "0" + m;
          }
          if(s < 10) {
            s = "0" + s;
          }
          $('.botHours').html(h);
          $('.botMIn').html(m);
          $('.botSecond').html(s);
          $("#chang").html(sTime)
        }
      }, 1000)
    }
  });

